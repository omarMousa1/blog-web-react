import pythonIcon from "../assets/images/programmingIcons/python-svgrepo-com.svg";
import javaIcon from "../assets/images/programmingIcons/java-svgrepo-com.svg";
import dotNetIcon from "../assets/images/programmingIcons/dotnet-svgrepo-com.svg";
import htmlIcon from "../assets/images/programmingIcons/html-124-svgrepo-com.svg";
import cssIcon from "../assets/images/programmingIcons/css3-02-svgrepo-com.svg";
import javaScriptIcon from "../assets/images/programmingIcons/js01-svgrepo-com.svg";
import rIcon from "../assets/images/programmingIcons/r-svgrepo-com.svg";
import sqlIcon from "../assets/images/programmingIcons/sql-svgrepo-com.svg";
import tableauIcon from "../assets/images/programmingIcons/tableau-svgrepo-com.svg";
import arduinoIcon from "../assets/images/programmingIcons/arduino-svgrepo-com.svg";
import reactIcon from "../assets/images/programmingIcons/reactjs-fill-svgrepo-com.svg";
import tailwindIcon from "../assets/images/programmingIcons/tailwindcss-svgrepo-com.svg";
import { SkillFrame } from "../components/SkillFrame";

export const Skills = () => {
  return (
    <section className="mt-8 p-3 md:px-20">
      <h1 className="text-center text-[28px] mb-5 md:text-[48px] md:mt-10 md:mb-8">
        My <span className="font-black">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <SkillFrame skillImage={pythonIcon} skillName="Python" />
        <SkillFrame skillImage={javaIcon} skillName="Java" />
        <SkillFrame skillImage={dotNetIcon} skillName=".NET Core" />
        <SkillFrame skillImage={htmlIcon} skillName="HTML" />
        <SkillFrame skillImage={reactIcon} skillName="React" />
        <SkillFrame skillImage={cssIcon} skillName="CSS" />
        <SkillFrame skillImage={javaScriptIcon} skillName="Javascript" />
        <SkillFrame skillImage={tailwindIcon} skillName="Tailwind" />
        <SkillFrame skillImage={rIcon} skillName="R Program" />
        <SkillFrame skillImage={sqlIcon} skillName="SQL" />
        <SkillFrame skillImage={tableauIcon} skillName="Tableau" />
        <SkillFrame skillImage={arduinoIcon} skillName="Arduino" />
      </div>
    </section>
  );
};
