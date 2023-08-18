'use client';
import React, {useRef} from 'react'
import Slider from 'react-slick';




const RecentBrowse = () => {

    const slider = useRef(null)

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 8000,
        cssEase: "linear",
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
     <section>
     
        <p className='text-xl font-semibold'>You Recently Browsed:</p>

           
          <ArrowNext Handler={() => { slider?.current?.slickNext() }} />
          <ArrowPrev Handler={() => { slider?.current?.slickPrev() }} />
     </section>
    
    </>
  )
}

export default RecentBrowse




const ArrowNext = (props) => {
    return (
      <>
        <div onClick={props.Handler} className='cursor-pointer absolute inset-y-1/2  -right-4 w-8 h-8 bg-brnd-dark-blue rounded-full flex justify-center items-center'>
          <img src="assets/svg/right-arrow.svg" alt="arrow" />
  
        </div>
      </>
    )
  }
  
  const ArrowPrev = (props) => {
    return (
      <>
        <div onClick={props.Handler} className='cursor-pointer absolute inset-y-1/2  -left-4 w-8 h-8 bg-brnd-dark-blue rounded-full flex justify-center items-center'>
          <img src="assets/svg/left-arrow.svg" alt="arrow" />
        </div>
      </>
    )
  }