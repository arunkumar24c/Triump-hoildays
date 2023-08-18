import React from 'react'
import Banner from './Components/Banner'
import PopularPackages from './Components/PopularPackages'
import RecentBrowse from './Components/RecentBrowse'
import Filter from './Components/Filter'
import Packages from './Components/Packages'
import Faq from './Components/Faq'
import PopularDestinations from './Components/PopularDestinations'
import SeoTags from './Components/SeoTags'
import Reviews from './Components/Reviews'

const List = () => {
  return (
    <>
      <Banner />
      <div className='bg-blue-50 h-full md:px-20'>
        <div className='lg:px-10 py-10'>
          <PopularPackages />
          {/* <RecentBrowse /> */}
          <div className='flex gap-5'>
            <div className='w-3/12 max-lg:hidden'>  <Filter /></div>
            <div className='w-full lg:w-9/12'><Packages /></div>
          </div>
          <Faq />
          <PopularDestinations />
          <SeoTags />
          <Reviews />
        </div>

      </div>
    </>
  )
}

export default List

