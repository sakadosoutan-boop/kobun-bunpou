import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  ScreenState,
  GameMode,
  ChoiceOption,
  VerbProblem,
  KakariProblem,
  MistakeItem,
  Stage,
  PlayerProfile,
  RuleVariant,
} from './types';
import {
  VERB_PROBLEMS,
  AUXILIARY_CARDS,
  KAKARI_PROBLEMS,
  MEANING_PROBLEMS,
  READING_PROBLEMS,
  CONJUGATION_PROBLEMS,
  KEIGO_PROBLEMS,
  STAGES,
  generateEndlessStage,
  checkNewTitles,
  getHeldRankInfo,
} from './data';
import { loadPlayerProfile, savePlayerProfile, DEFAULT_PROFILE } from './storage';
import {
  DailyQuestion,
  applyDailyCompletion,
  generateDailyQuestions,
  getDateKey,
  getYesterdayKey,
  pickDailyStageIndex,
} from './modes/daily';
import {
  SessionQuestion,
  reviewKeyFor,
  shuffledCopy,
  buildFieldSession,
  isFieldMode,
  FIELD_SESSION_COUNT,
  FIELD_TIMEATTACK_COUNT,
} from './modes/session';
import {
  buildReviewSession,
  registerReviewMistake,
  applyReviewCorrect,
} from './modes/review';
import {
  KEIGO_DIRECTION_CHOICES,
  keigoDirectionLabel,
} from './modes/keigo';
import { EXAM_MISTAKE_LIMIT } from './modes/exam';
import {
  bumpMission,
  ensureWeeklyMissions,
  MissionMetric,
} from './modes/missions';
import { sound } from './sound';
import { SakuraCanvas } from './components/SakuraCanvas';
import { TitleScreen } from './components/TitleScreen';
import { RuleModal } from './components/RuleModal';
import { GrammarModal } from './components/GrammarModal';
import { ReviewModal } from './components/ReviewModal';
import { CompendiumModal } from './components/CompendiumModal';
import { BattleScreen } from './components/BattleScreen';
import { ResultScreen } from './components/ResultScreen';
import { FloatingDamage } from './components/BattleEffects';

export const App: React.FC = () => {
  const [profile, setProfile] = useState<PlayerProfile>(DEFAULT_PROFILE);
  const [screen, setScreen] = useState<ScreenState>('title');
  const [gameMode, setGameMode] = useState<GameMode>('story');
  const [ruleVariant, setRuleVariant] = useState<RuleVariant>('normal');
  const ruleVariantRef = useRef<RuleVariant>('normal');
  const currentStageRef = useRef<Stage>(STAGES[0]);
  const currentBattleKindRef = useRef<'verb' | 'kakari' | 'keigo'>('verb');

  // Modals
  const [isRuleOpen, setIsRuleOpen] = useState(false);
  const [isGrammarOpen, setIsGrammarOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isCompendiumOpen, setIsCompendiumOpen] = useState(false);

  // Battle State
  const [stageIndex, setStageIndex] = useState(0);
  const [currentStage, setCurrentStage] = useState<Stage>(STAGES[0]);
  const [enemyHp, setEnemyHp] = useState(140);
  const [enemyMaxHp, setEnemyMaxHp] = useState(140);
  const [playerHp, setPlayerHp] = useState(100);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);

  // Mode-specific states
  const [wave, setWave] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [score, setScore] = useState(0);
  const [expGained, setExpGained] = useState(0);
  const [newTitles, setNewTitles] = useState<string[]>([]);

  // Prompts & Cards
  const [guideText, setGuideText] = useState('次の動詞に接続する助動詞を選べ');
  const [targetWord, setTargetWord] = useState('');
  const [targetForm, setTargetForm] = useState('');
  const [messageLog, setMessageLog] = useState<React.ReactNode>('言霊を繰り出せ！');
  const [cards, setCards] = useState<ChoiceOption[]>([]);

  // Effects & Visuals
  const [isLocked, setIsLocked] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [enemyTransform, setEnemyTransform] = useState('');
  const [isHitFlash, setIsHitFlash] = useState(false);
  const [showSlash, setShowSlash] = useState(false);
  const [damageQueue, setDamageQueue] = useState<FloatingDamage[]>([]);
  const [isFever, setIsFever] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isBgmOn, setIsBgmOn] = useState(true);

  // Learning tracking
  const [mistakes, setMistakes] = useState<MistakeItem[]>([]);
  const [isReviewDrill, setIsReviewDrill] = useState(false);
  const reviewDrillIndex = useRef(0);

  const isFeverRef = useRef(false);
  const currentProblemRef = useRef<VerbProblem | null>(null);
  const currentKakariRef = useRef<KakariProblem | null>(null);

  // Daily mode (日課祓い): date-seeded question queue
  const dailyQueueRef = useRef<DailyQuestion[]>([]);
  const dailyIndexRef = useRef(0);

  // Sudden-death mode (斬撃一閃): current streak of consecutive correct answers
  const streakRef = useRef(0);

  // 奥義「言霊解放」: ゲージと使用済みフラグ（戦闘ごとにリセット）
  const [ougiGauge, setOugiGauge] = useState(0);
  const [ougiUsed, setOugiUsed] = useState(false);

  // 昇進試験のミス回数
  const examMistakesRef = useRef(0);

  // 週間ミッション達成通知（報酬EXP）の保留キュー
  const missionNoticesRef = useRef<number[]>([]);

  // Session-queue modes (meaning / review / reading / conjugation):
  // a fixed list of questions served in order, like the daily queue
  const [sentenceText, setSentenceText] = useState<string | null>(null);
  const [sentenceHighlight, setSentenceHighlight] = useState<string | null>(null);
  const sessionQueueRef = useRef<SessionQuestion[]>([]);
  const sessionIndexRef = useRef(0);
  const sessionCorrectRef = useRef(0);
  const sessionActiveRef = useRef(false);
  const reviewFallbackRef = useRef(false);
  const currentQuizRef = useRef<{
    reviewKey: string;
    correctAnswer: string;
    explanation: string;
    targetWord: string;
    targetForm: string;
    isKakari: boolean;
  } | null>(null);

  // Load saved profile on startup
  useEffect(() => {
    const loaded = loadPlayerProfile();
    const ensured = ensureWeeklyMissions(loaded);
    if (ensured !== loaded) savePlayerProfile(ensured);
    setProfile(ensured);
  }, []);

  // 週が変わっていたらタイトル表示時にミッションを作り直す
  useEffect(() => {
    if (screen !== 'title') return;
    setProfile((prev) => {
      const ensured = ensureWeeklyMissions(prev);
      if (ensured !== prev) {
        savePlayerProfile(ensured);
        return ensured;
      }
      return prev;
    });
  }, [screen]);

  // 週間ミッション達成の通知（バトル中に浮き出し表示）
  useEffect(() => {
    if (screen !== 'battle' || missionNoticesRef.current.length === 0) return;
    const rewards = missionNoticesRef.current.splice(0);
    sound.playSpecial();
    rewards.forEach((r) => addDamagePopup(`週間任務達成！ +${r} 徳`, true));
  }, [profile, screen]);

  /** プロフィール更新の中で週間ミッション進捗も加算する（達成通知はキューへ） */
  const applyMissions = (
    p: PlayerProfile,
    ...metrics: MissionMetric[]
  ): PlayerProfile => {
    let cur = p;
    for (const metric of metrics) {
      const res = bumpMission(cur, metric, 1);
      cur = res.profile;
      res.completed.forEach((c) => missionNoticesRef.current.push(c.template.reward));
    }
    return cur;
  };

  /** 敵討伐（ステージ撃破）のミッション進捗 */
  const addEnemyDefeatMission = useCallback(() => {
    setProfile((prev) => {
      const updated = applyMissions(prev, 'enemyDefeats');
      savePlayerProfile(updated);
      return updated;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** 奥義ゲージを溜める（正解1回で約3分の1） */
  const chargeOugi = useCallback(() => {
    setOugiGauge((g) => Math.min(100, g + 34));
  }, []);

  const addDamagePopup = (text: string, isCritical: boolean, isPlayerDamage = false) => {
    const id = Date.now() + Math.random();
    setDamageQueue((prev) => [...prev, { id, text, isCritical, isPlayerDamage }]);
    setTimeout(() => {
      setDamageQueue((prev) => prev.filter((d) => d.id !== id));
    }, 1100);
  };

  const handleToggleBgm = () => {
    const state = sound.toggleBgm();
    setIsBgmOn(state);
  };

  // Timer loop for the timeattack rule variant (field modes)
  useEffect(() => {
    if (screen !== 'battle' || ruleVariant !== 'timeattack' || !isFieldMode(gameMode)) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          concludeTimeAttack();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, gameMode, ruleVariant]);

  // Build the 4 choices for a verb-connection problem (1 correct connection + 3 others)
  const buildVerbChoices = (problem: VerbProblem): ChoiceOption[] => {
    const correctCards = AUXILIARY_CARDS.filter((c) => c.conn === problem.targetConn);
    const wrongCards = AUXILIARY_CARDS.filter((c) => c.conn !== problem.targetConn);

    const pickedCorrect = correctCards[Math.floor(Math.random() * correctCards.length)];
    const shuffledWrongs = [...wrongCards].sort(() => 0.5 - Math.random()).slice(0, 3);
    const hand = [pickedCorrect, ...shuffledWrongs].sort(() => 0.5 - Math.random());

    return hand.map((card) => ({
      text: card.name,
      sub: `${card.conn}接続<br>${card.mean}`,
      isCorrect: card.conn === problem.targetConn,
      conn: card.conn,
    }));
  };

  // Build the 4 choices for a kakari-musubi problem
  const buildKakariChoices = (kakari: KakariProblem): ChoiceOption[] =>
    [
      { text: kakari.correct.text, sub: kakari.correct.sub, isCorrect: true },
      ...kakari.wrongs.map((w) => ({ text: w.text, sub: w.sub, isCorrect: false })),
    ].sort(() => 0.5 - Math.random());

  // Normal turn generator
  const setupNormalTurn = useCallback(() => {
    isFeverRef.current = false;
    setIsFever(false);
    currentKakariRef.current = null;
    currentBattleKindRef.current = 'verb';
    setSentenceText(null);
    setSentenceHighlight(null);

    setGuideText('次の動詞に接続する助動詞を選べ');
    const problem = VERB_PROBLEMS[Math.floor(Math.random() * VERB_PROBLEMS.length)];
    currentProblemRef.current = problem;
    setTargetWord(problem.word);
    setTargetForm(problem.form);

    setCards(buildVerbChoices(problem));
    setIsLocked(false);
  }, []);

  // Kakari-musubi fever turn
  const triggerKakariMusubi = useCallback(() => {
    isFeverRef.current = true;
    setIsFever(true);
    sound.playSpecial();
    currentBattleKindRef.current = 'kakari';
    setSentenceText(null);
    setSentenceHighlight(null);

    const kakari = KAKARI_PROBLEMS[Math.floor(Math.random() * KAKARI_PROBLEMS.length)];
    currentKakariRef.current = kakari;

    setGuideText('★ 係り結び一閃チャンス！ ★');
    setTargetWord(`【${kakari.particle}】`);
    setTargetForm('結びの形を選べ');
    setMessageLog(
      <span className="log-fever">
        係助詞「{kakari.particle}」発動！結びは連体形か已然形か？
      </span>
    );

    setCards(buildKakariChoices(kakari));
    setIsLocked(false);
  }, []);

  // Keigo quiz turn inside story / bossrush flow (session-style rendering, HP damage)
  const setupStoryKeigoTurn = useCallback(() => {
    isFeverRef.current = false;
    setIsFever(false);
    currentKakariRef.current = null;
    currentProblemRef.current = null;
    currentBattleKindRef.current = 'keigo';
    const problem = KEIGO_PROBLEMS[Math.floor(Math.random() * KEIGO_PROBLEMS.length)];
    setSentenceText(problem.sentence);
    setSentenceHighlight(problem.expression);
    setGuideText(`敬語「${problem.expression}」の敬意の方向を選べ`);
    setTargetWord(problem.expression);
    setTargetForm(`出典：${problem.source}｜${problem.relation}`);
    currentQuizRef.current = {
      reviewKey: `keigo:${problem.id}`,
      correctAnswer: keigoDirectionLabel(problem.direction),
      explanation: problem.explanation,
      targetWord: problem.expression,
      targetForm: `敬語（${problem.source}）`,
      isKakari: false,
    };
    setCards(
      KEIGO_DIRECTION_CHOICES.map((c) => ({
        text: c.text,
        sub: c.sub,
        isCorrect: c.direction === problem.direction,
      })).sort(() => 0.5 - Math.random())
    );
    setIsLocked(false);
  }, []);

  // Story / bossrush turn generator weighted toward the current boss's weakness (~60%)
  const setupStoryTurn = useCallback(() => {
    const weakness = currentStageRef.current.weakness;
    const kinds: ('verb' | 'kakari' | 'keigo')[] = ['verb', 'kakari', 'keigo'];
    let kind: 'verb' | 'kakari' | 'keigo';
    if (Math.random() < 0.6) {
      kind = weakness;
    } else {
      const others = kinds.filter((k) => k !== weakness);
      kind = others[Math.floor(Math.random() * others.length)];
    }
    if (kind === 'kakari') {
      triggerKakariMusubi();
    } else if (kind === 'keigo') {
      setupStoryKeigoTurn();
    } else {
      setupNormalTurn();
    }
  }, [setupNormalTurn, triggerKakariMusubi, setupStoryKeigoTurn]);

  /** Weakness damage: x1.5 (rounded) when the question field matches the boss weakness (story/bossrush only) */
  const calcBattleDamage = (
    base: number,
    kind: 'verb' | 'kakari' | 'keigo'
  ): { damage: number; isWeakness: boolean } => {
    const isWeakness =
      (gameMode === 'story' || gameMode === 'bossrush') &&
      currentStageRef.current.weakness === kind;
    return { damage: isWeakness ? Math.round(base * 1.5) : base, isWeakness };
  };

  // Daily mode turn: serve the date-seeded queue in order (verb & kakari mixed)
  const setupDailyTurn = useCallback((index: number) => {
    const question = dailyQueueRef.current[index];
    if (!question) return;
    const total = dailyQueueRef.current.length;
    const progressLabel = `【日課祓い 第 ${index + 1} 問 / 全 ${total} 問】`;

    if (question.kind === 'kakari') {
      isFeverRef.current = true;
      setIsFever(true);
      sound.playSpecial();

      const kakari = question.problem;
      currentKakariRef.current = kakari;
      currentProblemRef.current = null;

      setGuideText(`${progressLabel} 係り結びの結びを選べ`);
      setTargetWord(`【${kakari.particle}】`);
      setTargetForm('結びの形を選べ');
      setMessageLog(
        <span className="log-fever">
          係助詞「{kakari.particle}」発動！結びは連体形か已然形か？
        </span>
      );
      setCards(buildKakariChoices(kakari));
    } else {
      isFeverRef.current = false;
      setIsFever(false);
      currentKakariRef.current = null;

      const problem = question.problem;
      currentProblemRef.current = problem;

      setGuideText(`${progressLabel} 次の動詞に接続する助動詞を選べ`);
      setTargetWord(problem.word);
      setTargetForm(problem.form);
      setCards(buildVerbChoices(problem));
    }
    setIsLocked(false);
  }, []);


  // Build the 4 choices for label-type questions (meaning / reading / conjugation)
  const buildLabelChoices = (correct: string, wrongs: string[]): ChoiceOption[] =>
    [
      { text: correct, sub: '', isCorrect: true },
      ...wrongs.map((w) => ({ text: w, sub: '', isCorrect: false })),
    ].sort(() => 0.5 - Math.random());

  // Session-queue turn renderer (meaning / review / reading / conjugation)
  const setupSessionTurn = useCallback((index: number) => {
    const question = sessionQueueRef.current[index];
    if (!question) return;
    const total = sessionQueueRef.current.length;
    const progress = `【第 ${index + 1} 問 / 全 ${total} 問】`;

    if (question.kind === 'verb') {
      isFeverRef.current = false;
      setIsFever(false);
      currentKakariRef.current = null;
      setSentenceText(null);
      setSentenceHighlight(null);
      const problem = question.problem;
      currentProblemRef.current = problem;
      setGuideText(`${progress} 次の動詞に接続する助動詞を選べ`);
      setTargetWord(problem.word);
      setTargetForm(problem.form);
      const correctExample = AUXILIARY_CARDS.find((c) => c.conn === problem.targetConn);
      currentQuizRef.current = {
        reviewKey: reviewKeyFor(question),
        correctAnswer: `${correctExample?.name || ''}など（${problem.targetConn}接続）`,
        explanation: `「${problem.word}」は【${problem.form}】です。助動詞は【${problem.targetConn}】接続のものを選びます。`,
        targetWord: problem.word,
        targetForm: problem.form,
        isKakari: false,
      };
      setCards(buildVerbChoices(problem));
    } else if (question.kind === 'kakari') {
      isFeverRef.current = true;
      setIsFever(true);
      sound.playSpecial();
      setSentenceText(null);
      setSentenceHighlight(null);
      const kakari = question.problem;
      currentKakariRef.current = kakari;
      currentProblemRef.current = null;
      setGuideText(`${progress} 係り結びの結びを選べ`);
      setTargetWord(`【${kakari.particle}】`);
      setTargetForm('結びの形を選べ');
      setMessageLog(
        <span className="log-fever">
          係助詞「{kakari.particle}」発動！結びは連体形か已然形か？
        </span>
      );
      currentQuizRef.current = {
        reviewKey: reviewKeyFor(question),
        correctAnswer: `${kakari.correct.text}（${kakari.targetForm}）`,
        explanation: `係助詞「${kakari.particle}」を受ける結びは必ず【${kakari.targetForm}】になります。`,
        targetWord: `【${kakari.particle}】`,
        targetForm: '係り結び',
        isKakari: true,
      };
      setCards(buildKakariChoices(kakari));
    } else if (question.kind === 'meaning') {
      isFeverRef.current = false;
      setIsFever(false);
      currentKakariRef.current = null;
      currentProblemRef.current = null;
      const problem = question.problem;
      setSentenceText(problem.sentence);
      setSentenceHighlight(null);
      setGuideText(`${progress} 助動詞「${problem.auxiliary}」の意味を選べ`);
      setTargetWord(problem.targetText);
      setTargetForm(`「${problem.auxiliary}」の意味は？`);
      currentQuizRef.current = {
        reviewKey: reviewKeyFor(question),
        correctAnswer: problem.correct,
        explanation: problem.explanation,
        targetWord: problem.targetText,
        targetForm: `意味識別（${problem.auxiliary}）`,
        isKakari: false,
      };
      setCards(buildLabelChoices(problem.correct, problem.wrongs));
    } else if (question.kind === 'reading') {
      isFeverRef.current = false;
      setIsFever(false);
      currentKakariRef.current = null;
      currentProblemRef.current = null;
      const problem = question.problem;
      setSentenceText(problem.text);
      setSentenceHighlight(null);
      setGuideText(`${progress} ${problem.question}`);
      setTargetWord(problem.target);
      setTargetForm(`出典：${problem.source}`);
      currentQuizRef.current = {
        reviewKey: reviewKeyFor(question),
        correctAnswer: problem.correct,
        explanation: `${problem.explanation}【訳】${problem.translation}`,
        targetWord: problem.target,
        targetForm: `${problem.source}・読解`,
        isKakari: false,
      };
      setCards(buildLabelChoices(problem.correct, problem.wrongs));
    } else if (question.kind === 'keigo') {
      isFeverRef.current = false;
      setIsFever(false);
      currentKakariRef.current = null;
      currentProblemRef.current = null;
      const problem = question.problem;
      setSentenceText(problem.sentence);
      setSentenceHighlight(problem.expression);
      setGuideText(`${progress} 敬語「${problem.expression}」の敬意の方向を選べ`);
      setTargetWord(problem.expression);
      setTargetForm(`出典：${problem.source}｜${problem.relation}`);
      currentQuizRef.current = {
        reviewKey: reviewKeyFor(question),
        correctAnswer: keigoDirectionLabel(problem.direction),
        explanation: problem.explanation,
        targetWord: problem.expression,
        targetForm: `敬語（${problem.source}）`,
        isKakari: false,
      };
      setCards(
        KEIGO_DIRECTION_CHOICES.map((c) => ({
          text: c.text,
          sub: c.sub,
          isCorrect: c.direction === problem.direction,
        })).sort(() => 0.5 - Math.random())
      );
    } else if (question.kind === 'word') {
      isFeverRef.current = false;
      setIsFever(false);
      currentKakariRef.current = null;
      currentProblemRef.current = null;
      const problem = question.problem;
      setSentenceText(problem.sentence);
      setSentenceHighlight(problem.targetText);
      setGuideText(`${progress} 古文単語「${problem.word}」の意味を選べ`);
      setTargetWord(problem.targetText);
      setTargetForm(`「${problem.word}」の意味は？`);
      currentQuizRef.current = {
        reviewKey: reviewKeyFor(question),
        correctAnswer: problem.correct,
        explanation: problem.explanation,
        targetWord: problem.targetText,
        targetForm: `単語（${problem.word}）`,
        isKakari: false,
      };
      setCards(buildLabelChoices(problem.correct, problem.wrongs));
    } else if (question.kind === 'particle') {
      isFeverRef.current = false;
      setIsFever(false);
      currentKakariRef.current = null;
      currentProblemRef.current = null;
      const problem = question.problem;
      setSentenceText(problem.sentence);
      setSentenceHighlight(problem.targetText);
      setGuideText(`${progress} 助詞「${problem.particle}」の働きを選べ`);
      setTargetWord(problem.targetText);
      setTargetForm(`出典：${problem.source}｜助詞「${problem.particle}」`);
      currentQuizRef.current = {
        reviewKey: reviewKeyFor(question),
        correctAnswer: problem.correct,
        explanation: problem.explanation,
        targetWord: problem.targetText,
        targetForm: `助詞（${problem.particle}・${problem.category}）`,
        isKakari: false,
      };
      setCards(buildLabelChoices(problem.correct, problem.wrongs));
    } else {
      // conjugation
      isFeverRef.current = false;
      setIsFever(false);
      currentKakariRef.current = null;
      currentProblemRef.current = null;
      const problem = question.problem;
      setSentenceText(null);
      setSentenceHighlight(null);
      setGuideText(`${progress} 「${problem.verb}」の${problem.targetForm}を選べ`);
      setTargetWord(problem.verb);
      setTargetForm(`${problem.className}活用・${problem.targetForm}`);
      currentQuizRef.current = {
        reviewKey: reviewKeyFor(question),
        correctAnswer: problem.correct,
        explanation: problem.explanation,
        targetWord: `${problem.verb}（${problem.targetForm}）`,
        targetForm: `${problem.className}活用・${problem.targetForm}`,
        isKakari: false,
      };
      setCards(buildLabelChoices(problem.correct, problem.wrongs));
    }
    setIsLocked(false);
  }, []);

  // Answer handling for session-queue modes.
  // Correct answers in review mode advance the SRS interval; mistakes anywhere
  // in a session are registered into the persistent review queue.
  const handleSessionAnswer = (card: ChoiceOption) => {
    const quiz = currentQuizRef.current;
    const question = sessionQueueRef.current[sessionIndexRef.current];
    if (!quiz || !question) return;

    const advance = (delay: number) => {
      setTimeout(() => {
        const nextIdx = sessionIndexRef.current + 1;
        sessionIndexRef.current = nextIdx;
        if (nextIdx >= sessionQueueRef.current.length) {
          sound.playFanfare();
          finishBattleRun(true, sessionCorrectRef.current, 0);
        } else {
          setupSessionTurn(nextIdx);
        }
      }, delay);
    };

    if (card.isCorrect) {
      if (question.kind === 'kakari') {
        sound.playHeavyStrike();
      } else {
        sound.playSlash();
        sound.playDrum();
      }
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      if (nextCombo > maxCombo) setMaxCombo(nextCombo);
      sessionCorrectRef.current += 1;
      setScore(sessionCorrectRef.current);
      chargeOugi();

      setProfile((prev) => {
        let updated: PlayerProfile = {
          ...prev,
          totalQuestionsAnswered: prev.totalQuestionsAnswered + 1,
          totalCorrect: prev.totalCorrect + 1,
        };
        if (question.kind === 'verb') {
          updated = {
            ...updated,
            cardMastery: {
              ...prev.cardMastery,
              [card.text]: (prev.cardMastery[card.text] || 0) + 1,
            },
          };
        }
        if (gameMode === 'review') {
          updated = {
            ...updated,
            reviewQueue: applyReviewCorrect(prev.reviewQueue, quiz.reviewKey, getDateKey()),
          };
        }
        const kindMetric: MissionMetric | null =
          question.kind === 'meaning'
            ? 'meaningCorrect'
            : question.kind === 'reading'
            ? 'readingCorrect'
            : question.kind === 'conjugation'
            ? 'conjugationCorrect'
            : question.kind === 'keigo'
            ? 'keigoCorrect'
            : question.kind === 'kakari'
            ? 'kakariCorrect'
            : null;
        updated = kindMetric
          ? applyMissions(updated, 'totalCorrect', kindMetric)
          : applyMissions(updated, 'totalCorrect');
        savePlayerProfile(updated);
        return updated;
      });

      setEnemyHp((prev) => Math.max(0, prev - 40));
      addDamagePopup(question.kind === 'kakari' ? '係り結び成就！' : '正解！', true);
      setShowSlash(true);
      setIsHitFlash(true);
      setTimeout(() => {
        setShowSlash(false);
        setIsHitFlash(false);
      }, 320);
      setEnemyTransform('scale(0.88) translateY(6px)');
      setTimeout(() => setEnemyTransform(''), 180);

      if (question.kind === 'verb') {
        setMessageLog(
          <span className="log-success">
            詠進成功！「{question.problem.word}＋{card.text}」
          </span>
        );
      } else if (question.kind === 'kakari') {
        setMessageLog(
          <span className="log-fever">
            係り結び成就！結びは【{question.problem.targetForm}】
          </span>
        );
      } else {
        setMessageLog(<span className="log-success">正解！{quiz.explanation}</span>);
      }
      advance(950);
    } else {
      sound.playDamage();
      setCombo(0);
      setPlayerHp((prev) => Math.max(1, prev - 20));
      addDamagePopup('不正解', false, true);

      setMistakes((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          targetWord: quiz.targetWord,
          targetForm: quiz.targetForm,
          chosenText: card.text,
          chosenConn: card.sub || undefined,
          correctAnswer: quiz.correctAnswer,
          explanation: quiz.explanation,
          isKakari: quiz.isKakari,
        },
      ]);

      // SRS: register the missed question into the persistent review queue
      setProfile((prev) => {
        const updated = {
          ...prev,
          totalQuestionsAnswered: prev.totalQuestionsAnswered + 1,
          reviewQueue: registerReviewMistake(prev.reviewQueue, quiz.reviewKey, getDateKey()),
        };
        savePlayerProfile(updated);
        return updated;
      });

      setMessageLog(
        <span className="log-fail">
          不正解…正解は「{quiz.correctAnswer}」。{quiz.explanation}
        </span>
      );
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 320);

      // 分野モード・斬撃ルール: 初回の誤答で即終了（敗北扱い）
      if (ruleVariantRef.current === 'suddendeath' && isFieldMode(gameMode)) {
        setTimeout(() => {
          sound.playDamage();
          finishBattleRun(false, sessionCorrectRef.current, 0);
        }, 1500);
        return;
      }
      // 昇進試験: ミスが上限を超えたら不合格で即終了
      if (gameMode === 'exam') {
        examMistakesRef.current += 1;
        if (examMistakesRef.current > EXAM_MISTAKE_LIMIT) {
          setTimeout(() => {
            sound.playDamage();
            finishBattleRun(false, sessionCorrectRef.current, 0);
          }, 1500);
          return;
        }
      }
      advance(1400);
    }
  };

  // Review Drill turn
  const setupReviewDrillTurn = useCallback(() => {
    if (mistakes.length === 0 || reviewDrillIndex.current >= mistakes.length) {
      sound.playFanfare();
      setMessageLog(<span className="log-success">特訓完了！すべての誤答を克服せり！</span>);
      setTimeout(() => {
        setIsReviewDrill(false);
        setScreen('result');
      }, 1200);
      return;
    }

    const item = mistakes[reviewDrillIndex.current];
    setGuideText(`【特訓第 ${reviewDrillIndex.current + 1} 問 / 全 ${mistakes.length} 問】`);
    setTargetWord(item.targetWord);
    setTargetForm(item.targetForm);

    if (item.isKakari) {
      isFeverRef.current = true;
      setIsFever(true);
      const kakari = KAKARI_PROBLEMS.find((k) => `【${k.particle}】` === item.targetWord) || KAKARI_PROBLEMS[0];
      currentKakariRef.current = kakari;

      const choices: ChoiceOption[] = [
        { text: kakari.correct.text, sub: kakari.correct.sub, isCorrect: true },
        ...kakari.wrongs.map((w) => ({ text: w.text, sub: w.sub, isCorrect: false })),
      ].sort(() => 0.5 - Math.random());
      setCards(choices);
    } else {
      isFeverRef.current = false;
      setIsFever(false);
      const conn = item.targetForm.includes('未然')
        ? '未然形'
        : item.targetForm.includes('連用')
        ? '連用形'
        : '終止形';

      currentProblemRef.current = {
        word: item.targetWord,
        form: item.targetForm,
        targetConn: conn,
      };

      const correctCards = AUXILIARY_CARDS.filter((c) => c.conn === conn);
      const wrongCards = AUXILIARY_CARDS.filter((c) => c.conn !== conn);
      const pickedCorrect = correctCards[Math.floor(Math.random() * correctCards.length)];
      const shuffledWrongs = [...wrongCards].sort(() => 0.5 - Math.random()).slice(0, 3);
      const hand = [pickedCorrect, ...shuffledWrongs].sort(() => 0.5 - Math.random());

      setCards(
        hand.map((card) => ({
          text: card.name,
          sub: `${card.conn}接続<br>${card.mean}`,
          isCorrect: card.conn === conn,
          conn: card.conn,
        }))
      );
    }
    setIsLocked(false);
  }, [mistakes]);

  // Finalize battle run & award profile progress
  const finishBattleRun = useCallback(
    (win: boolean, finalScore = score, finalWave = wave) => {
      let earnedExp = 0;
      if (gameMode === 'story') {
        earnedExp = win ? 220 + maxCombo * 10 : stageIndex * 60 + maxCombo * 5;
      } else if (gameMode === 'bossrush') {
        earnedExp = win ? 380 + maxCombo * 10 : stageIndex * 80 + maxCombo * 5;
      } else if (gameMode === 'endless') {
        earnedExp = finalWave * 45 + maxCombo * 8;
      } else if (gameMode === 'daily') {
        earnedExp = 80 + maxCombo * 5;
      } else if (
        gameMode === 'verbs' ||
        gameMode === 'aux' ||
        gameMode === 'words' ||
        gameMode === 'particles' ||
        gameMode === 'keigo' ||
        gameMode === 'review'
      ) {
        // 分野モード（全ルール共通）・復習: 正解数×10＋連撃ボーナスで統一
        earnedExp = finalScore * 10 + maxCombo * 5;
      } else if (gameMode === 'exam') {
        earnedExp = win ? 150 + finalScore * 8 : finalScore * 5;
      }

      setExpGained(earnedExp);
      setIsWin(win);

      // Update profile
      setProfile((prev) => {
        const nextExp = prev.exp + earnedExp;
        const nextStoryClears = win && gameMode === 'story' ? prev.storyClears + 1 : prev.storyClears;
        const nextEndlessHigh = gameMode === 'endless' ? Math.max(prev.endlessHighWave, finalWave) : prev.endlessHighWave;
        const nextTimeHigh =
          ruleVariantRef.current === 'timeattack' && isFieldMode(gameMode)
            ? Math.max(prev.timeAttackHighScore, finalScore)
            : prev.timeAttackHighScore;
        const nextSuddenBest =
          ruleVariantRef.current === 'suddendeath' && isFieldMode(gameMode)
            ? Math.max(prev.suddenDeathBest, finalScore)
            : prev.suddenDeathBest;
        const dailyCompletion =
          gameMode === 'daily' && win
            ? applyDailyCompletion(prev, getDateKey(), getYesterdayKey())
            : null;

        let updated: PlayerProfile = {
          ...prev,
          exp: nextExp,
          storyClears: nextStoryClears,
          endlessHighWave: nextEndlessHigh,
          timeAttackHighScore: nextTimeHigh,
          suddenDeathBest: nextSuddenBest,
          ...(dailyCompletion
            ? {
                dailyLastDate: dailyCompletion.dailyLastDate,
                dailyStreak: dailyCompletion.dailyStreak,
              }
            : {}),
        };

        // 週間ミッション: 日課完了・ボス討伐の加算
        if (gameMode === 'daily' && win) {
          updated = applyMissions(updated, 'dailyComplete');
        }
        if ((gameMode === 'story' || gameMode === 'bossrush') && win) {
          updated = applyMissions(updated, 'enemyDefeats');
        }
        // 昇進試験に合格したら保持位階を1つ上げる
        if (gameMode === 'exam' && win) {
          const held = getHeldRankInfo(prev);
          if (held.nextRank) {
            updated = { ...updated, promotedRank: held.rankIndex + 1 };
          }
        }

        const unlocked = checkNewTitles(updated, {
          win,
          mode: gameMode,
          combo: maxCombo,
          score: finalScore,
          mistakes: mistakes.length,
          wave: finalWave,
        });

        if (unlocked.length > 0) {
          updated.unlockedTitles = [...prev.unlockedTitles, ...unlocked];
          setNewTitles(unlocked);
        } else {
          setNewTitles([]);
        }

        savePlayerProfile(updated);
        return updated;
      });

      setScreen('result');
    },
    [gameMode, maxCombo, mistakes.length, score, stageIndex, wave]
  );

  const concludeTimeAttack = useCallback(() => {
    sound.playFanfare();
    finishBattleRun(true, sessionActiveRef.current ? sessionCorrectRef.current : score, 0);
  }, [finishBattleRun, score]);

  // Turn outcome evaluation
  const evaluateNextTurn = useCallback(
    (
      nextEnemyHp: number,
      nextPlayerHp: number,
      nextCombo: number,
      justDidFever: boolean,
      currentStageIdx: number,
      currentWave: number
    ) => {
      if (isReviewDrill) {
        reviewDrillIndex.current++;
        setupReviewDrillTurn();
        return;
      }

      if (gameMode === 'daily') {
        // 日課はHPの勝敗ではなく、全5問を終えたら完了。次の問題へ進める
        const nextIdx = dailyIndexRef.current + 1;
        dailyIndexRef.current = nextIdx;
        if (nextIdx >= dailyQueueRef.current.length) {
          sound.playFanfare();
          finishBattleRun(true);
        } else {
          setupDailyTurn(nextIdx);
        }
        return;
      }

      // Story & Endless Mode HP handling
      if (nextEnemyHp <= 0) {
        if (gameMode === 'story' || gameMode === 'bossrush') {
          if (currentStageIdx + 1 < STAGES.length) {
            const newIdx = currentStageIdx + 1;
            setStageIndex(newIdx);
            setCurrentStage(STAGES[newIdx]);
            currentStageRef.current = STAGES[newIdx];
            addEnemyDefeatMission();
            sound.playFanfare();
            setMessageLog(<span className="log-success">妖怪を討滅！次の幕へ進む！</span>);
            setTimeout(() => {
              const nextStage = STAGES[newIdx];
              const stageHp =
                gameMode === 'bossrush' ? Math.round(nextStage.hp * 1.5) : nextStage.hp;
              setEnemyMaxHp(stageHp);
              setEnemyHp(stageHp);
              setupStoryTurn();
            }, 1000);
          } else {
            sound.playFanfare();
            finishBattleRun(true);
          }
        } else if (gameMode === 'endless') {
          const nextWave = currentWave + 1;
          setWave(nextWave);
          addEnemyDefeatMission();
          sound.playFanfare();
          setMessageLog(<span className="log-success">第 {currentWave} 体を調伏！次なる妖魔が来襲！</span>);

          // Restore player health a bit upon defeating enemy
          setPlayerHp((prev) => Math.min(100, prev + 25));

          setTimeout(() => {
            const nextEnemy = generateEndlessStage(nextWave);
            setCurrentStage(nextEnemy);
            currentStageRef.current = nextEnemy;
            setEnemyMaxHp(nextEnemy.hp);
            setEnemyHp(nextEnemy.hp);
            setupNormalTurn();
          }, 900);
        }
        return;
      }

      if (nextPlayerHp <= 0) {
        sound.playDamage();
        finishBattleRun(false, score, currentWave);
        return;
      }

      // Check if fever triggers
      if (nextCombo > 0 && nextCombo % 3 === 0 && !justDidFever) {
        triggerKakariMusubi();
      } else if (gameMode === 'story' || gameMode === 'bossrush') {
        setupStoryTurn();
      } else {
        setupNormalTurn();
      }
    },
    [
      addEnemyDefeatMission,
      finishBattleRun,
      gameMode,
      isReviewDrill,
      playerHp,
      score,
      setupDailyTurn,
      setupNormalTurn,
      setupReviewDrillTurn,
      setupStoryTurn,
      triggerKakariMusubi,
    ]
  );

  // Start chosen mode (field modes take a rule variant)
  const handleStartMode = (mode: GameMode, rule: RuleVariant = 'normal') => {
    sound.init();
    sound.startBgm();
    sound.playBell();

    setGameMode(mode);
    setRuleVariant(rule);
    ruleVariantRef.current = rule;
    setCombo(0);
    setMaxCombo(0);
    setMistakes([]);
    setIsReviewDrill(false);
    sessionActiveRef.current = false;
    reviewFallbackRef.current = false;
    setSentenceText(null);
    setSentenceHighlight(null);
    setOugiGauge(0);
    setOugiUsed(false);
    examMistakesRef.current = 0;
    streakRef.current = 0;
    isFeverRef.current = false;
    setIsFever(false);
    currentBattleKindRef.current = 'verb';

    const setStageBoth = (stage: Stage) => {
      setCurrentStage(stage);
      currentStageRef.current = stage;
    };

    if (mode === 'story') {
      setStageIndex(0);
      setStageBoth(STAGES[0]);
      setEnemyMaxHp(STAGES[0].hp);
      setEnemyHp(STAGES[0].hp);
      setPlayerHp(100);
    } else if (mode === 'endless') {
      setWave(1);
      const enemy = generateEndlessStage(1);
      setStageBoth(enemy);
      setEnemyMaxHp(enemy.hp);
      setEnemyHp(enemy.hp);
      setPlayerHp(100);
    } else if (mode === 'daily') {
      // 日付シードでその日の出題セットと相手を決定（同日中は再挑戦しても同じ内容）
      const todayKey = getDateKey();
      dailyQueueRef.current = generateDailyQuestions(todayKey);
      dailyIndexRef.current = 0;
      setStageBoth(STAGES[pickDailyStageIndex(todayKey)]);
      // 敵HPは表示専用。全5問ぶんのダメージを受け切れる値にする
      setEnemyMaxHp(300);
      setEnemyHp(300);
      setPlayerHp(100);
    } else if (mode === 'bossrush') {
      setStageIndex(0);
      setStageBoth(STAGES[0]);
      const hp = Math.round(STAGES[0].hp * 1.5);
      setEnemyMaxHp(hp);
      setEnemyHp(hp);
      setPlayerHp(100);
    } else if (isFieldMode(mode) || mode === 'review' || mode === 'exam') {
      sessionActiveRef.current = true;
      sessionIndexRef.current = 0;
      sessionCorrectRef.current = 0;
      setScore(0);
      setStageBoth(STAGES[0]);
      setEnemyMaxHp(9999);
      setEnemyHp(9999);
      setPlayerHp(100);
      if (isFieldMode(mode)) {
        if (rule === 'timeattack') setTimeRemaining(60);
        const count = rule === 'timeattack' ? FIELD_TIMEATTACK_COUNT : FIELD_SESSION_COUNT;
        sessionQueueRef.current = buildFieldSession(mode, count);
      } else if (mode === 'exam') {
        // 昇進試験: 接続・係り結び・意味・読解・型の混合10問
        sessionQueueRef.current = shuffledCopy([
          ...shuffledCopy(VERB_PROBLEMS)
            .slice(0, 4)
            .map((problem) => ({ kind: 'verb' as const, problem })),
          ...shuffledCopy(KAKARI_PROBLEMS)
            .slice(0, 2)
            .map((problem) => ({ kind: 'kakari' as const, problem })),
          ...shuffledCopy(MEANING_PROBLEMS)
            .slice(0, 2)
            .map((problem) => ({ kind: 'meaning' as const, problem })),
          ...shuffledCopy(READING_PROBLEMS)
            .slice(0, 1)
            .map((problem) => ({ kind: 'reading' as const, problem })),
          ...shuffledCopy(CONJUGATION_PROBLEMS)
            .slice(0, 1)
            .map((problem) => ({ kind: 'conjugation' as const, problem })),
        ]);
      } else {
        const session = buildReviewSession(profile, getDateKey());
        sessionQueueRef.current = session.questions;
        reviewFallbackRef.current = session.fallback;
      }
    }

    setMessageLog('言霊を繰り出せ！');
    setScreen('battle');
    if (mode === 'daily') {
      setupDailyTurn(0);
    } else if (sessionActiveRef.current) {
      setupSessionTurn(0);
    } else if (mode === 'story' || mode === 'bossrush') {
      setupStoryTurn();
    } else {
      setupNormalTurn();
    }
    // 代替出題時は最後に通知を残す（最初の設問表示で上書きされないように）
    if (mode === 'review' && reviewFallbackRef.current) {
      setMessageLog(
        <span className="log-success">回収すべき怨念はなし。通常問題で腕を磨け。</span>
      );
    }
  };

  const startReviewDrill = () => {
    if (mistakes.length === 0) return;
    setIsReviewDrill(true);
    reviewDrillIndex.current = 0;
    setEnemyHp(100);
    setEnemyMaxHp(100);
    setPlayerHp(100);
    setCombo(0);
    setOugiGauge(0);
    setOugiUsed(false);
    setScreen('battle');
    setupReviewDrillTurn();
  };

  // 奥義「言霊解放」: ゲージ満タンで1戦闘に1回だけ発動できる
  const handleUseOugi = () => {
    if (ougiUsed || ougiGauge < 100 || isLocked) return;

    // タイムアタック（ルール）では「+5秒」に読み替える
    if (ruleVariantRef.current === 'timeattack') {
      sound.playSpecial();
      setOugiUsed(true);
      setOugiGauge(0);
      setTimeRemaining((prev) => prev + 5);
      addDamagePopup('言霊解放！ +5秒', true);
      setMessageLog(
        <span className="log-success">奥義・言霊解放！残り時間が5秒延びた！</span>
      );
      return;
    }

    // それ以外のモード: 現在の問題を正解扱いで突破する（正解カードの選択を再現）
    const correctCard = cards.find((c) => c.isCorrect);
    if (!correctCard) return;
    sound.playSpecial();
    setOugiUsed(true);
    setOugiGauge(0);
    addDamagePopup('言霊解放！', true);
    handleCardClick(correctCard);
  };

  // Card selection handler
  const handleCardClick = (card: ChoiceOption) => {
    if (isLocked) return;
    setIsLocked(true);

    // Session-queue modes (field modes / review / exam)
    if (sessionActiveRef.current) {
      handleSessionAnswer(card);
      return;
    }

    // Track total questions answered
    setProfile((prev) => {
      const updated = {
        ...prev,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + 1,
      };
      savePlayerProfile(updated);
      return updated;
    });

    if (
      currentBattleKindRef.current === 'keigo' &&
      (gameMode === 'story' || gameMode === 'bossrush') &&
      currentQuizRef.current
    ) {
      const quiz = currentQuizRef.current;
      if (card.isCorrect) {
        sound.playSlash();
        sound.playDrum();
        const nextCombo = combo + 1;
        setCombo(nextCombo);
        if (nextCombo > maxCombo) setMaxCombo(nextCombo);
        chargeOugi();
        setProfile((prev) => {
          const updated = applyMissions(
            { ...prev, totalCorrect: prev.totalCorrect + 1 },
            'totalCorrect',
            'keigoCorrect'
          );
          savePlayerProfile(updated);
          return updated;
        });
        const { damage, isWeakness } = calcBattleDamage(25 + nextCombo * 6, 'keigo');
        const nextEnemyHp = Math.max(0, enemyHp - damage);
        setEnemyHp(nextEnemyHp);
        addDamagePopup(
          isWeakness ? `-${damage} 弱点を突いた！` : `-${damage}`,
          nextCombo >= 3 || isWeakness
        );
        setShowSlash(true);
        setIsHitFlash(true);
        setTimeout(() => {
          setShowSlash(false);
          setIsHitFlash(false);
        }, 300);
        setMessageLog(
          <span className="log-success">
            正解！{quiz.explanation}（{damage}ダメ{isWeakness ? '・弱点' : ''}）
          </span>
        );
        setEnemyTransform('scale(0.88) translateY(6px)');
        setTimeout(() => setEnemyTransform(''), 180);
        setTimeout(() => {
          evaluateNextTurn(nextEnemyHp, playerHp, nextCombo, false, stageIndex, wave);
        }, 850);
      } else {
        sound.playDamage();
        setCombo(0);
        const recoil = 20;
        const nextPlayerHp = Math.max(0, playerHp - recoil);
        setPlayerHp(nextPlayerHp);
        addDamagePopup(`-${recoil} 敬語不備`, false, true);
        setMistakes((prev) => [
          ...prev,
          {
            id: String(Date.now()),
            targetWord: quiz.targetWord,
            targetForm: quiz.targetForm,
            chosenText: card.text,
            chosenConn: card.sub || undefined,
            correctAnswer: quiz.correctAnswer,
            explanation: quiz.explanation,
            isKakari: false,
          },
        ]);
        setProfile((prev) => {
          const updated = {
            ...prev,
            reviewQueue: registerReviewMistake(prev.reviewQueue, quiz.reviewKey, getDateKey()),
          };
          savePlayerProfile(updated);
          return updated;
        });
        setMessageLog(
          <span className="log-fail">
            不正解…正解は「{quiz.correctAnswer}」。{quiz.explanation}
          </span>
        );
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 320);
        setTimeout(() => {
          evaluateNextTurn(enemyHp, nextPlayerHp, 0, false, stageIndex, wave);
        }, 850);
      }
      return;
    }

    if (isFeverRef.current && currentKakariRef.current) {
      const kakari = currentKakariRef.current;
      if (card.isCorrect) {
        sound.playHeavyStrike();
        chargeOugi();

        // Mastery update
        setProfile((prev) => {
          const updated = applyMissions(
            {
              ...prev,
              totalCorrect: prev.totalCorrect + 1,
            },
            'totalCorrect',
            'kakariCorrect'
          );
          savePlayerProfile(updated);
          return updated;
        });

        const { damage: dmg, isWeakness: kakariWeak } = calcBattleDamage(75, 'kakari');
        const nextEnemyHp = Math.max(0, enemyHp - dmg);
        setEnemyHp(nextEnemyHp);
        addDamagePopup(
          kakariWeak ? `-${dmg} 弱点を突いた！ 係り結び一閃！` : `-${dmg} 係り結び一閃！`,
          true
        );

        setShowSlash(true);
        setIsHitFlash(true);
        setTimeout(() => {
          setShowSlash(false);
          setIsHitFlash(false);
        }, 360);

        setMessageLog(
          <span className="log-fever">
            係り結び成就！「{kakari.particle}」の結びは【{kakari.targetForm}】！（{dmg}ダメ{kakariWeak ? '・弱点' : ''}）
          </span>
        );
        setEnemyTransform('scale(0.75) rotate(-12deg)');
        setTimeout(() => setEnemyTransform(''), 250);

        setTimeout(() => {
          evaluateNextTurn(nextEnemyHp, playerHp, combo, true, stageIndex, wave);
        }, 850);
      } else {
        sound.playDamage();
        const recoil = 15;
        // 日課は全問やり切る形式のため、気力が尽きて中断しないよう下限を設ける
        const nextPlayerHp = Math.max(gameMode === 'daily' ? 1 : 0, playerHp - recoil);
        setPlayerHp(nextPlayerHp);
        addDamagePopup(`-${recoil} 結び不備`, false, true);

        setMistakes((prev) => [
          ...prev,
          {
            id: String(Date.now()),
            targetWord: `【${kakari.particle}】`,
            targetForm: '係り結び',
            chosenText: card.text,
            chosenConn: card.sub,
            correctAnswer: `${kakari.correct.text}（${kakari.targetForm}）`,
            explanation: `係助詞「${kakari.particle}」を受ける結びの動詞・助動詞は必ず【${kakari.targetForm}】になります。`,
            isKakari: true,
          },
        ]);

        // SRS復習キューへ登録（怨念回収戦で再出題される）
        setProfile((prev) => {
          const updated = {
            ...prev,
            reviewQueue: registerReviewMistake(
              prev.reviewQueue,
              `kakari:${kakari.particle}`,
              getDateKey()
            ),
          };
          savePlayerProfile(updated);
          return updated;
        });

        setMessageLog(
          <span className="log-fail">
            結び不一致！「${kakari.particle}」の結びは【${kakari.targetForm}】なり
          </span>
        );
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 320);

        setTimeout(() => {
          evaluateNextTurn(enemyHp, nextPlayerHp, combo, true, stageIndex, wave);
        }, 850);
      }
    } else {
      // Normal auxiliary connection
      const problem = currentProblemRef.current;
      if (!problem) return;

      const isCorrect = card.conn === problem.targetConn;
      if (isCorrect) {
        sound.playSlash();
        sound.playDrum();
        const nextCombo = combo + 1;
        setCombo(nextCombo);
        if (nextCombo > maxCombo) {
          setMaxCombo(nextCombo);
        }
        chargeOugi();

        // Track mastery for this specific auxiliary card
        setProfile((prev) => {
          const currentCount = prev.cardMastery[card.text] || 0;
          const updated = applyMissions(
            {
              ...prev,
              totalCorrect: prev.totalCorrect + 1,
              cardMastery: {
                ...prev.cardMastery,
                [card.text]: currentCount + 1,
              },
            },
            'totalCorrect'
          );
          savePlayerProfile(updated);
          return updated;
        });

        const { damage, isWeakness } = calcBattleDamage(25 + nextCombo * 6, 'verb');
        const nextEnemyHp = Math.max(0, enemyHp - damage);
        setEnemyHp(nextEnemyHp);
        addDamagePopup(
          isWeakness ? `-${damage} 弱点を突いた！` : `-${damage}`,
          nextCombo >= 3 || isWeakness
        );

        setShowSlash(true);
        setIsHitFlash(true);
        setTimeout(() => {
          setShowSlash(false);
          setIsHitFlash(false);
        }, 300);

        setMessageLog(
          <span className="log-success">
            詠進成功！「{problem.word}＋{card.text}」（{damage}ダメ{isWeakness ? '・弱点' : ''}）
          </span>
        );
        setEnemyTransform('scale(0.88) translateY(6px)');
        setTimeout(() => setEnemyTransform(''), 180);

        setTimeout(() => {
          evaluateNextTurn(nextEnemyHp, playerHp, nextCombo, false, stageIndex, wave);
        }, 650);
      } else {
        sound.playDamage();
        setCombo(0);
        const recoil = 20;
        // 日課は全問やり切る形式のため、気力が尽きて中断しないよう下限を設ける
        const nextPlayerHp = Math.max(gameMode === 'daily' ? 1 : 0, playerHp - recoil);
        setPlayerHp(nextPlayerHp);
        addDamagePopup(`-${recoil} 接続不備`, false, true);

        const correctExample = AUXILIARY_CARDS.find((c) => c.conn === problem.targetConn);
        setMistakes((prev) => [
          ...prev,
          {
            id: String(Date.now()),
            targetWord: problem.word,
            targetForm: problem.form,
            chosenText: card.text,
            chosenConn: card.conn,
            correctAnswer: `${correctExample?.name || ''}など（${problem.targetConn}接続）`,
            explanation: `「${problem.word}」は【${problem.form}】です。「${card.text}」は【${card.conn}】にしか接続できないため接続不備となります。`,
            isKakari: false,
          },
        ]);

        // SRS復習キューへ登録（怨念回収戦で再出題される）
        setProfile((prev) => {
          const updated = {
            ...prev,
            reviewQueue: registerReviewMistake(
              prev.reviewQueue,
              `verb:${problem.word}`,
              getDateKey()
            ),
          };
          savePlayerProfile(updated);
          return updated;
        });

        setMessageLog(
          <span className="log-fail">
            接続不備！「{card.text}」は【{card.conn}】接続なり
          </span>
        );
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 320);

        setTimeout(() => {
          evaluateNextTurn(enemyHp, nextPlayerHp, 0, false, stageIndex, wave);
        }, 650);
      }
    }
  };

  return (
    <div id="game-container" className={isShaking ? 'shake' : ''}>
      <SakuraCanvas isStormMode={isFever} />

      {screen === 'title' && (
        <TitleScreen
          profile={profile}
          onStartMode={handleStartMode}
          onOpenRules={() => setIsRuleOpen(true)}
          onOpenGrammar={() => setIsGrammarOpen(true)}
          onOpenCompendium={() => setIsCompendiumOpen(true)}
          isBgmOn={isBgmOn}
          onToggleBgm={handleToggleBgm}
        />
      )}

      {screen === 'battle' && (
        <BattleScreen
          stage={currentStage}
          sentenceText={sentenceText}
          sentenceHighlight={sentenceHighlight}
          ougiGauge={ougiGauge}
          ougiUsed={ougiUsed}
          onUseOugi={handleUseOugi}
          gameMode={gameMode}
          ruleVariant={ruleVariant}
          combo={combo}
          enemyHp={enemyHp}
          enemyMaxHp={enemyMaxHp}
          playerHp={playerHp}
          timeRemaining={timeRemaining}
          score={score}
          wave={wave}
          guideText={guideText}
          targetWord={targetWord}
          targetForm={targetForm}
          messageLog={messageLog}
          cards={cards}
          isLocked={isLocked}
          enemyTransform={enemyTransform}
          isHitFlash={isHitFlash}
          showSlash={showSlash}
          damageQueue={damageQueue}
          isFever={isFever}
          isBgmOn={isBgmOn}
          onToggleBgm={handleToggleBgm}
          onOpenGrammar={() => setIsGrammarOpen(true)}
          onCardSelected={handleCardClick}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          isWin={isWin}
          gameMode={gameMode}
          ruleVariant={ruleVariant}
          maxCombo={maxCombo}
          mistakesCount={mistakes.length}
          stagesCleared={isWin ? 3 : stageIndex}
          wave={wave}
          score={score}
          expGained={expGained}
          newTitles={newTitles}
          profile={profile}
          onRestartSameMode={() => handleStartMode(gameMode, ruleVariant)}
          onReturnToTitle={() => setScreen('title')}
          onOpenReview={() => setIsReviewOpen(true)}
          onOpenGrammar={() => setIsGrammarOpen(true)}
        />
      )}

      {/* Modals */}
      <RuleModal isOpen={isRuleOpen} onClose={() => setIsRuleOpen(false)} />
      <GrammarModal isOpen={isGrammarOpen} onClose={() => setIsGrammarOpen(false)} />
      <CompendiumModal
        isOpen={isCompendiumOpen}
        profile={profile}
        onClose={() => setIsCompendiumOpen(false)}
      />
      <ReviewModal
        isOpen={isReviewOpen}
        mistakes={mistakes}
        onClose={() => setIsReviewOpen(false)}
        onStartReviewDrill={startReviewDrill}
      />
    </div>
  );
};
