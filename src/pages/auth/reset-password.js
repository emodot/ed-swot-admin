import { ReactComponent as GoogleIcon } from "assets/icons/google-icon.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook-icon.svg";
import Logo from "assets/images/logo-main.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import PasswordInput from "components/Inputs/PasswordInput";
import Input from "components/Inputs/Input";
import ResetSuccessful from "components/Signup/ResetSuccessful";

const ResetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const status = queryParams.get("status") || "";
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.password.trim()) {
      toast.error("Please enter your password");
      return false;
    }
    if (!formData.confirmPassword.trim()) {
      toast.error("Please confirm your password");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Please enter a correct confim password");
      return false;
    }
    return true;
  };

  return (
    <div className="max-w-[900px] m-auto">
      {status === "" && (
        <div className="md:w-[85%] w-[90%] m-auto mt-[4rem]">
          <img src={Logo} alt="logo" className="w-[4rem]" />
          <div className="pt-8">
            <h2 className="text-[34px] font-albra_sans_m text-brand_secondary mb-2">
              Reset Password
            </h2>
            <p className="text-14 text-border_stroke_2 mb-6 font-aileron_r">
              We’ll help you reset in seconds.
            </p>
            <form className="">
              <PasswordInput
                label="Password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
                showError={false}
              />
              <PasswordInput
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Enter Confirm Password"
                required
                showError={false}
              />

              <button
                type="submit"
                className="w-full h-[48px] bg-brand_primary hover:bg-dark_brand_primary text-brand_secondary font-aileron_sb text-14 py-2 rounded-xl transition mt-[40px]"
                onClick={(e) => {
                  e.preventDefault();
                  if (!validateForm()) {
                    return;
                  }
                  toast.success("Password Reset Successful");
                  navigate("?status=reset-successful");
                }}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
      {status === "reset-successful" && <ResetSuccessful />}
    </div>
  );
};

export default ResetPassword;
