import React from "react";

const ToggleSwitch = ({ isOn, onToggle, id, disabled = false }) => {
  return (
    <label
      htmlFor={id}
      className={`relative inline-flex items-center ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      <input
        type="checkbox"
        id={id}
        checked={isOn}
        onChange={onToggle}
        disabled={disabled}
        className="sr-only"
      />
      <div
        className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
          isOn ? "bg-green" : "bg-neutral_stroke_2"
        }`}
      >
        <div
          className={`absolute top-[2px] left-[2px] bg-white border border-neutral_stroke_2 rounded-full h-5 w-5 transition-transform duration-200 ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;

