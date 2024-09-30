import React from "react";
import {  BiPhone } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

import { FiFacebook } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";



import {  IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="md:h-[300px] h-full  flex flex-col mt-12 ">
      <div className=" h-[85%]  grid grid-cols-1 md:grid-cols-2 px-[5%] gap-6 md:gap-0">
        <div className=" flex flex-col gap-6">
          <img src="images/logo.png" class="h-12 w-12  border " alt="" />

          <div class="text-sm text-secondary flex flex-col gap-4 ">
            <p className="flex gap-2 items-center">
              {" "}
              <span>
                <BiPhone size={20} color="#00993a" />
              </span>
              07075285916
            </p>
            <p className="flex gap-2  items-center">
              {" "}
              <span>
                <HiOutlineOfficeBuilding size={20} color="#00993a" />
              </span>
              83, Ogudu Road opp Labule restaurant, Lagos, Nigeria.
            </p>
          </div>

          <div class="flex gap-8">
            <a href="/" target="_blank">
              <FiFacebook size={20} color="#00993a" />
            </a>

            <a href="/" target="_blank">
              <IoLogoInstagram size={20} color="#00993a" />
            </a>

            <a href="/" target="_blank">
              <BsTwitterX size={20} color="#00993a" />
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-4 md:p-[5%] p-0 md:items-end items-start">
          <div class="flex flex-col gap-4 text-sm">
            <Link
              to="/"
              className="py-2 pr-4 text-secondary hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              Sluri.com
            </Link>
            <Link
              to="/about"
              className="py-2 pr-4 text-secondary hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              About
            </Link>
            <Link
              to="/"
              className="py-2 pr-4 text-secondary hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              Term & Conditions
            </Link>
            <Link
              to="/"
              className="py-2 pr-4 text-secondary hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="py-2 pr-4 text-secondary hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className=" px-[5%] flex md:flex-nowrap flex-wrap mt-4 h-full md:justify-between justify-center text-xs items-center gap-2 bg-primary">
        <p className="text-secondary  ">
          Copyright © <span>{new Date().getFullYear()} </span>
          Sluri Herbals, All Rights Reserved
        </p>

        <p class="font-thin text-secondary  flex gap-4">
          18+ Enjoy responsibly
          <Link to={"/"} className="text-black">
            www.sluri.com
          </Link>
        </p>
      </div>
    </div>

    // <div class="md:h-[400px] h-full border  ">
    //   <div class="grid md:grid-cols-2 grid-cols-1 md:h-[450px] h-full p-[5%] mb-4 md:gap-0 gap-8">
    //     <div class="flex flex-col gap-8">
    //       <img src="images/logo.png" class="h-20 w-20 items-start " alt="" />
    //       <div class="text-sm text-secondary">
    //         Sluri herbal non-alcoholic drink is guaranteed to nourish and boost
    //         your general wellness. Sluri herbal drink has a unique sweet taste
    //         and is a perfect mixer for your alcohol, milk drinks, smoothies,
    //         fruit drinks, and so much more. Ditch Soda and embrace healthy life
    //         with SLURI
    //       </div>
    //       <div class="flex gap-8">
    //         <a href="/" target="_blank">
    //           <IoLogoFacebook size={20} color="#00993a" />
    //         </a>
    //         <a href="/" target="_blank">
    //           <IoLogoInstagram size={20} color="#00993a" />
    //         </a>
    //         <a href="/" target="_blank">
    //           {" "}
    //           <BsTwitterX size={20} color="#00993a" />
    //         </a>
    //       </div>
    //     </div>
    //     <div class="flex flex-col gap-4 md:p-[5%] p-0 m">
    //       <h1 class="font-bold text-primary">Sluri.com</h1>
    //       <div class="flex flex-col gap-4 text-sm">
    //         <Link
    //           to="/about"
    //           className="py-2 pr-4 text-gray-700 hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
    //         >
    //           About
    //         </Link>
    //         <Link
    //           to="/"
    //           className="py-2 pr-4 text-gray-700 hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
    //         >
    //           Term & Conditions
    //         </Link>
    //         <Link
    //           to="/"
    //           className="py-2 pr-4 text-gray-700 hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
    //         >
    //           Privacy Policy
    //         </Link>
    //         <Link
    //           to="/"
    //           className="py-2 pr-4 text-gray-700 hover:text-primary md:p-0 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
    //         >
    //           Contact Us
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="bg-primary md:gap-0 gap-4 flex md:flex-nowrap flex-wrap px-[5%] md:justify-between justify-center items-center  text-white text-sm py-2 md:h-[50px] h-full">
    //     <p>
    //       Copyright ©<span id="year"></span>
    //       Sluri Herbals, All Rights Reserved
    //     </p>

    //     <p class="font-thin">
    //       18+ Enjoy responsibly
    //       <span class="text-black">www.sluri.com</span>
    //     </p>
    //   </div>
    // </div>
  );
}
