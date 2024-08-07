import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroimage from "../assets/portfolio_picture.png";

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] py-8 mx-auto bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400]">
        <img src={heroimage} alt="hero" />
      </div>
      <div className="col-span-2 px-5">
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
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6">
          My name is Marko Zivkovic and I have 2+ years experience in web
          development.
        </p>
      </div>
    </div>
  );
};
