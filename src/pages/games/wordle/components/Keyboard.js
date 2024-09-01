import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const keys = "ضصثقفغعهخحجدشسآإأيبلاتنمكطئءؤرىةوزظذ".split("");

const Keyboard = ({ handleKeyPress, usedLetters }) => {
  const getColorClass = (char) => {
    switch (usedLetters[char]) {
      case "correct":
        return "bg-green-500 text-white";
      case "present":
        return "bg-yellow-500 text-white";
      case "absent":
        return "bg-gray-400 text-white";
      default:
        return "bg-gray-300 hover:bg-gray-400";
    }
  };

  return (
    <div className="flex flex-row-reverse items-center">
      <div className="flex flex-wrap justify-center">
        {keys.map((char) => (
          <button
            key={char}
            className={`w-10 h-10 m-1 rounded-md ${getColorClass(char)}`}
            onClick={() => handleKeyPress(char)}
          >
            {char}
          </button>
        ))}
        <div className="flex items-center">
          <button
            className="px-2 py-2 m-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            onClick={() => handleKeyPress("ENTER")}
          >
            Enter
          </button>
          <button
            className="px-4 py-2 m-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
            onClick={() => handleKeyPress("BACKSPACE")}
          >
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
