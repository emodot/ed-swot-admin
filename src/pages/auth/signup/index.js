import { ReactComponent as GoogleIcon } from "assets/icons/google-icon.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook-icon.svg";
import Logo from "assets/images/logo-main.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import EmailVerification from "components/Signup/EmailVerification";
import EmailVerified from "components/Signup/EmailVerified";
import PasswordInput from "components/Inputs/PasswordInput";
import Input from "components/Inputs/Input";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { search } = useLocation();
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const queryParams = new URLSearchParams(search);
  const step = queryParams.get("step") || "";
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      password: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
      if (!formData.firstName.trim()) {
        toast.error("Please enter your first name");
        return false;
      }
      if (!formData.lastName.trim()) {
        toast.error("Please enter your last name");
        return false;
      }
      if (!formData.password.trim()) {
        toast.error("Please enter your password");
        return false;
      }
      if (!confirmPassword.trim()) {
        toast.error("Please confirm your password");
        return false;
      }
      return true;
    };

  const authSteps = [
    {
      title: "Sign Up",
      active: true,
    },
    {
      title: "Membership Plan",
      active: false,
    },
    {
      title: "Payment",
      active: false,
    },
  ];

  return (
    <div className="max-w-[900px] m-auto">
      <div className="flex gap-4 items-center justify-center">
        {authSteps.map((steps, index) => (
          <div key={index}>
            <div
              className={`md:w-[10rem] w-[7rem] h-[6px] rounded-full ${
                steps.active ? "bg-brand_primary" : "border border-[#E5E5E5]"
              }`}
            />
            <p
              className={`text-12 text-center mt-[10px] ${
                steps.active ? "font-aileron_sb " : "font-aileron_r"
              }`}
            >
              {steps.title}
            </p>
          </div>
        ))}
      </div>
      {(step === "" || step === "signup-2") && (
        <div className="md:w-[85%] w-[90%] m-auto mt-[4rem]">
          <img src={Logo} alt="logo" className="w-[4rem]" />
          <div className="pt-8">
            <h2 className="text-[34px] font-albra_sans_sb text-brand_secondary mb-2">
              Sign Up
            </h2>
            <p className="text-14 text-border_stroke_2 mb-6 font-aileron_r">
              Sign up now and gain access to professional tutors
            </p>
            {step === "" && (
              <form className="">
                <Input
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  showError={false}
                />

                <button
                  type="submit"
                  className="w-full h-[48px] bg-brand_primary hover:bg-dark_brand_primary text-brand_secondary font-aileron_sb text-14 py-2 rounded-xl transition mt-[40px]"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!email) {
                      toast.error("Please enter your email address");
                      return;
                    }
                    if (!email.includes("@")) {
                      toast.error("Please enter a valid email address");
                      return;
                    }
                    toast.success(
                      "Email verification sent! Please check your inbox."
                    );
                    navigate("?step=email-verification");
                  }}
                >
                  Sign Up
                </button>
              </form>
            )}
            {step === "signup-2" && (
              <form className="">
                <Input
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                  showError={false}
                />
                <Input
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
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
                <PasswordInput
                  label="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter Confirm Password"
                  required
                  showError={false}
                />

                <button
                  type="submit"
                  className="w-full h-[48px] bg-brand_primary hover:bg-dark_brand_primary text-brand_secondary font-aileron_sb text-14 py-2 rounded-xl transition mt-[20px]"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!validateForm()) {
                      return;
                    }
                    if (formData.password !== confirmPassword) {
                      toast.error("Please enter a correct confim password");
                      return;
                    }
                    toast.success("Account Created Successfully");
                    navigate("membership-plans");
                  }}
                >
                  Sign Up
                </button>
              </form>
            )}

            <div className="w-full">
              <div className="flex items-center my-[24px]">
                <div className="flex-1 h-[1px] bg-neutral_stroke_1" />
                <span className="px-[10px] text-[#575757] text-10 font-aileron_r">
                  OR
                </span>
                <div className="flex-1 h-[1px] bg-neutral_stroke_1" />
              </div>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-[10px] border border-[#DADCE0] rounded-[8px] py-[10px] mb-[12px] hover:bg-neutral_gray_6 transition-all duration-200"
                onClick={() => {
                  toast.info("Google sign-in coming soon!");
                }}
              >
                <GoogleIcon className="w-[20px]" />
                <span className="text-neutral_black text-14 font-aileron_r">
                  Continue with Google
                </span>
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-[10px] border border-[#1877F2] rounded-[8px] py-[10px] hover:bg-[#1877F2]/10 transition-all duration-200"
                onClick={() => {
                  toast.info("Facebook sign-in coming soon!");
                }}
              >
                <FacebookIcon className="w-[20px]" />
                <span className="text-neutral_black text-14 font-aileron_r">
                  Continue with Facebook
                </span>
              </button>

              {/* Terms and Privacy */}
              <p className="text-[#575757] text-14 font-aileron_r mt-[16px]">
                By creating an account, you agree to{" "}
                <span className="font-aileron_sb text-14 cursor-pointer underline">
                  Edswot Terms
                </span>{" "}
                and{" "}
                <span className="font-aileron_sb text-14 cursor-pointer underline">
                  Privacy Policy
                </span>
                .
              </p>
              <p className="text-neutral_black text-14 font-aileron_r mt-[12px]">
                Already have an account?{" "}
                <span
                  className="font-aileron_sb text-14 cursor-pointer hover:underline"
                  onClick={() => {
                    navigate("/auth/login");
                  }}
                >
                  Log in
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {step === "email-verification" && <EmailVerification email={email} />}
      {step === "email-verified" && <EmailVerified email={email} />}
    </div>
  );
};

export default SignUp;
