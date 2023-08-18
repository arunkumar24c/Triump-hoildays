import React from 'react'
import PackageCard from './PackageCard'

const Packages = () => {
  return (
   <>
    <section className='px-4 rounded-lg py-5'>
      <div className='space-y-5'>
           <PackageCard />
           <PackageCard />
           <PackageCard />
           <PackageCard />
           <PackageCard />
           <PackageCard />
           <PackageCard />
           </div>
    </section>
   </>
  )
}

export default Packages