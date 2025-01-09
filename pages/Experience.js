import React from "react";
import { According } from "../components/According";
import forecatingLogo from "../assets/images/logoExperienceComp/coding-seo-and-web-svgrepo-com.svg";
import istanbulLogo from "../assets/images/logoExperienceComp/company-svgrepo-com.svg";
import sdaiaLogo from "../assets/images/logoExperienceComp/sdaia.svg";

export const Experience = () => {
  return (
    <section className="bg-black px-4 py-6 flex flex-col gap-y-3 mt-8 md:px-20">
      <h1 className="text-center text-[28px] text-white mb-5 md:text-[48px]">
        My <span className="font-black ">Experience</span>
      </h1>
      <div className="p-2 rounded-lg border-2 border-white">
        <According
          logoExperience={forecatingLogo}
          subject="Graduation Project - Forecasting System"
          dateExperience="N/A"
          details="In the project we used interactive dashboards and user interface to fit and predict business KPIs using the Facebook Prophet, which is a state of the art model for modelling seasonal data and making accurate forecasts.
The model split the time series into a trend part and a seasonal part, the trend part is modeled with stepwise linear regression, while the seasonal part is modeled with Fourier series, the parameters pf this model is then optimized with MLE, while results in higher accuracy and faster convergence for seasonal data."
        />
      </div>
      <div className="p-4 rounded-lg border-2 border-white">
        <According
          logoExperience={istanbulLogo}
          subject="Field Training – Istanbul Information Technology Company"
          dateExperience="June 2023 – August 2023"
          details="Led a pivotal project creating a functional chatbot system, showcasing expertise in Python-based password encryption, API development, and server integration.
Proficiently used phpMyAdmin and cPanel to seamlessly integrate the chatbot onto company servers.
Mastered Microsoft Azure and OpenAI tools, effectively utilizing Azure for data organization and content creation.
Enhanced the chatbot by integrating it with Azure OpenAI, expanding its capabilities for private interactions.
Increased chatbot accessibility by integrating it into the Thinkprop website, boosting user engagement."
        />
      </div>
      <div className="p-4 rounded-lg border-2 border-white">
        <According
          logoExperience={sdaiaLogo}
          subject="Training - Saudi Authority for Data and Artificial Intelligence"
          dateExperience="April 2024 - Present"
          details="I have reached an intermediate stage of professionalism in my training, having completed coursework in web design languages HTML and CSS.
My proficiency has notably increased, particularly in understanding the expected design outcomes and focusing on small details before larger elements.
Additionally, I have incorporated JavaScript into my skill set. I have successfully designed websites in three stages and am now progressing to the next phase of my training, which involves designing websites using React."
        />
      </div>
    </section>
  );
};
