'use client'
import React from 'react'

const setData = [
  "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore",
  "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore",
  "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore",
  "IFly Singapore", "IFly Singapore", "IFly Singapore values", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore", "IFly Singapore"

]

const SeoTags = () => {
  return (
    <>
      <div>
        <p className='text-lg md:text-xl font-bold my-5 max-md:px-5'>Popular Singapore Packages</p>
        <div className='flex flex-wrap space-y-2 rounded-md  space-x-5 max-md:mx-3 bg-white py-5'>
          {setData.map((values, index) => {
            return <p key={index} className='text-orange-500 hover:text-white hover:bg-orange-500 cursor-pointer font-semibold border  w-fit px-3 py-1 mt-2 ml-5 text-sm'>{values}</p>
          })}
        </div>
      </div>

    </>
  )
}

export default SeoTags