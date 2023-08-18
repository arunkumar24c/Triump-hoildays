"use client";
import React from "react";
import Image from "next/image";

import img from "../HomeComponents/assest/Gloab.png";
import img1 from "../HomeComponents/assest/Ain_dubai.png";
import img2 from "../HomeComponents/assest/Singapore.png";
import img3 from "../HomeComponents/assest/Amsterdam.png";
import img4 from "../HomeComponents/assest/Thailand.png";
import img5 from "../HomeComponents/assest/italy.png";
import img6 from "../HomeComponents/assest/Abu-Dhabi.png";
import img7 from "../HomeComponents/assest/Australia.png";
import img8 from "../HomeComponents/assest/Paris.png";
import img9 from "../HomeComponents/assest/Malaysia.png";
import img10 from "../HomeComponents/assest/USA.png";

const Gridcontainer = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center py-10 sm:py-[5rem] gap-5 container mx-auto">
      {/* left container */}
      <div className="flex flex-col w-[90%] sm:w-[90%] md:w-[90%] lg:w-[45%] xl:w-[50%] gap-4">
        <div className="bg-no-repeat bg-cover  xl:w-583px lg:w-483px md:w-full sm:w-full h-[223px] text-white rounded-xl relative">
          <Image
            src={img}
            alt="Find Best Things to Do"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute inset-0 p-11 flex flex-col justify-center items-start text-white">
            <h2 className="pb-1 font-bold text-xl">Find Best Things to Do</h2>
            <h4 className="pb-1 font-normal text-lg">Across Globe</h4>
            <button className="py-2 text-black font-bold rounded-xl bg-[#e6e61b] px-4">
              Book Now
            </button>
          </div>
        </div>
        <div className="bg-no-repeat bg-cover w-full h-[345px] rounded-xl relative">
          <Image
            src={img1}
            alt="Dubai"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute inset-0 flex justify-center items-center text-white font-bold text-xl">
            Dubai
          </div>
        </div>
      </div>
      {/* right container */}
      <div className="grid grid-cols-3  sm:grid-cols-3 gap-2 overflow-x-auto">
        {/* 1st */}
        <div className="w-full sm:w-[146px] h-[223px] rounded-xl overflow-hidden relative">
          <Image
            src={img2}
            alt="Singapore"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <p className="text-white font-bold text-base sm:text-lg absolute bottom-4 left-4">
            Singapore
          </p>
        </div>

        {/* 2nd */}
        <div className="w-full sm:w-[146px] h-[163px] rounded-xl overflow-hidden relative">
          <Image
            src={img3}
            alt="Amsterdam"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <p className="text-white font-bold text-base sm:text-lg absolute bottom-4 left-4">
            Amsterdam
          </p>
        </div>

        {/* 3rd */}
        <div className="w-[146px] h-[223px] bg-no-repeat bg-cover rounded-xl flex justify-center items-center relative">
          <Image
            src={img4}
            alt="Thailand"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <p className="text-white font-bold text-lg absolute bottom-4 left-4">
            Thailand
          </p>
        </div>
        {/* 4th */}
        <div className="w-full sm:w-[146px] h-[163px] rounded-xl overflow-hidden relative">
          <Image
            src={img5}
            alt="Italy"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <p className="text-white font-bold text-lg absolute bottom-4 left-4">
            Italy
          </p>
        </div>
        {/* 5th */}
        <div className="xl:w-[146px] w-[126px] -mt-[60px] pt-2 rounded-xl overflow-hidden relative">
          <Image
            src={img6}
            alt="Abu Dhabi"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <p className="text-white font-bold text-lg absolute bottom-4 left-4">
            Abu Dhabi
          </p>
        </div>
        {/* 6th */}
        <div className="w-full sm:w-[146px] h-[163px] rounded-xl overflow-hidden relative">
          <Image
            src={img7}
            alt="Italy"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <p className="text-white font-bold text-lg absolute bottom-4 left-4">
            Australia
          </p>
        </div>
        {/* 7th */}
        <div className="w-full sm:w-[146px] h-[163px] rounded-xl overflow-hidden relative">
          <Image
            src={img8}
            alt="Paris"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <p className="text-white font-bold text-lg absolute bottom-4 left-4">
            Paris
          </p>
        </div>
        {/* 8th */}
        <div className="w-full sm:w-[146px] h-[163px] rounded-xl overflow-hidden relative">
          <Image
            src={img9}
            alt="Malaysia"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <p className="text-white font-bold text-lg absolute bottom-4 left-4">
            Malaysia
          </p>
        </div>
        {/* 9th */}
        <div className="w-full sm:w-[146px] h-[163px] rounded-xl overflow-hidden relative">
          <Image
            src={img10}
            alt="USA"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <p className="text-white font-bold text-lg absolute bottom-4 left-4">
            USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gridcontainer;
