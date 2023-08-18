import React from "react";

const specification = [
  {
    img: "/assets/svg/spec1.svg",
    text: "Transport",
    text2: "Included",
  },
  {
    img: "/assets/svg/spec2.svg",
    text: "Meals",
    text2: "Included",
  },
  {
    img: "/assets/svg/spec3.svg",
    text: "Stay",
    text2: "Included",
  },
  {
    img: "/assets/svg/spec4.svg",
    text: "Sightseeing",
  },
];

const PackageCard = () => {
  return (
    <>
      <div className="bg-white flex max-lg:flex-col  justify-between ">
        <div >
          <img src="/assets/images/package1.png" className="max-lg:w-full max-lg:object-cover max-lg:h-60 lg:h-full"   alt="" />
        </div>
        <div className="py-3   xl:-ml-16  max-lg:px-3  space-y-5">
          <p>Singapore In a Nutshell</p>
          <div className="flex items-center gap-3">
            <img src="/assets/svg/timer.svg" alt="" />
            <p className="text-xs">5D/4N</p>
          </div>
          <p className="bg-orange-100 w-fit text-xs p-1">5D Singapore</p>
          <div className="flex justify-between md:gap-3 lg:gap-5 xl:gap-8">
            {specification.map((values) => {
              return (
                <div className="flex flex-col space-y-1 items-center">
                  <img src={values.img} alt="" />
                  <p className="text-orange-600 text-xs text-center">
                    {values.text} <br />
                    {values.text2}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-7 lg:border-l flex lg:flex-col max-lg:justify-between items-center max-md:flex-row  max-lg:items-end p-3">
            {/* Desktop  */}
          <div className="flex gap-2 max-lg:hidden">
            <div className="text-xs">
              <p>Superb</p>
              <p>246 Ratings</p>
            </div>
            <p className="bg-gradient-to-tr px-3 pt-1 rounded-md text-white text-center from-[#FF7102] to-[#FFB100]">
              4.9
            </p>
          </div>
             
          <div>
            <del className="text-slate-700">$ 892.23</del>
            <p className="font-bold">$ 686.33</p>
            <p className="text-slate-400 text-sm">per Adult</p>
          </div>

          {/* Mobile  */}
          <div className="flex items-center space-x-4  gap-2 md:hidden">
            <div className="text-xs space-y-2">
              <p>Superb</p>
              <p>246 Ratings</p>
            </div>
           <div className="space-y-2">
            <p className="bg-gradient-to-tr px-3 pt-1 rounded-md text-white text-center from-[#FF7102] to-[#FFB100]">
              4.9
            </p>
            <p className="text-xs">Superb</p>
            </div>
          </div>
          <button className="bg-gradient-to-tr from-[#FF7102] to-[#FFB100] text-sm rounded-lg text-white py-2 px-4 max-lg:hidden">Send Enquiry</button>
        </div>
        <button className="bg-gradient-to-tr from-[#FF7102] to-[#FFB100] text-sm rounded-sm text-white py-3 lg:hidden">Send Enquiry - Get 23% Off</button>
      </div>
    </>
  );
};

export default PackageCard;
