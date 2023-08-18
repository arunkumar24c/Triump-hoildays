import React from 'react'

const data =[
  "Instant Booking", "Thrillophilia Guarantee"
]

const Categories = [
 "Tours", "Cruises & Boat tours", " Multi Day Tours",
]

const duration = [
  " 0-2 Hours"," 2-5 Hours", " Full Day", " Multi Day"
]
const Filter = () => {
  return (
    <>
      <div className='bg-white px-4 rounded-lg py-5'>
       <div className='flex justify-between pb-5 '>
        <p>Filter</p>
        <button className='bg-orange-400 rounded-lg text-white px-3 text-sm'>Reset</button>
       </div>
       <hr className='pb-5 px-0' />
       {data.map((values)=>{
        return  <div className='flex items-center mt-4  text-xs gap-3 px-5'>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">{values}</label>
       </div>
       })}
         <p className='font-semibold pb-3  pt-5'>Designations</p>
         <hr className='' />
         <div className='flex items-center pt-5 text-xs gap-3 px-5'>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Singapore</label>
       </div>

       <p className='font-semibold pb-3 pt-5'>Categories</p>
       <hr className='' />
       {Categories.map((values)=>{
        return  <div className='flex items-center mt-4  text-xs gap-3 px-5'>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">{values}</label>
       </div>
       })}

<p className='font-semibold pb-3  pt-5'>Duration</p>
<hr className='' />
       {duration.map((values)=>{
        return  <div className='flex items-center mt-4  text-xs gap-3 px-5'>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">{values}</label>
       </div>
       })}
      </div>
    </>
  )
}

export default Filter