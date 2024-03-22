"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-bold ">
            <span className="text-red-900 opacity-1 bg-clip-text bg-gradient-to-r">
              Hello, I&apos;m{""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Matheus",
                4000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                4000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div>
            <button className="transition ease-in-out bg-black hover:-translate-y-1 hover:scale-110 delay-150 px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-900  to-black hover:bg-red-900 text-white">
              Hire Me
            </button>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-black-800 text-white mt-3"
            >
              <span className="px-6 py-3 w-full sm:w-fit mr-4 transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 from-red-900 to-black  hover:bg-red-900 duration-300 block  rounded-full">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[270px] lg:w-[400px] lg:h[400px] relative">
            <Image
              src="/images/devport2.png"
              alt="Matheus Santos"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
