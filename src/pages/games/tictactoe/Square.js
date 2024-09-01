import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-16 h-16 bg-[#CAF4FF] text-red-700 border-2 border-[#ACB1D6] rounded text-2xl font-bold"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
