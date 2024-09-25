import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoSlideSlider() {
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    if (sliderRef) {
      const intervalId = setInterval(() => {
        sliderRef.slickNext();
      }, 5000); // Adjust the interval as needed

      return () => clearInterval(intervalId);
    }
  }, [sliderRef]);

  const images = [
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg",
    "images/slider4.jpg",
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container    my-8  md:mx-[5%] mx-0">
      <Slider ref={setSliderRef} {...settings} >
        {images.map((image) => (
          <div className=" px-2">

            <img
              style={{}}
              className="  shadow-2xl  rounded-2xl border  object-center "
              key={image}
              src={image}
              alt=""
            />
          </div>
        ))}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default AutoSlideSlider;
