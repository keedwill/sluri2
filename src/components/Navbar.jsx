import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <nav className="navbar  w-full  ">
      <div className=" flex flex-wrap justify-between items-center px-4  ">
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{ duration: 2 }}  href="/" className="">
          <img src="images/logo.png" className="h-20 " alt="Logo" />
        </motion.a>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          onClick={() => setShowNavBar(!showNavBar)}
        >
          <span className="sr-only">Open menu</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 stroke-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          className={`${
            showNavBar ? "  " : "hidden"
          } w-full md:block md:w-auto`}
        >
          <div className="w-full md:flex md:items-center md:justify-center ">
            <ul className="flex text-sm flex-col p-4 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="py-2 pr-4 text-secondary hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="py-2 pr-4 text-secondary hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="py-2 pr-4 text-secondary hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="py-2 pr-4 text-secondary hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
