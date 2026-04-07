import './Scoreboard.css';

export default function Scoreboard({ playerScore, computerScore, ties, rounds }) {
  return (
    <div className="scoreboard" role="region" aria-label="Scoreboard">
      <h2 className="scoreboard-title">
        <span className="material-symbols-outlined section-icon">scoreboard</span>
        Scoreboard
      </h2>
      <div className="score-grid">
        <div className="score-card score-player">
          <span className="score-label">You</span>
          <span className="score-value">{playerScore}</span>
        </div>
        <div className="score-card score-tie">
          <span className="score-label">Ties</span>
          <span className="score-value">{ties}</span>
        </div>
        <div className="score-card score-computer">
          <span className="score-label">CPU</span>
          <span className="score-value">{computerScore}</span>
        </div>
      </div>
      <p className="round-counter">
        <span className="material-symbols-outlined round-icon">tag</span>
        Round <strong>{rounds}</strong>
      </p>
    </div>
  );
}
