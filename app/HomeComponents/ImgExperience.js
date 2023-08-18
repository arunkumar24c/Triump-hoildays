"use client";
import React from "react";
import Image from "next/image";
import img from "../HomeComponents/assest/Link_margin.png";

import img1 from "../HomeComponents/assest/escapes.png";
import img2 from "../HomeComponents/assest/Link.png";

const ImgExperience = () => {
  return (
    <div className=" flex  flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col  items-center justify-center my-9 overflow-scroll">
      {/* left container  */}
      <div>
        <h1 className="font-bold text-2xl pb-5">
          Find The Perfect
          <br /> Escape
        </h1>
        <hr className="border-[red] w-[4.5rem] pb-2" />
        <p className="text-[#494949]">Discover your ideal Experience</p>
      </div>
      {/* right container  */}
      <div class="">
        <div class="flex h-80 gap-4   overflow-x-scroll">
          <Image
            src={img}
            className=""
            width={300}
            height={300}
            alt="Image 1"
          />
          <Image
            src={img1}
            className=""
            width={300}
            height={300}
            alt="Image 1"
          />
          <Image
            src={img2}
            className=""
            width={300}
            height={300}
            alt="Image 1"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgExperience;
