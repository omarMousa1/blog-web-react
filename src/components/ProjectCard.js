import React from "react";
import { Button } from "../components/Button";
import exploreIcon from "../assets/images/icons/explore-svgrepo-comChange.svg";

export const ProjectCard = ({
  projectImage,
  titleIcon,
  projectTitle,
  projectDetails,
  projectNumber,
  link,
}) => {
  const projectLink = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="border-2 border-white flex flex-col rounded-xl md:w-[31%]">
      <div className="flex justify-center border-b-2 border-white">
        <img
          src={projectImage}
          alt="translation"
          className="w-[200px] h-[200px]"
        />
      </div>
      <div className="p-5 pt-1 md:pl-5 md:pr-5 md:h-3/4">
        <span className="font-black text-2xl ml-1 text-white">
          {projectNumber}
        </span>
        <div className="flex items-center">
          <img src={titleIcon} alt="" className="w-7 h-7 animate-rotate-x" />
          <h1 className="text-xl font-black ml-2 text-white">{projectTitle}</h1>
        </div>
        <p className="leading-7 my-2 text-[#71717A]">{projectDetails}</p>
      </div>
      <div className="pl-5 pb-5">
        <Button nameButton="Explore" icon={exploreIcon} onClick={projectLink} />
      </div>
    </div>
  );
};
