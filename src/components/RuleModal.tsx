import React from 'react';

interface RuleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RuleModal: React.FC<RuleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div id="rule-modal" className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>遊び方の指南</h2>
        <p>
          <b>1. 動詞の活用形に注目せよ</b>
          <br />
          画面中央に「思ひ【連用形】」や「咲か【未然形】」といった動詞が現れます。
        </p>
        <br />
        <p>
          <b>2. 正しい接続の助動詞を選べ</b>
          <br />
          ・未然形接続：ず・む・る・す・まほし など
          <br />
          ・連用形接続：けり・き・つ・ぬ・たり など
          <br />
          ・終止形接続：べし・らむ・まじ・なり など
        </p>
        <br />
        <p>
          <b>3. 係り結びフィーバー！</b>
          <br />
          3連続で正解すると「ぞ・なむ・こそ」の係助詞ボーナスが発動！結び（連体形・已然形）を当てて大ダメージ！
        </p>
        <br />
        <div style={{ textAlign: 'center' }}>
          <button id="close-rule-btn" className="btn-sub" style={{ padding: '8px 30px' }} onClick={onClose}>
            心得た
          </button>
        </div>
      </div>
    </div>
  );
};
