import { useState } from "react";
import useInputValidate from "hooks/useInputValidate";
import { useMemo } from "react";

const PasswordInput = ({
  label,
  id,
  disabled,
  variant,
  name,
  placeholder,
  value,
  defaultValue,
  maxLength,
  onChange,
  readOnly,
  onKeyDown,
  showError,
  onBlur,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { error, validate } = useInputValidate(showError);

  const inputError = useMemo(() => {
    return !(showError === false || !error);
  }, [error, showError]);

  const onBlurAction = () => {
    validate({ name, value });
    if (value && onBlur) {
      onBlur();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-[1rem]">
      {label && (
        <label
          htmlFor={id}
          className={`
            ${disabled ? "bg-none" : "bg-white"}
            mb-2 text-brand_secondary font-albra_sans_sb text-14 pt-2 cursor-text ${variant}`}
        >
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder || ""}
          value={value}
          disabled={disabled}
          defaultValue={defaultValue}
          maxLength={maxLength}
          data-testid={`test-${id}`}
          aria-labelledby={id}
          onChange={onChange}
          readOnly={readOnly}
          autoComplete="off"
          onBlur={onBlurAction}
          onKeyDown={onKeyDown}
          className={`${variant} 
              ${inputError ? "border-error" : "border-neutral_stroke_1"} 
              h-[50px] px-4 pr-12 mt-2 text-brand_secondary text-[16px] sm:text-14 w-full outline-0 border font-aileron_r hide_tap
              rounded-[10px] focus:outline-none focus:ring-2 focus:ring-brand_primary
              ${
                disabled
                  ? "bg-neutral_disabled border-neutral_stroke_2"
                  : "bg-white"
              } 
            `}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
