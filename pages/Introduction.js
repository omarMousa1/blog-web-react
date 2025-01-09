import manCheckLabtop from "../assets/images/characters/man-check-labtop.svg";
import { SocialIcons } from "./SocialIcons";

export const Introduction = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-5 px-4 md:flex-row-reverse md:px-20">
      <img src={manCheckLabtop} alt="browses the internet" />
      <div>
        <p className="text-[28px] mt-3">
          Hello I'm <span className="font-black">Omar Mousa.</span>
          <br />
          <span className="font-black">Fronted Developer</span>
          <br />
          Based In <span className="font-black">Kingdom of Saudi Arabia</span>
        </p>
        <p className=" text-[#71717A] text-base leading-relaxed my-4">
          Welcome to my website page.
          <br />A candidate who combines a strong attention to detail with a
          high level of commitment, loyalty, and dedication, continually
          developing their skills and expertise to contribute effectively to the
          organization's growth and success.
          <br />
          Here!, You will found all my achievements and skills.
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};
