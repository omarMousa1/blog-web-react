import React, { useEffect, useState, useRef } from "react";
import man1 from "../assets/images/avatar/avatar-man1.svg";
import man2 from "../assets/images/avatar/avatar-man2.svg";
import man3 from "../assets/images/avatar/avatar-man3.svg";
import women1 from "../assets/images/avatar/avatar-women1.svg";
import women2 from "../assets/images/avatar/avatar-women2.svg";
import ArrowL from "../assets/images/icons/arrow-left-svgrepo-com.svg";
import ArrowR from "../assets/images/icons/arrow-right-svgrepo-com.svg";

export const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [animationClass, setAnimationClass] = useState("");
  const carouselRef = useRef(null);

  const infoCards = [
    {
      id: 1,
      avatar: man1,
      details:
        "Electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      username: "Omar",
      jobname: "Full Stack",
    },
    {
      id: 2,
      avatar: women1,
      details:
        "For over five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      username: "Sadeen",
      jobname: "Testing",
    },
    {
      id: 3,
      avatar: man3,
      details:
        "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
      username: "Yasser",
      jobname: "Web developer",
    },
    {
      id: 4,
      avatar: man2,
      details:
        "But it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      username: "Malek",
      jobname: "Software Eng",
    },
    {
      id: 5,
      avatar: women2,
      details:
        "Lorem Ipsum is simply standard dummy text. Not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      username: "Sara",
      jobname: "Accounting",
    },
    {
      id: 6,
      avatar: women2,
      details:
        "Lorem Ipsum is the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      username: "Yara",
      jobname: "Sales",
    },
  ];

  const handleNext = () => {
    setAnimationClass("slide-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % infoCards.length);
      setAnimationClass("");
    }, 300); // Matches the duration of the animation
  };

  const handlePrev = () => {
    setAnimationClass("slide-right");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + infoCards.length) % infoCards.length
      );
      setAnimationClass("");
    }, 300); // Matches the duration of the animation
  };

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setCardsToShow(3);
    } else if (window.innerWidth >= 900) {
      setCardsToShow(2);
    } else {
      setCardsToShow(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startX = useRef(0);
  const endX = useRef(0);

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    endX.current = e.clientX;
    const deltaX = endX.current - startX.current;

    if (deltaX > 50) {
      handlePrev();
    } else if (deltaX < -50) {
      handleNext();
    }
  };

  const handleDotClick = (index) => {
    setAnimationClass(index > currentIndex ? "slide-left" : "slide-right");
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationClass("");
    }, 300); // Matches the duration of the animation
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div
        className="flex items-center justify-center overflow-hidden"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <button
          className="cursor-pointer absolute left-0 bottom-11 md:top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gray-100 border-black border-2 rounded-full flex justify-center items-center z-10"
          onClick={handlePrev}
        >
          <img src={ArrowL} alt="Previous" className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className={`flex space-x-2 p-4 ${animationClass}`}>
          {infoCards
            .slice(currentIndex, currentIndex + cardsToShow)
            .map((card, index) => (
              <div
                className="cursor-pointer bg-white border border-black p-4 rounded-2xl shadow-md shadow-slate-500 flex flex-col justify-start items-center min-w-[300px]"
                key={index}
              >
                <p className="relative md:ml-10 top-0 md:right-2/4 right-1/3 font-black text-3xl italic">
                  #0{card.id}
                </p>
                <div className="border border-black rounded-full">
                  <img
                    className="w-full h-24 rounded-full"
                    src={card.avatar}
                    alt={card.username}
                  />
                </div>
                <hr className="my-2 border-black border-1 w-full" />

                <p className="text-center text-sm italic leading-relaxed w-[280px] h-[250px]">
                  {card.details}
                </p>

                <hr className="my-2 border-black border-1 w-full" />
                <div className="flex flex-col justify-end">
                  <h1 className="text-center font-bold text-xl">
                    {card.username}
                  </h1>
                  <p className="text-center font-semibold">{card.jobname}</p>
                </div>
              </div>
            ))}
        </div>

        <button
          className="cursor-pointer absolute right-0 bottom-11 md:top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gray-100 border-black border-2 rounded-full flex justify-center items-center z-10"
          onClick={handleNext}
        >
          <img src={ArrowR} alt="Next" className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="flex mt-4 space-x-2">
        {infoCards.map((_, index) => (
          <button
            key={index}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
