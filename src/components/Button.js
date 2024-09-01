import React from "react";

export const Button = ({ nameButton, icon, onClick }) => {
  return (
    <button
      className="flex items-center gap-x-2 p-2 bg-[#7A1CAC] text-white font-medium rounded-xl shadow-lg transform hover:scale-90 transition-all duration-500 hover:bg-[#2E073F]"
      onClick={onClick}
    >
      <img src={icon} alt="" className="w-5 h-5 animate-spin-slow" />
      {nameButton}
    </button>
  );
};
