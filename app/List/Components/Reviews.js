'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = [
    {
      name: "Prakash Chandrasekaran",
      content:
      "We visited Singapore and Malaysia from Bangalore. It was fun and exciting knowing their culture. We also visited many tourist attractions. Looking forward for more.",
       date: "15 days ago",
    },
    {
      name: "Prakash Chandrasekaran",
      content:
        "I booked a cruise tour to Singapore. I went there with my friends to experience something exceptional for our vacation. We had very few days in our hands to strategize our trip and to maximise the trip in best way possible.",
      date: "15 days ago",
    },
    {
      name: "Prakash Chandrasekaran",
      content:
        "I am from Chennai..kindly open a branch good products.the products been really good.  Love this Product.",
      date: "15 days ago",
    },
    {
      name: "Santhosh Kumar",
      content:
        "I am from Chennai..kindly open a branch good products.the products been really good.  Love this Product.",
      date: "15 days ago",
    },
    {
      name: "Santhosh Kumar",
      content:
        "I am from Chennai..kindly open a branch good products.the products been really good.  Love this Product.",
      date: "15 days ago",
    },
  ];

const Reviews = () => {

    var settings = {
        dots: false,
        infinite: true,
    
        speed: 500,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
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
    <>
     <div>
        <p className='text-lg md:text-xl font-bold px-5 mt-10 my-5'>Singapore Tours Reviews</p>
     </div>
     <div className="">
        <Slider {...settings}>
          {Review.map((item, index) => {
            return (
              <>
                <div key={index} className="rounded-lg   my-10 md:px-10 md:mr-8 py-16 relative bg-[#FFFFFF]   flex justify-center items-center flex-col">
                  <img
                    src="/assets/svg/reviewer.svg"
                    className="absolute  -top-8 h-20"
                    alt=""
                  />
                  {/* <img
                    src="/assets/images\googlelogo.png"
                    className="absolute left-3 top-3 h-10"
                    alt=""
                  /> */}

                  <p className="text-center text-sm font-semibold">{item.name}</p>
                  <p className='text-sm text-orange-500 font-semibold'>Universal Studios Singapore Tickets</p>
                  <p className="text-center text-xs font-medium mt-5">{item.content}</p>
                  <div className="text-center absolute right-5  text-xs top-5 ">
                    Excellent
                    <div className='flex gap-1 mt-1'>
                        <img src="/assets/svg/rating.svg" alt="" />
                        <img src="/assets/svg/rating.svg" alt="" />
                         <img src="/assets/svg/rating.svg" alt="" />
                         <img src="/assets/svg/rating.svg" alt="" />
                         <img src="/assets/svg/rating.svg" alt="" />
                    </div>
                  </div>
                  <div className='flex mt-5 md:space-x-4'>
                    <img src="/assets/images/reviewphoto.png" alt="" />
                    <img src="/assets/images/reviewphoto.png" alt="" />
                    <img src="/assets/images/reviewphoto.png" alt="" />
                    <img src="/assets/images/reviewphoto.png" alt="" />

                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  )
}

export default Reviews