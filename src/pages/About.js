import React from "react";
import characterShow from "../assets/images/characters/user-show-from-W.svg";

export const About = () => {
  return (
    <section className="mt-8 md:mt-3 p-4 md:md:px-20">
      <h1 className="text-center text-[28px] md:text-[48px] mb-5 md:mb-0">
        About <span className="font-black">me</span>
      </h1>
      <div className="flex flex-col items-center justify-center lg:flex-row md:justify-evenly">
        <img
          src={characterShow}
          alt="hello user!"
          className="rounded-xl shadow-lg shadow-black"
        />
        <div className="md:mx-16 md:my-10 mt-6">
          <p className="text-[#71717A] leading-7">
            I have distinguished graduate of the University of Petra, holding a
            Bachelor's degree in Data Science and Artificial Intelligence. With
            a robust foundation in frontend development, I have possesses a
            comprehensive skill set that seamlessly integrates the principles of
            data science with cutting-edge AI technologies. This unique
            combination of expertise not only highlights technical proficiency,
            but also underscores their capability to innovate and excel in the
            dynamic field of technology.
          </p>
          <p className="text-[#71717A] my-4 leading-7">
            Expert in technology and computers, creating websites and databases,
            data analyst and auditor, creating software projects.
          </p>
          <p className="text-[#71717A] leading-7">
            In my work, I prioritize meticulous attention to detail, ensuring
            that every small aspect is thoroughly examined before addressing
            larger elements. My focus on excellence drives me to execute
            programs and tasks with precision, striving to minimize errors and
            enhance overall performance. I highly value collaborative work
            environments, where group discussions and teamwork are integral to
            achieving optimal results. By working closely with colleagues, I
            contribute to a focused and cohesive approach, fostering mutual
            support and shared progress towards the successful completion of
            projects.
          </p>
        </div>
      </div>
    </section>
  );
};
