import React, { useState } from 'react';
import { GRAMMAR_DICTIONARY, KAKARI_RULES } from '../data';

interface GrammarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GrammarModal: React.FC<GrammarModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'未然形' | '連用形' | '終止形' | '係り結び'>('未然形');

  if (!isOpen) return null;

  const filteredGrammar = GRAMMAR_DICTIONARY.filter((item) =>
    item.conn.startsWith(activeTab)
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box grammar-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>助動詞文法絵巻 〜接続と係り結びの便覧〜</h2>
          <button className="close-x-btn" onClick={onClose} aria-label="閉じる">
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="grammar-tabs">
          {(['未然形', '連用形', '終止形', '係り結び'] as const).map((tab) => (
            <button
              key={tab}
              className={`grammar-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === '係り結び' ? '係り結び' : `${tab}接続`}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grammar-scroll-content">
          {activeTab !== '係り結び' ? (
            <div className="grammar-card-list">
              {filteredGrammar.map((item, idx) => (
                <div key={idx} className="grammar-entry-card">
                  <div className="entry-header">
                    <span className="entry-name">{item.name}</span>
                    <span className="entry-conn-tag">{item.conn}</span>
                  </div>

                  <div className="entry-body">
                    <div className="entry-row">
                      <span className="entry-label">意味:</span>
                      <span className="entry-val">{item.meanings.join('・')}</span>
                    </div>
                    <div className="entry-row">
                      <span className="entry-label">活用型:</span>
                      <span className="entry-val">{item.conjugation}</span>
                    </div>
                    <div className="entry-row">
                      <span className="entry-label">要点:</span>
                      <span className="entry-val tip">{item.tip}</span>
                    </div>
                    <div className="entry-example">
                      <span className="example-label">用例:</span> {item.example}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="kakari-rule-list">
              <div className="kakari-intro">
                文中に特定の係助詞が入ると、文末の動詞・助動詞が連体形や已然形に変化する文法法則。
              </div>

              {KAKARI_RULES.map((k, idx) => (
                <div key={idx} className="kakari-rule-card">
                  <div className="kakari-particle-box">
                    <span className="kakari-p-name">【{k.particle}】</span>
                    <span className="arrow-sym">➔</span>
                    <span className="kakari-result-name">結び：{k.musubi}</span>
                  </div>
                  <div className="kakari-desc">{k.meaning}</div>
                </div>
              ))}

              <div className="kakari-mnemonic">
                <div className="mnemonic-title">★ 覚え方の秘伝歌</div>
                <div className="mnemonic-text">
                  「ぞ・なむ・や・か」は<b>連体形</b>結び！<br />
                  「こそ」は激しく<b>已然形</b>！
                </div>
              </div>
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <button className="btn-sub" style={{ padding: '8px 36px' }} onClick={onClose}>
            絵巻を納める
          </button>
        </div>
      </div>
    </div>
  );
};
