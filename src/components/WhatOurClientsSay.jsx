import React from 'react'
import Reveal from './Reveal';
import Star from './Star';

const WhatOurClientsSay = () => {
  return (
    <div className="my-[5%] flex flex-col  h-full p-[5%] bg-primary">
      <div className="flex justify-center items-center mb-4">
        <Reveal width="fit-content">
          <h1 className="md:text-3xl text-2xl text-secondary font-bold text-center   py-2   ">
            WHAT OUR CLIENTS SAY
          </h1>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-4">
        <div className="flex flex-col gap-4">
          <Reveal width="100%">
            <div className="flex gap-2  justify-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </Reveal>
          <Reveal width="100%">
            <div className="text-lg text-black  p-4 italic bg-white h-[260px]">
              &quot; I have been getting laser hair removal at this facility for
              years, and I frequently visit for touch-ups. Every staff is warm,
              hospitable, and kind. Every time I have an appointment, I do not
              even mind travelling fifty minutes. I am grateful to Celeb Beauty
              Clinic for genuinely altering my life! &quot;
            </div>
          </Reveal>
          <Reveal width="fit-content">
            <h1 className="text-center text- text-secondary ">
              Aderonke Bimpe
            </h1>
          </Reveal>
        </div>
        <div className="flex flex-col gap-4">
          <Reveal width="100%">
            <div className="flex gap-2  justify-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </Reveal>
          <Reveal width="100%">
            <div className="text-lg text-black  p-4 italic  bg-white h-[260px]">
              &quot; I have so much to say about this place. All of the staff
              are really helpful and kind. Everyone who works here has a
              constant smile on their face and exudes happiness. If you schedule
              a service here on a poor day, you will undoubtedly leave smiling
              because of the lively and enjoyable atmosphere! &quot;
            </div>
          </Reveal>
          <Reveal width="fit-content">
            <h1 className="text-center text-lg text-secondary ">
              James Harden
            </h1>
          </Reveal>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Reveal width="100%">
            <div className="flex gap-2  justify-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </Reveal>
          <Reveal width="100%">
            <div className="text-lg text-black  p-4 italic bg-white h-[260px]">
              &quot; I was really taken by this spa&acute;s atmosphere. Everyone
              was really kind, kind, and professional. I like how their cheerful
              and pleasant personnel made you feel more at ease throughout
              sessions. I would without a doubt suggest this spa to friends and
              relatives. &quot;
            </div>
          </Reveal>
          <Reveal width="fit-content">
            <h1 className="text-center text-lg backdrop-blur-md text-secondary">
              Campbell Jones
            </h1>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default WhatOurClientsSay