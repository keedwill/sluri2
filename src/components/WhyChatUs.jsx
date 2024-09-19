import React from "react";

export default function WhyChatUs() {
  return (
    <div
      style={{ backgroundImage: "url('images/chatbackground.jpg')" }}
      class="h-[600px] w-[100%] bg-contain flex justify-center items-center"
    >
      <div class="text-center md:w-[30%] w-[70%] flex flex-col gap-6 justify-center items-center bg-white bg-opacity-50 backdrop-blur-sm rounded-xl p-4">
        <p class="text-3xl md:w-[55%] w-[70%] text-primary font-bold">
          Need Help? Chat With Us Today!
        </p>
        <p class="text-sm">
          If you're experiencing any issues or have questions, we're here to
          help. Our team is just a chat away, ready to provide the support you
          need, whenever you need it. Thank you for choosing us!
        </p>
        <button class="bg-primary text-sm text-white font-bold px-4 py-2 md:w-[40%] w-[60%]">
          CHAT WITH US
        </button>
      </div>
    </div>
  );
}