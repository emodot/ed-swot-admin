import React from 'react'
import HeroBg from "assets/images/hero-bg.png";

const NewCourseAlert = ({ closeAlert }) => {
  return (
    <div
      className="relative w-full border border-brand_primary text-white p-6 rounded-[20px] flex justify-between items-start mb-6"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <p className="text-12 uppercase font-aileron_r text-white mb-2">
          New Course Alert
        </p>
        <h3 className="text-[24px] font-aileron_sb text-white">
          Learn No-Code Website Building 🚀 ✨
        </h3>
        <p className="text-14 font-aileron_r text-white mb-6">
          Create Stunning Websites Without Writing a Single Line of Code
        </p>
        <button className="bg-white text-black px-4 py-2 rounded-md text-14 font-aileron_r flex items-center gap-2">
          Join Now{" "}
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 6C0 6.3797 0.335786 6.6875 0.75 6.6875L11.3879 6.6875L7.23017 10.3169C6.93159 10.5801 6.92228 11.0153 7.20938 11.289C7.49647 11.5627 7.97125 11.5712 8.26983 11.3081L13.7698 6.49557C13.9169 6.36595 14 6.18701 14 6C14 5.81299 13.9169 5.63405 13.7698 5.50443L8.26983 0.691928C7.97125 0.428757 7.49647 0.437291 7.20938 0.710988C6.92228 0.984685 6.93159 1.4199 7.23017 1.68307L11.3879 5.3125L0.75 5.3125C0.335786 5.3125 0 5.6203 0 6Z"
              fill="#2E2B07"
            />
          </svg>
        </button>
      </div>
      <div className="hidden md:block">
        <svg
          onClick={closeAlert}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9 7.18173L15.8051 0.376577C16.3073 -0.125526 17.1213 -0.125526 17.6234 0.376577C18.1255 0.87868 18.1255 1.69275 17.6234 2.19485L10.8183 9L17.6234 15.8051C18.1255 16.3073 18.1255 17.1213 17.6234 17.6234C17.1213 18.1255 16.3073 18.1255 15.8051 17.6234L9 10.8183L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default NewCourseAlert