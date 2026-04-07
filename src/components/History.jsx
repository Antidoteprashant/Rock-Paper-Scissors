import './History.css';

const ICON = { rock: 'sports_mma', paper: 'pan_tool', scissors: 'content_cut' };

const RESULT_LABEL = { player: 'Win', computer: 'Loss', tie: 'Tie' };
const RESULT_CLASS = { player: 'hist-win', computer: 'hist-lose', tie: 'hist-tie' };

export default function History({ history }) {
  if (history.length === 0) return null;

  return (
    <div className="history" role="region" aria-label="Round history">
      <h2 className="history-title">
        <span className="material-symbols-outlined section-icon">history</span>
        Round History
      </h2>
      <div className="history-list" role="list">
        {history.map((entry) => (
          <div key={entry.id} className="history-row" role="listitem">
            <span className="hist-round">#{entry.id}</span>
            <span className="hist-move">
              <span className="material-symbols-outlined hist-icon">{ICON[entry.playerMove]}</span>
              <span className="hist-move-label">You</span>
            </span>
            <span className="hist-vs">vs</span>
            <span className="hist-move">
              <span className="material-symbols-outlined hist-icon">{ICON[entry.computerMove]}</span>
              <span className="hist-move-label">CPU</span>
            </span>
            <span className={`hist-result ${RESULT_CLASS[entry.winner]}`}>
              {RESULT_LABEL[entry.winner]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
