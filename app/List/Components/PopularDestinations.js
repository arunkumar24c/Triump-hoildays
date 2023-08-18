'use client';
import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Malaysia",
    package: "224 Malaysia tour packages",
  },
  {
    name: "Malaysia",
    package: "224 Malaysia tour packages",
  },
  {
    name: "Malaysia",
    package: "224 Malaysia tour packages",
  },
  {
    name: "Malaysia",
    package: "224 Malaysia tour packages",
  },
  {
    name: "Malaysia",
    package: "224 Malaysia tour packages",
  },
]
const PopularDestinations = () => {

  const slider = useRef(null)

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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='relative mt-10   '>
        <p className='py-5 md:ml-5 text-xl font-bold'>Popular Related Destinations</p>
        <Slider ref={slider} {...settings}>
          {data.map((values, index) => {
            return <div key={index} className='md:space-x-10 md:ml-5'><PopularDestinationCard key={index} {...values} /></div>
          })}
        </Slider>

        <ArrowNext Handler={() => { slider?.current?.slickNext() }} />
        <ArrowPrev Handler={() => { slider?.current?.slickPrev() }} />
      </div>
    </>
  )
}

export default PopularDestinations


const PopularDestinationCard = (props) => {
  return (
    <>
      <div className='relative '>
        <img src="/assets/images/places.avif" className='max-md:w-full' alt="" />
        <div className='absolute max-md:inset-1/3 md:top-10 left-20 md:left-10 space-y-2 text-center '>
          <p className='text-white font-bold'>{props.name}</p>
          <p className='bg-white py-[10px] px-3 rounded-full text-xs'>{props.package}</p>
        </div>
      </div>
    </>
  )
}

const ArrowNext = (props) => {
  return (
    <>
      <div onClick={props.Handler} className='cursor-pointer  absolute inset-y-1/2 bg-red-500 -right-4 w-14 h-14  bg-brnd-dark-blue rounded-full flex justify-center items-center'>
        <img src="/assets/svg/right-arrow.svg" className='h-5' alt="arrow" />

      </div>
    </>
  )
}

const ArrowPrev = (props) => {
  return (
    <>
      <div onClick={props.Handler} className='cursor-pointer w-14 h-14 absolute inset-1/2 bg-red-500 -left-4  rounded-full flex justify-center items-center'>
        <img src="/assets/svg/left-arrow.svg" className='h-5' alt="arrow" />
      </div>
    </>
  )
}