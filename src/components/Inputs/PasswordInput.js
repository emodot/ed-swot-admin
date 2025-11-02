import { useState } from "react";
import useInputValidate from "hooks/useInputValidate";
import { useMemo } from "react";
import { CloseEyeIcon, OpenEyeIcon } from "constants/dashboard_icons";

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
            mb-2 text-brand_secondary font-aileron_sb text-14 pt-2 cursor-text ${variant}`}
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
            <OpenEyeIcon size={24} />
          ) : (
            <CloseEyeIcon size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
