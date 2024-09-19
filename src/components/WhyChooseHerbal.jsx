import React from "react";

export default function WhyChooseHerbal() {
  return (
    <div class="grid md:grid-cols-2 grid-cols-1 h-full my-12">
      <div class="bg-[#91bea4] text-secondary p-[10%] flex flex-col gap-6">
        <h1 class="font-bold text-4xl">Why Choose Herbal Medicine? </h1>

        <div class="text-lg">
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
        style={{ backgroundImage: "url('images/model1.jpg')" }}
        class="h-[500px] bg-center"
      ></div>
    </div>
  );
}
