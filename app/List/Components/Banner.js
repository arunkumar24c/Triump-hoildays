import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='relative '>
        <img src="/assets/images/banner.avif" className='max-md:h-40 w-full' alt="" />
        <div className='top-1/3 left-5 md:left-20 absolute flex gap-5'>
          <p className='border border-orange-600'></p>
          <p className='text-xl md:text-4xl text-white font-bold '>Singapore Tour Packages : Grab <br /> Exciting Deals | Upto 50% Off</p>
        </div>

      </section>
    </>
  )
}

export default Banner