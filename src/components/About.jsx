import React, { useEffect } from 'react'
import { IoArrowForward } from "react-icons/io5";

const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className=" flex-col flex ">
      <div className="bg-gradient-to-br from-primary to-secondary2 h-[200px] text-secondary md:text-[54px] text-[40px] pl-[5%] items-center md:justify-normal justify-center flex font-bold">
        ABOUT SLURI
      </div>
      <div className="m-[5%]  grid md:grid-cols-2 gap-12 md:gap-0  grid-cols-1">
        <div className="flex flex-col gap-4">
          <h5 className="text-lg font-bold">
            {" "}
            Your Natural Wellness Boost, A Taste of Nature, A Boost for Your
            Health
          </h5>
          <div className="text-sm flex flex-col gap-6">
            <div>
              <p>
                {" "}
                Founded in 2023, Sluri is a proudly NAFDAC-approved brand
                dedicated to providing natural, non-alcoholic beverages that
                enhance your overall well-being.
              </p>
              <p>
                {" "}
                Our unique blend of 100% natural ingredients offers a refreshing
                and invigorating experience while delivering a host of health
                benefits.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold">
                {" "}
                Discover the Power of Sluri
              </h5>
            </div>
            <div className="pl-4">
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>Enhanced Libido and Sexual Desire</span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>Ease bowel movements and support digestive health.</span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  {" "}
                  Enjoy a comfortable and pleasurable intimate experience.
                </span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  Flush out toxins and impurities from your body, promoting
                  optimal health.
                </span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  {" "}
                  Experience a surge in sexual desire and heightened arousal.
                </span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  {" "}
                  Help regulate blood sugar levels and support overall metabolic
                  health.
                </span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  {" "}
                  Protect your cells from damage and boost your immune system.
                </span>
              </p>

              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  {" "}
                  Promote hormonal equilibrium and support reproductive health.
                </span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  {" "}
                  Sulri's delightful sweet taste makes it a perfect addition to
                  your favorite beverages.
                </span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  {" "}
                  Enjoy it with alcohol, milk, smoothies, fruit drinks, or
                  simply on its own.
                </span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  {" "}
                  Ditch artificial sodas and embrace a healthier lifestyle with
                  Sulri.
                </span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  {" "}
                  Indulge in the natural goodness of Sulri and discover a world
                  of health benefits.
                </span>
              </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <IoArrowForward />
                <span>
                  {" "}
                  Join us on a journey towards a healthier, happier you.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          {/* <div className='relative  pt-[100%] pb-0 pr-0 pl-0' > */}
            <iframe
            width={'100%'}
            height={'600px'}
            className='   p-0'
              src="https://player.vimeo.com/video/1012319592?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              // style="position:absolute;top:0;left:0;width:100%;height:100%;"
              title="VID-20240906-WA0076"
            ></iframe>
          {/* </div> */}
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
      
    </div>
  );
}

export default About