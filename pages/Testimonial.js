import React from "react";
import { CardCarousel } from "../components/CardCarousel";

export const Testimonial = () => {
  return (
    <section className="md:px-20 p-5">
      <h1 className="text-center text-[28px] md:text-[48px] text-black mt-5">
        My <span className="font-black ">Testimonial</span>
      </h1>
      <CardCarousel />
    </section>
  );
};
