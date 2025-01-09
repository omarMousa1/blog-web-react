import React from "react";
import Row from "./Row";

const Board = ({ solution, guesses, currentGuess }) => {
    return (
        <div className="flex flex-col items-center space-y-2 mb-2">
            {guesses.map((guess, index) => (
                <Row
                    key={index}
                    guess={guess}
                    solution={solution}
                    showResults={true}
                />
            ))}
            {guesses.length < 6 && <Row guess={currentGuess} solution={solution} showResults={false} />}
            {Array.from({ length: 6 - guesses.length - 1 }).map((_, index) => (
                <Row key={`empty-${index}`} guess="" solution={solution} showResults={false} />))}
        </div>
    )
}

export default Board