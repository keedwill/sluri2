import React from "react";

export default function Footer() {
  return (
    <div class="md:h-[500px] h-full ">
      <div class="grid md:grid-cols-2 grid-cols-1 md:h-[450px] h-full p-[5%] mb-4 md:gap-0 gap-8">
        <div class="flex flex-col gap-8">
          <img
            src="images/logo.jpg"
            class="h-28 w-28 items-start border border-primary"
            alt=""
          />
          <div class="text-sm">
            Sluri herbal non-alcoholic drink is guaranteed to nourish and boost
            your general wellness. Sluri herbal drink has a unique sweet taste
            and is a perfect mixer for your alcohol, milk drinks, smoothies,
            fruit drinks, and so much more. Ditch Soda and embrace healthy life
            with SLURI
          </div>
          <div class="flex gap-8">
            <i class="fa-brands fa-facebook fa-2x"></i>
            <i class="fa-brands fa-x-twitter fa-2x"></i>
            <i class="fa-brands fa-instagram fa-2x"></i>
          </div>
        </div>
        <div class="flex flex-col gap-4 md:p-[5%] p-0 m">
          <h1 class="font-bold text-primary">Sluri.com</h1>
          <div class="flex flex-col gap-4 text-sm">
            <p>About us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>
      <div class="bg-[#91bea4] md:gap-0 gap-4 flex md:flex-nowrap flex-wrap px-[5%] md:justify-between justify-center items-center  text-white text-sm py-2 md:h-[50px] h-full">
        <p>
          Copyright ©<span id="year"></span>
          Sluri Herbals, All Rights Reserved
        </p>

        <p class="font-thin">
          18+ Enjoy responsibly
          <span class="text-black">www.sluri.com</span>
        </p>
      </div>
    </div>
  );
}
