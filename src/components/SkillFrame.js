import React, { useState } from "react";

export const SkillFrame = ({ skillImage, skillName }) => {
  const [rotating, setRotating] = useState("");
  //   const [isHidden, setHidden] = useState(false)

  const handleMouseEnter = () => {
    const randomRotate = Math.random() > 0.5 ? "rotate-1" : "-rotate-1";
    setRotating(randomRotate);
  };

  return (
    <div
      className={`border-black flex flex-col items-center p-5 border-[3px] rounded-md w-[168px] h-[168px] shadow-lg hover:bg-[#f0f0f0] 
        transform ${rotating} transition-transform duration-500 
      }`}
      onMouseEnter={handleMouseEnter}
    >
      <img src={skillImage} alt={skillName} className="w-[75px] h-[75px]" />
      <p className="font-bold text-xl mt-5">{skillName}</p>
    </div>
  );
};
