'use client'
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { GoGift } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import { SlMenu } from "react-icons/sl";

// import img from "../assest/thrillo-logo.png";
import { RiCloseLine } from "react-icons/ri";
// import Hero from "./Hero";
// import Card from "./Card";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebarAndNavigate = () => {
    setSidebarOpen(false);
    window.location.href = "/next-page";
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="">
        <div
          className={`sticky top-0 left-0 w-full p-3 ${
            isSticky ? "bg-white text-white " : "text-white "
          } transition-all z-50`}
        >
          <div className="mx-[1rem] xl:mx-[14rem] lg:mx-[8rem] md:mx-[1.5rem] sm:mx-[1rem]">
            <div className="container flex items-center justify-between border-b-2 border-white my-0 mx-auto py-5">
              <div className="flex items-center gap-5">
                {/* desktop navbar */} 
                <div className="hidden xl:block lg:block md:block  text-2xl font-bold">
                  <img
                    src="https://triumphholidays.com/wp-content/uploads/2021/08/Triumph-Logo.png"
                    className="w-[175px] h-[35px]"
                    alt="#"
                  />
                </div>
                {/* menubar */}
                <h1 className="sm:block lg:hidden xl:hidden md:hidden">
                  <SlMenu
                    onClick={toggleSidebar}
                    className="cursor-pointer text-black"
                  />
                </h1>
                {/* searchbar */}
                <div className="flex items-center gap-3">
                  <span className="hidden text-black xl:block lg:block md:block">
                    <FiSearch />
                  </span>
                  <input
                    className="hidden xl:block bg-[#f6f8fb] xl:w-[19rem] lg:w-15rem h-[2.5rem] pl-3 rounded-full lg:block md:block"
                    type="text"
                    placeholder="Search Destination, Tours, Activities"
                  />
                </div>
              </div>
              {/* navbar logo and content */}

              <div className="sm:block lg:hidden xl:hidden md:hidden text-2xl text-white font-bold flex justify-center items-center ">
                
                <img
                  src="https://triumphholidays.com/wp-content/uploads/2021/08/Triumph-Logo.png"
                  className="w-[175px] h-[35px] "
                  alt="#"
                />
                
              </div>

              <div className="flex items-center justify-center gap-5 text-white font-semibold">
                
                
                <p className="hidden xl:block lg:block text-black md:block">
                  List
                </p>
                <span className="sm:block lg:hidden xl:hidden md:hidden text-black">
                  <FiSearch />
                </span>
              </div>
            </div>

            {/* Sidebar */}
            <div
              className={`fixed left-0 top-0 h-full w-60 text-black bg-white z-10 transition-transform transform ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Close button */}
              <h1 className="absolute top-5 left-5 text-md">Home</h1>
              <button
                className="absolute top-6 right-4 text-black"
                onClick={closeSidebarAndNavigate}
              >
                <RiCloseLine />
              </button>

              {/* Sidebar content */}
              <div className="absolute top-[4.5rem] left-5 text-md ">
                <h1>
                  Gift An Experience{" "}
                  <span className="text-[10px] text-white p-1 bg-[red]">
                    NEW
                  </span>
                </h1>
              </div>
              <div className="absolute top-[7rem] left-5 text-md">
                <h1>Log in</h1>
              </div>
              <div className="absolute top-[9.5rem] left-5 text-md">
                <h1>Help</h1>
              </div>
            </div>
          </div>
        </div>
        {/* <Hero /> */}
      </div>
    </div>
  );
};

export default Navbar;
