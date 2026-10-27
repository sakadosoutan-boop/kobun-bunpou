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
} from './types';
import {
  VERB_PROBLEMS,
  AUXILIARY_CARDS,
  KAKARI_PROBLEMS,
  STAGES,
  generateEndlessStage,
  checkNewTitles,
} from './data';
import { loadPlayerProfile, savePlayerProfile, DEFAULT_PROFILE } from './storage';
import { getModeDefinition } from './modes/registry';
import {
  DailyQuestion,
  applyDailyCompletion,
  generateDailyQuestions,
  getDateKey,
  getYesterdayKey,
  pickDailyStageIndex,
} from './modes/daily';
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

  // Load saved profile on startup
  useEffect(() => {
    const loaded = loadPlayerProfile();
    setProfile(loaded);
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

  // Timer loop for Time Attack Mode
  useEffect(() => {
    if (screen !== 'battle' || gameMode !== 'timeattack') return;

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
  }, [screen, gameMode]);

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
      } else if (gameMode === 'endless') {
        earnedExp = finalWave * 45 + maxCombo * 8;
      } else if (gameMode === 'timeattack') {
        earnedExp = Math.round(finalScore * 0.45) + maxCombo * 6;
      } else if (gameMode === 'daily') {
        earnedExp = 80 + maxCombo * 5;
      } else if (gameMode === 'suddendeath') {
        earnedExp = finalScore * 12 + maxCombo * 4;
      }

      setExpGained(earnedExp);
      setIsWin(win);

      // Update profile
      setProfile((prev) => {
        const nextExp = prev.exp + earnedExp;
        const nextStoryClears = win && gameMode === 'story' ? prev.storyClears + 1 : prev.storyClears;
        const nextEndlessHigh = gameMode === 'endless' ? Math.max(prev.endlessHighWave, finalWave) : prev.endlessHighWave;
        const nextTimeHigh = gameMode === 'timeattack' ? Math.max(prev.timeAttackHighScore, finalScore) : prev.timeAttackHighScore;
        const nextSuddenBest = gameMode === 'suddendeath' ? Math.max(prev.suddenDeathBest, finalScore) : prev.suddenDeathBest;
        const dailyCompletion =
          gameMode === 'daily' && win
            ? applyDailyCompletion(prev, getDateKey(), getYesterdayKey())
            : null;

        const updated: PlayerProfile = {
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
    finishBattleRun(true, score, 0);
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

      if (gameMode === 'suddendeath') {
        // 誤答したターンはプレイヤーHPが減った状態で届く。それを検知して即終了する
        if (nextPlayerHp < playerHp) {
          sound.playDamage();
          finishBattleRun(false, streakRef.current, 0);
          return;
        }
        if (nextCombo > 0 && nextCombo % 3 === 0 && !justDidFever) {
          triggerKakariMusubi();
        } else {
          setupNormalTurn();
        }
        return;
      }

      if (gameMode === 'timeattack') {
        // In time attack, enemy HP is infinite/doesn't stop turns
        if (nextCombo > 0 && nextCombo % 3 === 0 && !justDidFever) {
          triggerKakariMusubi();
        } else {
          setupNormalTurn();
        }
        return;
      }

      // Story & Endless Mode HP handling
      if (nextEnemyHp <= 0) {
        if (gameMode === 'story') {
          if (currentStageIdx + 1 < STAGES.length) {
            const newIdx = currentStageIdx + 1;
            setStageIndex(newIdx);
            setCurrentStage(STAGES[newIdx]);
            sound.playFanfare();
            setMessageLog(<span className="log-success">妖怪を討滅！次の幕へ進む！</span>);
            setTimeout(() => {
              const nextStage = STAGES[newIdx];
              setEnemyMaxHp(nextStage.hp);
              setEnemyHp(nextStage.hp);
              setupNormalTurn();
            }, 1000);
          } else {
            sound.playFanfare();
            finishBattleRun(true);
          }
        } else if (gameMode === 'endless') {
          const nextWave = currentWave + 1;
          setWave(nextWave);
          sound.playFanfare();
          setMessageLog(<span className="log-success">第 {currentWave} 体を調伏！次なる妖魔が来襲！</span>);

          // Restore player health a bit upon defeating enemy
          setPlayerHp((prev) => Math.min(100, prev + 25));

          setTimeout(() => {
            const nextEnemy = generateEndlessStage(nextWave);
            setCurrentStage(nextEnemy);
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
      } else {
        setupNormalTurn();
      }
    },
    [
      finishBattleRun,
      gameMode,
      isReviewDrill,
      playerHp,
      score,
      setupDailyTurn,
      setupNormalTurn,
      setupReviewDrillTurn,
      triggerKakariMusubi,
    ]
  );

  // Start chosen mode
  const handleStartMode = (mode: GameMode) => {
    sound.init();
    sound.startBgm();
    sound.playBell();

    const modeDef = getModeDefinition(mode);
    setGameMode(mode);
    setCombo(0);
    setMaxCombo(0);
    setMistakes([]);
    setIsReviewDrill(false);
    isFeverRef.current = false;
    setIsFever(false);

    if (mode === 'story') {
      setStageIndex(0);
      setCurrentStage(STAGES[0]);
      setEnemyMaxHp(STAGES[0].hp);
      setEnemyHp(STAGES[0].hp);
      setPlayerHp(100);
    } else if (mode === 'endless') {
      setWave(1);
      const enemy = generateEndlessStage(1);
      setCurrentStage(enemy);
      setEnemyMaxHp(enemy.hp);
      setEnemyHp(enemy.hp);
      setPlayerHp(100);
    } else if (mode === 'timeattack') {
      setTimeRemaining(modeDef.rules.timerSeconds ?? 60);
      setScore(0);
      setCurrentStage(STAGES[0]);
      setEnemyMaxHp(9999);
      setEnemyHp(9999);
      setPlayerHp(100);
    } else if (mode === 'daily') {
      // 日付シードでその日の出題セットと相手を決定（同日中は再挑戦しても同じ内容）
      const todayKey = getDateKey();
      dailyQueueRef.current = generateDailyQuestions(todayKey);
      dailyIndexRef.current = 0;
      setCurrentStage(STAGES[pickDailyStageIndex(todayKey)]);
      // 敵HPは表示専用。全5問ぶんのダメージを受け切れる値にする
      setEnemyMaxHp(300);
      setEnemyHp(300);
      setPlayerHp(100);
    } else if (mode === 'suddendeath') {
      streakRef.current = 0;
      setScore(0);
      setCurrentStage(STAGES[0]);
      setEnemyMaxHp(9999);
      setEnemyHp(9999);
      setPlayerHp(100);
    }

    setMessageLog('言霊を繰り出せ！');
    setScreen('battle');
    if (mode === 'daily') {
      setupDailyTurn(0);
    } else {
      setupNormalTurn();
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
    setScreen('battle');
    setupReviewDrillTurn();
  };

  // Card selection handler
  const handleCardClick = (card: ChoiceOption) => {
    if (isLocked) return;
    setIsLocked(true);

    // Track total questions answered
    setProfile((prev) => {
      const updated = {
        ...prev,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + 1,
      };
      savePlayerProfile(updated);
      return updated;
    });

    if (isFeverRef.current && currentKakariRef.current) {
      const kakari = currentKakariRef.current;
      if (card.isCorrect) {
        sound.playHeavyStrike();

        // Mastery update
        setProfile((prev) => {
          const updated = {
            ...prev,
            totalCorrect: prev.totalCorrect + 1,
          };
          savePlayerProfile(updated);
          return updated;
        });

        const dmg = 75;
        const nextEnemyHp = Math.max(0, enemyHp - dmg);
        setEnemyHp(nextEnemyHp);

        if (gameMode === 'timeattack') {
          const pts = 65;
          setScore((s) => s + pts);
          addDamagePopup(`+${pts}点 係り結び！`, true);
        } else if (gameMode === 'suddendeath') {
          streakRef.current += 1;
          setScore(streakRef.current);
          addDamagePopup(`${streakRef.current} 連続正解！`, true);
        } else {
          addDamagePopup(`-${dmg} 係り結び一閃！`, true);
        }

        setShowSlash(true);
        setIsHitFlash(true);
        setTimeout(() => {
          setShowSlash(false);
          setIsHitFlash(false);
        }, 360);

        setMessageLog(
          <span className="log-fever">
            係り結び成就！「{kakari.particle}」の結びは【{kakari.targetForm}】！（{dmg}ダメ）
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

        // Track mastery for this specific auxiliary card
        setProfile((prev) => {
          const currentCount = prev.cardMastery[card.text] || 0;
          const updated = {
            ...prev,
            totalCorrect: prev.totalCorrect + 1,
            cardMastery: {
              ...prev.cardMastery,
              [card.text]: currentCount + 1,
            },
          };
          savePlayerProfile(updated);
          return updated;
        });

        const damage = 25 + nextCombo * 6;
        const nextEnemyHp = Math.max(0, enemyHp - damage);
        setEnemyHp(nextEnemyHp);

        if (gameMode === 'timeattack') {
          const pts = 15 + nextCombo * 4;
          setScore((s) => s + pts);
          addDamagePopup(`+${pts}点`, nextCombo >= 3);
        } else if (gameMode === 'suddendeath') {
          streakRef.current += 1;
          setScore(streakRef.current);
          addDamagePopup(`${streakRef.current} 連続！`, nextCombo >= 3);
        } else {
          addDamagePopup(`-${damage}`, nextCombo >= 3);
        }

        setShowSlash(true);
        setIsHitFlash(true);
        setTimeout(() => {
          setShowSlash(false);
          setIsHitFlash(false);
        }, 300);

        setMessageLog(
          <span className="log-success">
            詠進成功！「{problem.word}＋{card.text}」（{damage}ダメ）
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
          gameMode={gameMode}
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
          maxCombo={maxCombo}
          mistakesCount={mistakes.length}
          stagesCleared={isWin ? 3 : stageIndex}
          wave={wave}
          score={score}
          expGained={expGained}
          newTitles={newTitles}
          profile={profile}
          onRestartSameMode={() => handleStartMode(gameMode)}
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
