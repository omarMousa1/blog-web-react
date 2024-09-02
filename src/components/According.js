import React, { useState } from "react";

export const According = ({
  subject,
  details,
  logoExperience,
  titleOfLogo,
  dateExperience,
}) => {
  const [accordingShow, setAccordingShow] = useState(false);

  return (
    <div className="p-2">
      <button
        onClick={() => setAccordingShow(!accordingShow)}
        className="flex justify-between items-center w-full"
      >
        <div className="text-left md:flex md:justify-center md:items-center md:gap-x-3">
          <img
            src={logoExperience}
            alt={titleOfLogo}
            className="mb-2 md:mb-0"
          />
          <span className="text-white text-xl">{subject}</span>
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
              accordingShow && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordingShow && "!rotate-180"
            }`}
          />
        </svg>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${
          accordingShow
            ? "grid-rows-[1fr] opacity-100 mt-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="text-white overflow-hidden leading-relaxed">
          {dateExperience}
          <br />
          {details}
        </p>
      </div>
    </div>
  );
};
