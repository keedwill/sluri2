import React from "react";
import Unveil from "./Unveil";
import No1Herbal from "./No1Herbal";
import WhyChooseHerbal from "./WhyChooseHerbal";
import WhyChatUs from "./WhyChatUs";
import AutoSlideSlider from "../utilities/Slider";
import Reveal from "./Reveal";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import WhatOurClientsSay from "./WhatOurClientsSay";

const homeFaq = [
  {
    id: 1,
    question: "What are the key ingredients in Sluri?",
    answer: `Sluri is formulated with a proprietary blend of 100% natural ingredients. These ingredients have been traditionally used to support sexual health and overall well-being.`,
  },
  {
    id: 2,
    question: "Is Sluri safe to consume?",
    answer: ` Yes, Sluri is completely safe to consume. It is made with all-natural ingredients and does not contain any artificial additives or preservatives.`,
  },
  {
    id: 3,
    question: "Are there any side effects?",
    answer: ` Our drink is generally well-tolerated, and most people do not experience any side effects. However, if you are pregnant, breastfeeding, or have any underlying health conditions, consult with your healthcare provider before use`,
  },
  {
    id: 4,
    question: "Can I consume Sluri with other medications?",
    answer: ` While our drink is generally safe, it's always best to consult with your healthcare provider to avoid any potential interactions with other medications.`,
  },
  {
    id: 5,
    question: "How should I store Sluri?",
    answer: ` Store the drink in a cool, dry place, away from direct sunlight.`,
  },
  {
    id: 6,
    question: ` How can I contact customer support?`,
    answer: `  You can contact our customer support team by phone or email. Our team is available 24/7 to assist you.`,
  },
];
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
      <WhatOurClientsSay />
      <div className="my-[5%] p-[5%] flex flex-col gap-4">
        <div className="flex justify-center items-center mb-4">
          <Reveal width="fit-content">
            <h1 className="text-center md:text-4xl text-2xl text-primary pb-2 ">
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </Reveal>
        </div>
        <FrequentlyAskedQuestions data={homeFaq} />
      </div>
    </div>
  );
}
