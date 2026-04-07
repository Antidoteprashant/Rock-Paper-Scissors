import './RoundResult.css';

const ICON = { rock: 'sports_mma', paper: 'pan_tool', scissors: 'content_cut' };
const LABEL = { rock: 'Rock', paper: 'Paper', scissors: 'Scissors' };

export default function RoundResult({ result }) {
  if (!result) {
    return (
      <div className="result-placeholder">
        <span className="material-symbols-outlined placeholder-icon">sports_mma</span>
        <p>Pick your move to start!</p>
      </div>
    );
  }

  const { playerMove, computerMove, winner } = result;
  const outcomeText = winner === 'player' ? 'You win!' : winner === 'computer' ? 'Computer wins!' : "It's a tie!";
  const outcomeClass = winner === 'player' ? 'outcome-win' : winner === 'computer' ? 'outcome-lose' : 'outcome-tie';

  return (
    <div className="result-container" aria-live="polite">
      <div className="choices-row">
        <div className={`choice-card ${winner === 'player' ? 'choice-winner' : ''}`}>
          <span className="material-symbols-outlined choice-icon">{ICON[playerMove]}</span>
          <span className="choice-name">{LABEL[playerMove]}</span>
          <span className="choice-actor">You</span>
        </div>

        <div className="vs-badge">VS</div>

        <div className={`choice-card ${winner === 'computer' ? 'choice-winner' : ''}`}>
          <span className="material-symbols-outlined choice-icon">{ICON[computerMove]}</span>
          <span className="choice-name">{LABEL[computerMove]}</span>
          <span className="choice-actor">CPU</span>
        </div>
      </div>

      <div className={`outcome-badge ${outcomeClass}`}>
        {outcomeText}
      </div>
    </div>
  );
}
