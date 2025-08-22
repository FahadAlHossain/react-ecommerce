import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import DarkMode from "./DarkMode";
import { motion, AnimatePresence } from "framer-motion";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropDownLinks = [
  { id: 1, name: "Trending Products", link: "#" },
  { id: 2, name: "Best Selling", link: "#" },
  { id: 3, name: "Top Rated", link: "#" },
];

const Navbar = ({ handlePopUp }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Top bar */}
      <div className="bg-orange-300/40 py-2">
        <div className="container flex justify-between mx-auto items-center px-4">
          {/* Logo */}
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img className="w-10" src={Logo} alt="" /> Shopsy
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Search (hidden on small) */}
            <div className="relative group hidden sm:block">
              <input
                className="bg-white w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-orange-400 dark:border-gray-500 dark:bg-gray-800"
                type="text"
                placeholder="Search"
              />
              <IoSearchOutline className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Cart Button */}
            <button
              onClick={handlePopUp}
              className="bg-gradient-to-r from-orange-300 to-orange-400 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <IoCartOutline className="text-white text-xl drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode */}
            <DarkMode />

            {/* Hamburger (mobile only) */}
            <div className="sm:hidden">
              {menuOpen ? (
                <IoClose
                  className="text-3xl cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                />
              ) : (
                <IoMenu
                  className="text-3xl cursor-pointer"
                  onClick={() => setMenuOpen(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div data-aos="zoom-in" className="justify-center hidden sm:flex">
        <ul className="flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                className="inline-block px-4 hover:text-orange-300 duration-200"
                href={data.link}
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a className="flex items-center gap-[2px] py-2" href="#">
              Trending Items
              <span className="transition-all duration-200 group-hover:rotate-180">
                <IoMdArrowDropdown />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      className="inline-block w-full rounded-md p-2 hover:bg-orange-300/20"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="sm:hidden fixed top-0 left-0 w-3/4 h-full bg-white dark:bg-gray-900 shadow-lg z-50 px-6 py-8"
          >
            <ul className="flex flex-col gap-4 mt-8">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    className="block py-2 border-b border-gray-200 dark:border-gray-700 hover:text-orange-300 duration-200"
                    href={data.link}
                    onClick={() => setMenuOpen(false)}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* Dropdown inside mobile */}
              <li>
                <details className="cursor-pointer">
                  <summary className="flex items-center gap-1 py-2">
                    Trending Items <IoMdArrowDropdown />
                  </summary>
                  <ul className="pl-4">
                    {DropDownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          className="block py-1 hover:text-orange-300 duration-200"
                          href={data.link}
                          onClick={() => setMenuOpen(false)}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
