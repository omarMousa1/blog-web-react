import React from "react";
import translateImage from "../assets/images/project/language1.svg";
import chatbotImage from "../assets/images/project/chatbot.svg";
import heartImage from "../assets/images/project/heart.svg";
import exploreIcon from "../assets/images/icons/explore-svgrepo-comChange.svg";
import starIcon from "../assets/images/icons/star-shine-svgrepo-com.svg";
import { ProjectCard } from "../components/ProjectCard";

export const Project = () => {
  return (
    <section className="bg-black p-5 md:px-20 md:py-5">
      <h1 className="text-center text-[28px] md:text-[48px] text-white mb-5 md:mt-5">
        My <span className="font-black ">Project</span>
      </h1>
      <div className="flex justify-center flex-wrap gap-3">
        <ProjectCard
          projectImage={translateImage}
          titleIcon={starIcon}
          projectNumber="01"
          projectTitle="Translation Machine"
          projectDetails="I build a Translation Mahine that can translate any word in
            different language. By using Large Language Model(LLM) and LangChine
            library you can build a different smart applicaion to service the
            user."
          Button="Explore"
          buttonIcon={exploreIcon}
          link="https://github.com/omarMousa1/Translate-and-ChatGPT-Application"
        />
        <ProjectCard
          projectImage={chatbotImage}
          titleIcon={starIcon}
          projectNumber="02"
          projectTitle="Similar ChatGPT Assistant"
          projectDetails="In this project I build a Simailar ChatGPT Assistant by Large
            Language Model(LLM) and LangChine, same the Translate Machine, but
            the difference between them in Similar ChatGPT Assistant you should
            add some Documentation and arbitrage the chunk of size and overlap."
          Button="Explore"
          buttonIcon={exploreIcon}
          link="https://github.com/omarMousa1/Translate-and-ChatGPT-Application"
        />
        <ProjectCard
          projectImage={heartImage}
          titleIcon={starIcon}
          projectNumber="03"
          projectTitle="Heart Diseases Analysis"
          projectDetails="Heart disease is the number 1 cause of death according to world
            health organization (WHO), detecting heart diseases and correctly
            diagnosing heart diseases in early stages could improve and increase
            the life expectancy of the population. In this search I study the
            relationship between 13 clinical features, and the presence of heart
            disease."
          Button="Explore"
          buttonIcon={exploreIcon}
          link="https://github.com/omarMousa1/Heart-Disease"
        />
      </div>
    </section>
  );
};
