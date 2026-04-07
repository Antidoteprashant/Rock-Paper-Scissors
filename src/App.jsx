import { useState, useCallback } from 'react';
import Scoreboard from './components/Scoreboard.jsx';
import Controls from './components/Controls.jsx';
import RoundResult from './components/RoundResult.jsx';
import History from './components/History.jsx';
import StreakDisplay from './components/StreakDisplay.jsx';
import './App.css';

const MOVES = ['rock', 'paper', 'scissors'];

function getComputerMove() {
  return MOVES[Math.floor(Math.random() * 3)];
}

function getWinner(player, computer) {
  if (player === computer) return 'tie';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) return 'player';
  return 'computer';
}

const initialState = {
  playerScore: 0,
  computerScore: 0,
  ties: 0,
  rounds: 0,
  currentResult: null,
  history: [],
  currentStreak: 0,
  bestStreak: 0,
};

export default function App() {
  const [state, setState] = useState(initialState);

  const play = useCallback((playerMove) => {
    const computerMove = getComputerMove();
    const winner = getWinner(playerMove, computerMove);

    setState((prev) => {
      const newStreak = winner === 'player' ? prev.currentStreak + 1 : 0;
      const newBest = Math.max(prev.bestStreak, newStreak);
      const newRound = prev.rounds + 1;
      const entry = { id: newRound, playerMove, computerMove, winner };

      return {
        ...prev,
        playerScore: prev.playerScore + (winner === 'player' ? 1 : 0),
        computerScore: prev.computerScore + (winner === 'computer' ? 1 : 0),
        ties: prev.ties + (winner === 'tie' ? 1 : 0),
        rounds: newRound,
        currentResult: entry,
        history: [entry, ...prev.history],
        currentStreak: newStreak,
        bestStreak: newBest,
      };
    });
  }, []);

  const reset = useCallback(() => setState(initialState), []);

  const { playerScore, computerScore, ties, rounds, currentResult, history, currentStreak, bestStreak } = state;

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="material-symbols-outlined">sports_mma</span>
          Rock Paper Scissors
        </h1>
        <p className="app-subtitle">Best of infinity</p>
      </header>

      <main className="app-main">
        <section className="top-section">
          <Scoreboard
            playerScore={playerScore}
            computerScore={computerScore}
            ties={ties}
            rounds={rounds}
          />
          <StreakDisplay currentStreak={currentStreak} bestStreak={bestStreak} />
        </section>

        <section className="arena">
          <RoundResult result={currentResult} />
          <Controls onPlay={play} currentResult={currentResult} />
          <button className="reset-btn" onClick={reset} aria-label="Reset game">
            <span className="material-symbols-outlined">refresh</span>
            Reset Game
          </button>
        </section>

        <section className="history-section">
          <History history={history} />
        </section>
      </main>
    </div>
  );
}
