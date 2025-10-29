import { ReactComponent as GoogleIcon } from "assets/icons/google-icon.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook-icon.svg";
import Logo from "assets/images/logo-main.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import PasswordInput from "components/Inputs/PasswordInput";
import Input from "components/Inputs/Input";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const step = queryParams.get("step") || "";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    if (!formData.password.trim()) {
      toast.error("Please enter your password");
      return false;
    }
    return true;
  };

  return (
    <div className="max-w-[900px] m-auto">
      {(step === "" || step === "signup-2") && (
        <div className="md:w-[85%] w-[90%] m-auto mt-[4rem]">
          <img src={Logo} alt="logo" className="w-[4rem]" />
          <div className="pt-8">
            <h2 className="text-[34px] font-albra_sans_sb text-brand_secondary mb-2">
              Admin Log In
            </h2>
            <p className="text-14 text-border_stroke_2 mb-6 font-aileron_r">
              Access the control center to manage tutors, students, and classes.
            </p>
            {step === "" && (
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
                <p
                  className="font-aileron_sb text-14 cursor-pointer hover:underline w-fit"
                  onClick={() => {
                    navigate("/auth/forgot-password");
                  }}
                >
                  Forgot password?
                </p>

                <button
                  type="submit"
                  className="w-full h-[48px] bg-brand_primary hover:bg-dark_brand_primary text-brand_secondary font-aileron_sb text-14 py-2 rounded-xl transition mt-[40px]"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!validateForm()) {
                      return;
                    }
                    toast.success("Login Succesful");
                    navigate("/dashboard");
                  }}
                >
                  Log In
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
