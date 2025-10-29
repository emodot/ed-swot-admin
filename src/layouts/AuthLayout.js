import SignUpImg from "assets/images/signup-img.jpg";
import LoginImg from "assets/images/login-img.jpg";
import ForgotPasswordImg from "assets/images/forgot-password-img.jpg";
import ResetPasswordImg from "assets/images/reset-password-img.jpg";
import ResetPasswordSuccessImg from "assets/images/reset-password-success-img.jpg";
import EmailVerification from "assets/images/email-verification-img.jpg";
import EmailVerified from "assets/images/email-verified-img.jpg";
import Spinner from "../components/Spinner";
import {
  createContext,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { search, pathname } = useLocation();
  const queryParams = new URLSearchParams(search);
  const step = queryParams.get("step") || "";
  const status = queryParams.get("status") || "";
  console.log("step", step);

  const closeLeftSide = 
    pathname.toLowerCase().includes("membership-plans") ||
    pathname.toLowerCase().includes("multi-learner-setup");

  const leftBG =
    step === "email-verification"
      ? EmailVerification
      : step === "email-verified"
      ? EmailVerified
      : pathname.toLowerCase().includes("login")
      ? SignUpImg
      : pathname.toLowerCase().includes("forgot-password")
      ? ForgotPasswordImg
      : pathname.toLowerCase().includes("reset-password") && status === ""
      ? ResetPasswordImg
      : status === "reset-successful"
      ? ResetPasswordSuccessImg
      : SignUpImg;


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  }, [isSuccess]);

  return (
    <ModalContext.Provider
      value={{
        toggleMenu,
        closeMenu,
      }}
    >
      <div className="relative bg-light_brand_primary h-[100vh] w-full">
        <Suspense fallback={<Spinner />}>
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 50 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.23,
            }}
            className="w-full h-[100vh] bg-white flex overflow-hidden shadow-lg relative z-10"
          >
            {/* Left Section */}
            {!closeLeftSide && (
              <div className="basis-[40%] hidden md:flex relative flex-col items-center">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${leftBG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 0,
                  }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-[60px] w-[85%] px-4 py-4 rounded-[10px] backdrop-blur-md bg-black/10 shadow-lg">
                  <blockquote className="text-[16px] text-white font-albra_sans_m mb-3">
                    “Edswot exists to unlock the potential in every learner.”
                  </blockquote>
                  <p className="text-white font-aileron_sb text-12">
                    Oluwatobi Akapo
                  </p>
                  <p className="text-white font-aileron_sb text-12">
                    Founder & Director at Edsworth Limited
                  </p>
                </div>
              </div>
            )}

            {/* Right Section - Form */}
            <div
              className={`py-[2rem] h-full overflow-y-auto ${
                closeLeftSide ? "md:basis-[100%]" : "md:basis-[60%]"
              }`}
            >
              <Outlet />
            </div>
          </motion.div>
        </Suspense>
      </div>
    </ModalContext.Provider>
  );
}
