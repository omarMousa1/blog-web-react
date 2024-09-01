/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import { arabicWordsChecker, WORDS as WordData } from "./components/Words";
import ArabicCheckerPopUp from "./components/ModelChecker";

const Wordle = () => {
  const getRandomWord = () =>
    WordData[Math.floor(Math.random() * WordData.length)];

  const [solution] = useState(getRandomWord().slice(0, 5));
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("playing");
  const [usedLetters, setUsedLetters] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [langMsg, setLangMsg] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();

      if (key === "ENTER" || key === "BACKSPACE") {
        handleKeyPress(key);
        console.log(key);
      } else if (
        /^[\u0621-\u064A]$/.test(key) &&
        currentGuess.length <= solution.length
      ) {
        handleKeyPress(key);
        setLangMsg("");
      } else if (/^[A-Za-z]$/.test(key)) {
        setLangMsg(
          "لقد أدخلت حرفََ باللغة الإنجليزية! يرجى أدخل حرف باللغة العربية"
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentGuess, solution]);

  const handleKeyPress = (key) => {
    if (gameStatus !== "playing") return;
    if (key === "ENTER") {
      if (currentGuess.length === solution.length) {
        if (!arabicWordsChecker(currentGuess)) {
          setErrorMsg("هذه ليست كلمة! أعد المحاولة");
          return;
        }

        setErrorMsg("");
        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);
        setCurrentGuess("");

        const newUsedLetters = { ...usedLetters };

        currentGuess.split("").forEach((letter, index) => {
          if (solution[index] === letter) {
            newUsedLetters[letter] = "correct";
          } else if (solution.includes(letter)) {
            newUsedLetters[letter] = "present";
          } else {
            newUsedLetters[letter] = "absent";
          }
        });

        setUsedLetters(newUsedLetters);

        if (currentGuess === solution) {
          setGameStatus("won");
        } else if (newGuesses.length === 6) {
          setGameStatus("lose");
        }
      }
    } else if (key === "BACKSPACE") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (
      currentGuess.length < solution.length &&
      /^[\u0621-\u064A]$/.test(key)
    ) {
      setCurrentGuess((cl) => cl + key);
    }
  };

  const handleCloseErrorModal = () => {
    setErrorMsg("");
  };

  return (
    <section className="wordle mt-20">
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F0EBE3]">
        <h1 className="text-2xl font-bold mb-5">Wordle (لغز الكلمة)</h1>
        <Board
          solution={solution}
          guesses={guesses}
          currentGuess={currentGuess}
        />
        <p className="w-full h-4 mb-2 text-center font-bold text-red-700">
          {langMsg}
        </p>
        <div className="w-2/3">
          <Keyboard handleKeyPress={handleKeyPress} usedLetters={usedLetters} />
        </div>
        {gameStatus !== "playing" && (
          <GameStatus status={gameStatus} solution={solution} />
        )}
        {errorMsg && (
          <ArabicCheckerPopUp
            onClose={handleCloseErrorModal}
            MsgError={errorMsg}
          />
        )}
      </div>
    </section>
  );
};

export default Wordle;
