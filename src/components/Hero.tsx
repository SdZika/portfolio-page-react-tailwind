import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroimage from "../assets/portfolio.png";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] py-8 mx-auto bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="hero" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a </span>
          <br />
          <TypeAnimation
            sequence={[
              "Front Dev",
              1000,
              "Webdesigner",
              1000,
              "Web Engineer",
              1000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Marko Zivkovic and I have 2+ years experience in web
          development.
        </p>
        <div className="my-8">
          <a href="/" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-400 to-pink-500 text-white">
          Download CV</a>
          <a href="#contact" className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradtiant-to-br from-orange-400 to-pink-500  text-white hover:border-none">Contact</a>
        </div>
      </div>
    </div>
  );
};
