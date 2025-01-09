import React from "react";

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-t-black border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};
