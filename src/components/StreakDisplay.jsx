import './StreakDisplay.css';

export default function StreakDisplay({ currentStreak, bestStreak }) {
  const isHot = currentStreak >= 3;

  return (
    <div className={`streak-display ${isHot ? 'streak-hot' : ''}`} role="region" aria-label="Streak tracker">
      <h2 className="streak-title">
        <span className="material-symbols-outlined section-icon">local_fire_department</span>
        Streak
      </h2>
      <div className="streak-grid">
        <div className="streak-card">
          <span className="streak-label">Current</span>
          <div className="streak-current-wrapper">
            <span className="streak-value">{currentStreak}</span>
            {isHot && (
              <span className="material-symbols-outlined hot-icon" aria-label="Hot streak">
                local_fire_department
              </span>
            )}
          </div>
          {isHot && <span className="hot-label">On fire!</span>}
        </div>
        <div className="streak-card streak-best">
          <span className="streak-label">Best</span>
          <span className="streak-value streak-best-value">{bestStreak}</span>
          <span className="streak-best-label">all time</span>
        </div>
      </div>
    </div>
  );
}
