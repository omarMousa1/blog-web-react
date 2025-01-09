import facebookIcon from "../assets/images/socialIcons/social-facebook-svgrepo-com-1.svg";
import githubIcon from "../assets/images/socialIcons/social-github-svgrepo-com.svg";
import instagramIcon from "../assets/images/socialIcons/social-instagram-svgrepo-com.svg";
import kaggleIcon from "../assets/images/socialIcons/kaggle-svgrepo-com.svg";

export const SocialIcons = () => {
  return (
    <div className="flex gap-2">
      <button className="border-[3px] border-black border-solid p-1 rounded-lg hover:bg-[#f0f0f0] transition ease-in duration-300">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebookIcon}
            alt="facebook"
            className="w-8 h-8 md:w-5 md:h-5"
          />
        </a>
      </button>
      <button className="border-[3px] border-black border-solid p-1 rounded-lg hover:bg-[#f0f0f0] transition ease-in duration-300">
        <a
          href="https://github.com/omarMousa1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubIcon}
            alt="github"
            className="w-8 h-8 md:w-5 md:h-5"
          />
        </a>
      </button>
      <button className="border-[3px] border-black border-solid p-1 rounded-lg hover:bg-[#f0f0f0] transition ease-in duration-300">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramIcon}
            alt="instagram"
            className="w-8 h-8 md:w-5 md:h-5"
          />
        </a>
      </button>
      <button className="border-[3px] border-black border-solid p-1 rounded-lg hover:bg-[#f0f0f0] transition ease-in duration-300">
        <a
          href="https://www.kaggle.com/omarmousa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={kaggleIcon}
            alt="kaggle"
            className="w-8 h-8 md:w-5 md:h-5"
          />
        </a>
      </button>
    </div>
  );
};
