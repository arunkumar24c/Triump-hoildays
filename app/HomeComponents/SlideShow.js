"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../HomeComponents/assest/Thailand-.png";
import img1 from "../HomeComponents/assest/Singapore.png";
import img2 from "../HomeComponents/assest/Bali.png";
import img3 from "../HomeComponents/assest/Vietnam.png";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillStar,
} from "react-icons/ai";

const data = [
  {
    name: "2D/3N",
    image: img,
    title: "Garden of Dreams,Pushkar",
    rating: "4.61(1664 Reviews)",
    amount: "$ 120.80",
    discount: "$ 102.67",
  },
  {
    name: "2D/3N",
    image: img1,
    title: "Garden of Dreams,Pushkar",
    rating: "4.61(1664 Reviews)",
    amount: "$ 120.80",
    discount: "$ 102.67",
  },
  {
    name: "2D/3N",
    image: img2,
    title: "Garden of Dreams,Pushkar",
    rating: "4.61(1664 Reviews)",
    amount: "$ 120.80",
    discount: "$ 102.67",
  },
  {
    name: "2D/3N",
    image: img3,
    title: "Garden of Dreams,Pushkar",
    rating: "4.61(1664 Reviews)",
    amount: "$ 120.80",
    discount: "$ 102.67",
  },
  {
    name: "2D/3N",
    image: img3,
    title: "Garden of Dreams,Pushkar ",
    rating: "4.61(1664 Reviews)",
    amount: "$ 120.80",
    discount: "$ 102.67",
  },
];

const SlideShow = () => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative container mx-auto text-center mt-10">
      <div className="flex flex-col justify-center items-center mb-4">
        <h1 className="text-black font-bold text-2xl pb-3">
          Top Rated Experiences On <br />
          Thrillophilia
        </h1>
        <a className="border-2 border-b-[red] border-[white] w-11"></a>
      </div>

      <Slider ref={slider} {...settings}>
        {data.map((values, index) => (
          <div className="mx-1" key={index}>
            <PopularDestinationCard {...values} />
          </div>
        ))}
      </Slider>

      <ArrowNext
        Handler={() => {
          slider?.current?.slickNext();
        }}
      />
      <ArrowPrev
        Handler={() => {
          slider?.current?.slickPrev();
        }}
      />
    </div>
  );
};

const PopularDestinationCard = (props) => {
  return (
    <div>
      <div className="flex flex-col  items-center">
        <div className="relative container mx-auto text-center xl:ml-11 w-[222px] h-auto">
          <Image src={props.image} alt="" width={400} height={400} className="w-[222px] h-[301px]" />
          <div className="absolute bottom-2 left-[5rem] space-y-2 text-center">
            <p className="text-white font-bold">{props.name}</p>
          </div>
        </div>
        <div className="w-[222px] ">
          <p className="pb-1">{props.title}</p>
          <p className="flex pb-1 gap-1 text-[#696969] text-[12px]">
            <AiFillStar size={20} className="text-[yellow] " />
            <span>{props.rating}</span>
          </p>
          <p className="line-through text-[#696969] pr-[8rem] text-[12px]">
            {props.amount}
          </p>
          <p className="text-md text-black pr-[8rem]">{props.discount}</p>
        </div>
      </div>
    </div>
  );
};

const ArrowNext = (props) => {
  return (
    <div
      onClick={props.Handler}
      className="cursor-pointer absolute inset-y-1/2 xl:bg-white right-4 w-14 h-14 bg-brnd-dark-blue rounded-full flex justify-center items-center "
    >
      <AiOutlineArrowRight className=" " />
    </div>
  );
};

const ArrowPrev = (props) => {
  return (
    <div
      onClick={props.Handler}
      className="cursor-pointer w-14 h-14 absolute inset-1/2 xl:bg-white left-4 rounded-full flex justify-center items-center  "
    >
      <AiOutlineArrowLeft className=""  />
    </div>
  );
};

export default SlideShow;
