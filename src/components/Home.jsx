import React from "react";
import Unveil from "./Unveil";
import No1Herbal from "./No1Herbal";
import WhyChooseHerbal from "./WhyChooseHerbal";
import WhyChatUs from "./WhyChatUs";
import AutoSlideSlider from "../utilities/Slider";
import Reveal from "./Reveal";

export default function Home() {
  return (
    <div>
      <Reveal>
        <Unveil />
      </Reveal>
      <Reveal>
        <No1Herbal />
      </Reveal>
      <Reveal>
        <WhyChooseHerbal />
      </Reveal>
      <Reveal>
        <AutoSlideSlider />
      </Reveal>
      <Reveal>
        {" "}
        <WhyChatUs />
      </Reveal>
    </div>
  );
}
