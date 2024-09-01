import React from "react";

const Squares = ({ char, solution, index, showResults }) => {
    let status = ''

    if (showResults) {
        status = solution.includes(char)
            ? solution[index] === char
                ? 'bg-green-500 text-white'
                : 'bg-yellow-500 text-white'
            : 'bg-gray-400 text-white'
    } else {
        status = 'bg-gray-200 text-black'
    }

    return (
        <div className={`flex items-center justify-center w-12 h-12 border rounded-md border-gray-400 ${status}`}>
            {char}
        </div>
    )
}

export default Squares