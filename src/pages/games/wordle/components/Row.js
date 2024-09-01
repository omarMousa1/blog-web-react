import React from "react";
import Squares from "./Squares";

const Row = ({ guess, solution, showResults }) => {
    const titles = guess.padEnd(5, ' ').split('')
    return (
        <div className="flex flex-row-reverse gap-2">
            {titles.map((char, index) => (
                <Squares
                    key={index}
                    char={char}
                    solution={solution}
                    index={index}
                    showResults={showResults}
                />
            ))}
        </div>
    )
}

export default Row