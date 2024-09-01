import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NotFound = () => {
  const backHome = useNavigate();

  const goHome = () => {
    backHome("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4 text-[#AD49E1]">404</h1>
      <p className="text-2xl mb-6 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={goHome}
        className="px-6 py-3 bg-[#7A1CAC] hover:bg-[#2E073F] text-white rounded-lg hover:text-white transition-colors duration-300"
      >
        Back to home
      </button>
    </div>
  );
};
