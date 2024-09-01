import React from "react";
import { ResumeDownload } from "./ResumeDownload";

export const ResumeButton = () => {
  return (
    <button
      className="md:block lg:block items-center bg-[#7A1CAC] hover:bg-[#2E073F] py-2 px-4 text-white rounded-md"
      onClick={() => ResumeDownload()}
    >
      Resume
    </button>
  );
};
