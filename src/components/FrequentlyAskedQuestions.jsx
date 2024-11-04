import React, { useState } from "react";

import Reveal from "./Reveal";
import { Accordion } from "flowbite-react";

const FrequentlyAskedQuestions = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setIsActive(!isActive);
    setActiveIndex(index);
  };

  return (
    <>
      {data.map((info, index) => (
        <Reveal width="100%" key={index}>
          <Accordion
            collapseAll
            className="p-4 border-primary   "
            onClick={() => handleItemClick(index)}
          >
            <Accordion.Panel className="">
              <Accordion.Title
                id="circular"
                className={`${
                  isActive & (index === activeIndex) ? "text-secondary" : ""
                } focus:ring-0 p-2 hover:text-secondary`}
              >
                {info?.question}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-secondary p-4 text-sm  ">
                  {info?.answer}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </Reveal>
      ))}
    </>
  );
};

export default FrequentlyAskedQuestions;
