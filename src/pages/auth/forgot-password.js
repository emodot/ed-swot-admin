import Logo from "assets/images/logo-main.webp";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import Input from "components/Inputs/Input";

const ForgotPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation function to check form fields and show toast messages
  const validateForm = () => {
    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return false;
    }
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    return true;
  };

  return (
    <div className="max-w-[900px] m-auto">
      <div className="md:w-[85%] w-[90%] m-auto mt-[4rem]">
        <img src={Logo} alt="logo" className="w-[4rem]" />
        <div className="pt-8">
          <h2 className="text-[34px] font-albra_sans_m text-brand_secondary mb-2">
            Forgot Password
          </h2>
          <p className="text-14 text-border_stroke_2 mb-6 font-aileron_r">
            We’ll help you reset in seconds.
          </p>

          <form className="">
            <Input
              label="Email Address"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
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
                toast.success(
                  "Email verification sent! Please check your inbox."
                );
                navigate("/auth/reset-password");
              }}
            >
              Reset password
            </button>
          </form>

          <div className="w-full">
            <p className="text-neutral_black text-14 font-aileron_r mt-[12px]">
              Remember password?{" "}
              <span
                className="font-aileron_sb text-14 cursor-pointer hover:underline"
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                Log In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
