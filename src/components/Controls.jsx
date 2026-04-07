import './Controls.css';

const MOVES = [
  { id: 'rock',     icon: 'sports_mma',  label: 'Rock' },
  { id: 'paper',    icon: 'pan_tool',    label: 'Paper' },
  { id: 'scissors', icon: 'content_cut', label: 'Scissors' },
];

export default function Controls({ onPlay, currentResult }) {
  return (
    <div className="controls" role="group" aria-label="Choose your move">
      <p className="controls-prompt">
        {currentResult ? 'Play again:' : 'Choose your move:'}
      </p>
      <div className="move-buttons">
        {MOVES.map(({ id, icon, label }) => (
          <button
            key={id}
            className="move-btn"
            onClick={() => onPlay(id)}
            aria-label={label}
          >
            <span className="material-symbols-outlined move-icon">{icon}</span>
            <span className="move-label">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
