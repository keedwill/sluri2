import React from "react";

export default function WhyChooseHerbal() {
  return (
    <div class="grid md:grid-cols-2 grid-cols-1 h-full my-12 space-y-4 md:space-y-0  mx-[5%]">
      <div class=" text-secondary  flex flex-col gap-6 justify-center items-center md:items-start">
        <h1 class="font-bold md:text-3xl text-2xl text-primary">
          Why Choose Herbal Medicine?{" "}
        </h1>

        <div class="text-sm md:text-left text-center">
          In Africa, herbal medicine is a key part of culture and health care.
          It uses plants and herbs that have been known for hundreds of years to
          help with health problems. Studies, including those recognized by the
          World Health Organization (WHO), show that these natural remedies can
          really work. Choosing herbal medicine means using nature's own
          treatments, proven over time to be effective and safe for many health
          issues.
        </div>
      </div>
      <div
        style={{ backgroundImage: "url('images/model.png')" }}
        class="md:h-[500px] h-[400px] bg-contain bg-no-repeat bg-center "
      ></div>
    </div>
  );
}
