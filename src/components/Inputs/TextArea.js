import React from 'react';

export default function TextArea({ id, name, placeholder, variant, label, value, onChange, readOnly, rows, maxLength, disabled, className }) {
    return (
      <div className="mb-[1rem]">
        {label && (
          <label
            htmlFor={id}
            className={`
            ${disabled ? "bg-none" : "bg-white"}
            mb-2 text-brand_secondary font-aileron_sb text-14 pt-2 cursor-text ${variant}`}
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          name={name}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder || ""}
          data-testid={`test-${id}`}
          aria-labelledby={id}
          readOnly={readOnly}
          value={value}
          className={`${variant} 
            border-neutral_stroke_1 px-4 py-4 mt-2 text-brand_secondary text-[16px] sm:text-14 w-full outline-0 border font-aileron_r hide_tap
            rounded-[10px] focus:outline-none focus:ring-2 focus:ring-brand_primary
            ${
              disabled
                ? "bg-neutral_disabled border-neutral_stroke_2"
                : "bg-white"
            } 
            placeholder:text-14 ${className}`}
        />
      </div>
    );
}
