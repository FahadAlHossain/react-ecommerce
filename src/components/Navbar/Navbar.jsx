import React from "react";
import Logo from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-orange-300/40 py-2">
        <div className="container flex justify-around items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img className="w-10" src={Logo} alt="" /> Shopsy
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="relative group hidden sm:block">
              <input
                className="bg-white w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
                type="text"
                placeholder="Search"
              />
              <IoSearchOutline className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-orange-300 to-orange-400 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <IoCartOutline className="text-white text-xl drop-shadow-sm cursor-pointer" />
            </button>

            <div>
                <DarkMode/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
