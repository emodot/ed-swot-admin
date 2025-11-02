import useInputValidate from "hooks/useInputValidate";
import { useMemo } from "react";

const Select = ({
  label,
  id,
  disabled,
  variant,
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  showError,
  onBlur,
  required,
  options = [],
}) => {
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
      <select
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
        data-testid={`test-${id}`}
        aria-labelledby={id}
        onChange={onChange}
        onBlur={onBlurAction}
        className={`${variant} 
            ${inputError ? "border-error" : "border-neutral_stroke_1"} 
            h-[50px] px-4 mt-2 text-brand_secondary text-[16px] sm:text-14 w-full outline-0 border font-aileron_r hide_tap
            rounded-[10px] focus:outline-none focus:ring-2 focus:ring-brand_primary
            ${
              disabled
                ? "bg-neutral_disabled border-neutral_stroke_2 cursor-not-allowed"
                : "bg-white cursor-pointer"
            } 
          `}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => {
          const optionValue = option.value !== undefined ? option.value : option.id;
          const optionLabel = option.label || option.name || option.text || optionValue;
          return (
            <option key={optionValue || optionLabel} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

