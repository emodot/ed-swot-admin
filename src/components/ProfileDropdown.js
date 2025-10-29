import { useState, useRef, useEffect } from "react";
import {
  FiUser,
  FiRefreshCw,
  FiSettings,
  FiLogOut,
  FiClock,
} from "react-icons/fi";
import UserImg from "assets/images/mocks/user-img.png";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>

      <div className="hidden md:flex items-center gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 9.00526V9.70979C18.75 10.5554 18.99 11.382 19.4419 12.0856L20.5499 13.8099C21.5609 15.385 20.7889 17.5257 19.03 18.023C14.4337 19.3257 9.5663 19.3257 4.97005 18.023C3.21106 17.5257 2.43907 15.385 3.45006 13.8099L4.55805 12.0856C5.01126 11.3762 5.25176 10.5517 5.25105 9.70979V9.00526C5.25105 5.13635 8.27303 2 12 2C15.727 2 18.75 5.13635 18.75 9.00526Z"
            fill="black"
          />
          <circle cx="16" cy="7" r="3" fill="#FF0A0A" />
          <mask id="path-3-inside-1_5408_12486" fill="white">
            <path d="M7 18C7.72778 20.3307 9.69111 22 12 22C14.3089 22 16.2722 20.3307 17 18" />
          </mask>
          <path
            d="M7.95454 17.7019C7.78993 17.1748 7.22911 16.8808 6.70193 17.0455C6.17475 17.2101 5.88084 17.7709 6.04546 18.2981L7 18L7.95454 17.7019ZM17.9545 18.2981C18.1192 17.7709 17.8252 17.2101 17.2981 17.0455C16.7709 16.8808 16.2101 17.1748 16.0455 17.7019L17 18L17.9545 18.2981ZM7 18L6.04546 18.2981C6.87852 20.9659 9.17489 23 12 23V22V21C10.2073 21 8.57703 19.6954 7.95454 17.7019L7 18ZM12 22V23C14.8251 23 17.1215 20.9659 17.9545 18.2981L17 18L16.0455 17.7019C15.423 19.6954 13.7927 21 12 21V22Z"
            fill="black"
            mask="url(#path-3-inside-1_5408_12486)"
          />
        </svg>

        <div className="">
          <p className="text-14 font-aileron_sb text-brand_secondary">
            Admin
          </p>
          <p className="text-14 font-aileron_r text-[#6D6D6D] leading-3">
            arianawils.on@gmail.com
          </p>
        </div>
        <img
          src={UserImg}
          alt="user"
          className="w-10 h-10 rounded-full border border-neutral_stroke_1"
          onClick={() => setOpen(!open)}
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.793 7.73271C16.0787 8.03263 16.0672 8.50737 15.7672 8.79306L10.5168 13.7944C10.2271 14.0703 9.77187 14.0703 9.4822 13.7944L4.23173 8.79306C3.93181 8.50737 3.92028 8.03263 4.20597 7.73271C4.49166 7.43279 4.96639 7.42125 5.26631 7.70694L9.99949 12.2155L14.7327 7.70694C15.0326 7.42125 15.5073 7.43279 15.793 7.73271Z"
            fill="#242424"
          />
        </svg>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-lg border border-neutral_stroke_2 p-4 z-50">
          <h3 className="font-albra_sans_sb text-16 mb-3">
            Hello, Ariana Wilson!
          </h3>

          <ul className="space-y-2 text-brand_secondary">
            <li className="flex items-center gap-3 py-2 hover:bg-neutral_disabled rounded-lg px-3 cursor-pointer">
              <FiUser className="text-18" />
              <span className="font-aileron_r text-14">My Account</span>
            </li>

            <li className="flex items-center justify-between py-2 hover:bg-neutral_disabled rounded-lg px-3 cursor-pointer">
              <div className="flex items-center gap-3">
                <FiRefreshCw className="text-18" />
                <span className="font-aileron_r text-14">Switch User</span>
              </div>
              <span className="text-16">⌄</span>
            </li>

            <li className="flex items-center gap-3 py-2 hover:bg-neutral_disabled rounded-lg px-3 cursor-pointer">
              <FiSettings className="text-18" />
              <span className="font-aileron_r text-14">Security Settings</span>
            </li>

            <li className="flex items-center gap-3 py-2 hover:bg-neutral_disabled rounded-lg px-3 cursor-pointer">
              <FiLogOut className="text-18" />
              <span className="font-aileron_r text-14">Log Out</span>
            </li>
          </ul>

          {/* Renewal Box */}
          <div className="mt-4 border border-success bg-success_fade text-success_900 rounded-lg py-2 px-4 flex items-center justify-center gap-2 font-aileron_sb text-14">
            <FiClock />
            30 Days Until Renewal
          </div>
        </div>
      )}
    </div>
  );
}
