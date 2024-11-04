import React, { useEffect, useState } from "react";


export default function Contact() {
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSliding(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="w-[]  m-[5%] grid  md:grid-cols-2 grid-cols-1  gap-6 md:gap-0">
      <div className="relative md:h-[700px] h-[600px] ">
        <img
          alt=""
          src="images/twobottles.jpg"
          // className=" "
          className={`absolute top-0 left-0 transition-transform duration-500 ease-in-out bg-contain bg-no-repeat w-full h-full     ${
            isSliding
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        ></img>
      </div>
      <div className={` pl-0 md:pl-[10%] `}>
        <div className=" w-[100%] md:h-[100%] h-[500px]  flex flex-col gap-6">
          <h1 id="circular" className=" text-[40px] text-primary">
            GET IN TOUCH
          </h1>
          <form class="w-[100%] mx-auto flex flex-col justify-between h-[100%]">
            <div class="relative z-0 w-full group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block  py-2.5  w-full text-sm text-primary bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class=" peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div class="grid md:grid-cols-2  gap-6">
              <div class="relative z-0 w-full  group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-primary text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div class="relative z-0 w-full  group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full  group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
            </div>
            <div class="relative z-0 w-full  group">
              <textarea
                name="floating_comment"
                id="floating_comment"
                required
                placeholder=" "
                className="px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-gray-300 appearance-none block dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              ></textarea>

              <label
                for="floating_comment"
                class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Comment
              </label>
            </div>
            <button
              type="submit"
              class="text-white rounded-full bg-primary hover:text-primary shadow-md hover:bg-white  focus:ring-4 focus:outline-none focus:ring-primary font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
