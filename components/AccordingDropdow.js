import React, { useState } from "react";

export const AccordingDropdow = ({ projectName }) => {
  const [isOpenProject, setIsOpenProject] = useState(false);
  return (
    <div className="p-2 bg-[#7A1CAC] rounded-md">
      <button
        onClick={() => setIsOpenProject(!isOpenProject)}
        className="flex justify-between items-center w-full"
      >
        <div className="flex justify-center items-center gap-x-3">
          <span className="text-white text-xl text-left">Projects</span>
        </div>
        <svg
          className="fill-white shrink-0 ml-6"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpenProject && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpenProject && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${
          isOpenProject
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="text-white overflow-hidden">{projectName}</p>
      </div>
    </div>
  );
};
