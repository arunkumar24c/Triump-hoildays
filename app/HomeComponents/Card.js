"use client";
import React from "react";
import Image from "next/image";
import img from "../HomeComponents/assest/group_tour_enqiry.png.png";

const Card = () => {
  return (
    <div className=" container mx-auto flex flex-col sm:flex-col md:flex-col xl:flex-row lg:flex-row  border-2 border-[orange] xl:justify-around xl:w-[1080px] xl:h-[112px]">
      <div className="flex gap-2 p-1 ">
        <Image
          src={img}
          width={100}
height={100}
          className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] xl:w-[90px] xl:h-[90px]"
        />
        <div className="md:mt-3">
          <h1 className="text-2xl sm:text-xl font-bold text-orange-400">
            Bigger Group? Get special offers upto 50% off!
          </h1>{" "}
          <p className="text-[#696969] text-base font-semibold">
            We create unforgettable adventures, customised for your group.
          </p>
        </div>
      </div>
      <button className="xl:w-[13rem] font-bold text-white xl:h-[3rem] sm:w-full h-[2.5rem] lg::w-[13rem] lg:h-[3rem] md:w-[13rem] md:h-[3rem] md:ml-[8rem] md:mb-2 rounded-md xl:mt-5 lg:mt-5 bg-orange-500 sm:mb-2 ">
        Get a Callback
      </button>
    </div>
  );
};

export default Card;
