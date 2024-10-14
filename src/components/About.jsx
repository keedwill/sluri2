import React, { useEffect } from "react";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex-col flex ">
      <div
        id="circular"
        className="clip-path-circle overflow-x-clip bg-gradient-to-br from-primary to-[#91bea4] h-[200px] text-secondary md:text-[60px] text-[40px] pl-[5%] items-center md:justify-normal justify-center flex font-bold"
      >
        ABOUT SLURI
      </div>
      <div className="m-[5%]  grid  gap-12 md:gap-0  grid-cols-1 text-secondary">
        <div className="flex flex-col gap-4">
          <h5 id="circular" className="text-[40px] leading-[40px]">
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
            <div className="">
              <p
                id="circular"
                className="text-[50px] leading-[50px] text-center my-6  "
              >
                {" "}
                Discover the Power of Sluri
              </p>
            </div>
            <div className=" w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center  ">
              <div className=" shadow-2xl  shadow-primary  flex text-sm justify-center skew-y-3   hover:scale-105 transition-transform duration-300 ease-in-out   items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px] h-[200px]">
                <span>Enhanced Libido and Sexual Desire</span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm justify-center drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out    items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>Ease bowel movements and support digestive health.</span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm -skew-x-3 justify-center drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out    items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px] h-[200px]">
                <span>
                  {" "}
                  Enjoy a comfortable and pleasurable intimate experience.
                </span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm skew-y-3 justify-center drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out    items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>
                  Flush out toxins and impurities from your body, promoting
                  optimal health.
                </span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm justify-center drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out    items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>
                  {" "}
                  Experience a surge in sexual desire and heightened arousal.
                </span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm -skew-x-3 justify-center drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out    items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>
                  {" "}
                  Help regulate blood sugar levels and support overall metabolic
                  health.
                </span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm justify-center skew-y-3 drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out   items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>
                  {" "}
                  Protect your cells from damage and boost your immune system.
                </span>
              </div>

              <div className="shadow-2xl  shadow-primary  flex text-sm justify-center drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out    items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>
                  {" "}
                  Promote hormonal equilibrium and support reproductive health.
                </span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm -skew-x-3 justify-center drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out    items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>
                  {" "}
                  Sulri's delightful sweet taste makes it a perfect addition to
                  your favorite beverages.
                </span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm justify-center skew-y-3 drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out   items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>
                  {" "}
                  Enjoy it with alcohol, milk, smoothies, fruit drinks, or
                  simply on its own.
                </span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm justify-center drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out    items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>
                  {" "}
                  Ditch artificial sodas and embrace a healthier lifestyle with
                  Sulri.
                </span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm -skew-x-3 justify-center drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out    items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>
                  {" "}
                  Indulge in the natural goodness of Sulri and discover a world
                  of health benefits.
                </span>
              </div>
              <div className="shadow-2xl  shadow-primary  flex text-sm justify-center skew-y-3 drop-shadow-lg  hover:scale-105 transition-transform duration-300 ease-in-out   items-center text-center p-2  border-2 border-primary rounded-3xl w-[100%] md:w-[200px]  h-[200px]">
                <span>
                  {" "}
                  Join us on a journey towards a healthier, happier you.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
        
          <iframe
            width={"100%"}
            height={"600px"}
            className="   p-0"
            src="https://player.vimeo.com/video/1012319592?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          
            title="VID-20240906-WA0076"
          ></iframe>
        
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div> */}
      </div>
    </div>
  );
};

export default About;
