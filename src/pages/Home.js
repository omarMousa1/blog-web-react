import React from "react";
import { Introduction } from "./Introduction";
import { Skills } from "../pages/Skills";
import { Experience } from "../pages/Experience";
import { About } from "../pages/About";
import { Project } from "../pages/Project";
import { Form } from "../pages/Form";
import { Testimonial } from "./Testimonial";
import { Spinner } from "../components/Spinner";
import { WeatherApp } from "./weatherSystem/WeatherApp";

export const Home = () => {
  return (
    <main className="mt-24">
      <Introduction />
      <Skills />
      <Experience />
      <About />
      <Project />
      <Testimonial />
      <Form />
      <WeatherApp />
    </main>
  );
};
