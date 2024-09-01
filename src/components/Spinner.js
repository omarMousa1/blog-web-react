import React from "react";

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-t-black border-l-black border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};
