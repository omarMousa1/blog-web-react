import { useState, useEffect } from "react";
import Board from "./Border";
import lightMod from "../../../assets/images/icons/lightMod.svg";

const TicTacToe = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [isXNext, setIsXNext] = useState(Math.random() < 0.5);
  const [draw, setDraw] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [bgColor, setBgColor] = useState("#FEFBD8");
  const [textColor, setTextColor] = useState("#000000");
  const [playWithAI, setPlayWithAI] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (darkMode) {
      setBgColor("#402E7A");
      setTextColor("#FFFFFF");
      document.documentElement.classList.add("dark");
    } else {
      setBgColor("#FEFBD8");
      setTextColor("#000000");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (playWithAI && !isXNext) {
      const aiMove = calculateBestMove(current.squares);
      setTimeout(() => handleClick(aiMove), 1000);
    }
    // eslint-disable-next-line
  }, [isXNext, playWithAI]);

  const handleClick = (i) => {
    const historyUpToCurrentStep = history.slice(0, stepNumber + 1);
    const current = historyUpToCurrentStep[historyUpToCurrentStep.length - 1];
    const newSquares = current.squares.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = isXNext ? "X" : "O";

    setHistory(historyUpToCurrentStep.concat([{ squares: newSquares }]));
    setStepNumber(historyUpToCurrentStep.length);
    setIsXNext(!isXNext);
    setTimeout(() => setGameStarted(true), 1000);

    const winner = calculateWinner(newSquares);
    setDraw(!winner && newSquares.every((square) => square !== null));
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setIsXNext(step % 2 === 0);
    const current = history[step];
    const winner = calculateWinner(current.squares);
    setDraw(!winner && current.squares.every((square) => square !== null));
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const noMovesMade = current.squares.every((square) => square === null);

  const status = noMovesMade
    ? `No moves made yet \n Player '${
        isXNext ? "X" : "O"
      }', make your first move`
    : winner
    ? `Winner: ${winner}`
    : draw
    ? "Draw!"
    : `Next player: ${isXNext ? "X" : "O"}`;

  document.documentElement.style.setProperty("--bg-color", bgColor);
  document.documentElement.style.setProperty("--text-color", textColor);

  // AI player
  const calculateBestMove = (squares) => {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        squares[i] = "O";
        const score = minimax(squares, 0, false);
        squares[i] = null;

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  // Minimax algorithm
  const minimax = (squares, depth, isMaximizing) => {
    const winner = calculateWinner(squares);
    if (winner === "O") return 1;
    if (winner === "X") return -1;
    if (squares.every((square) => square)) return 0; // Draw

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (!squares[i]) {
          squares[i] = "O";
          const score = minimax(squares, depth + 1, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (!squares[i]) {
          squares[i] = "X";
          const score = minimax(squares, depth + 1, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  return (
    <section className="tictactoe mt-[90px]">
      <div className="w-full h-full">
        <nav className="w-full flex items-center justify-center gap-x-4 p-2 bg-[#EECEB9] dark:bg-[#4C3BCF] shadow-xl">
          <button
            className="p-2 font-medium rounded-lg border-2 bg-[#EECEB9] dark:bg-[#4C3BCF]"
            onClick={() => {
              setHistory([{ squares: Array(9).fill(null) }]);
              setStepNumber(0);
              setIsXNext(Math.random() < 0.5);
              setGameStarted(false);
            }}
          >
            Restart
          </button>

          {!gameStarted && (
            <div className="flex justify-center items-center p-2 border-2 rounded-lg bg-[#EECEB9] dark:bg-[#4C3BCF]">
              <label className="text-sm font-medium mr-2">Play with AI:</label>
              <input
                type="checkbox"
                checked={playWithAI}
                onChange={(e) => setPlayWithAI(e.target.checked)}
                className="h-4 w-4 transition duration-150 ease-in-out"
              />
            </div>
          )}

          <button
            className=" p-2 font-medium rounded-lg border-2 bg-[#EECEB9] dark:bg-[#4C3BCF]"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? (
              <svg
                id="theme-toggle-light-icon"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1zm5-9a1 1 0 10-2 0v1a1 1 0 102 0V2zM5.636 4.05a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                id="theme-toggle-dark-icon"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            )}
          </button>
        </nav>
        <div className="flex flex-col sm:flex-col md:flex-row md:justify-center">
          <div className="flex flex-col items-center md:mr-5 mt-20 md:mt-20">
            <div className="w-[280px] h-[76px] text-lg mb-4 border-2 p-2 rounded-lg font-medium whitespace-pre-line flex justify-center items-center text-center bg-[#EECEB9] dark:bg-[#4C3BCF]">
              <p>{status}</p>
            </div>
            <Board squares={current.squares} onClick={handleClick} />
          </div>

          <div className="md:mt-24 md:ml-10 flex flex-col items-center mb-3 sm:flex sm:flex-col sm:justify-start mt-5">
            <p className="p-2 font-medium rounded-lg border-2 mb-6 bg-[#EECEB9] dark:bg-[#4C3BCF]">
              Your movement
            </p>
            <ol>
              {history.map((step, move) => {
                const desc = move ? `Go to move #${move}` : "Go to game start";
                return (
                  <div
                    className="border-x-2 px-1 border-black dark:border-[#EEEEEE]"
                    key={move}
                  >
                    <li className="flex flex-col items-center">
                      <button className="" onClick={() => jumpTo(move)}>
                        {desc}
                      </button>
                      <hr className="opacity-40 w-10 border-black dark:border-[#EEEEEE] mt-2" />
                    </li>
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (squares) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
