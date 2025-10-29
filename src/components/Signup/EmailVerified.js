import React from "react";
import Logo from "assets/images/logo-main.webp";
import { useNavigate } from "react-router-dom";

const EmailVerified = ({ email }) => {
  const navigate = useNavigate();

  return (
    <div className="md:w-[85%] w-[90%] m-auto mt-[4rem] flex flex-col items-center">
      <img src={Logo} alt="logo" className="w-[4rem]" />
      <div className="pt-8 w-full">
        <h2 className="text-[34px] font-albra_sans_sb text-center text-brand_secondary mb-2">
          Email Address Verified 🥳
        </h2>
        <p className="text-14 text-border_stroke_2 text-center mb-6 font-aileron_r">
          You’re all set! Log in to access your dashboard
        </p>

        <button
          type="submit"
          className="w-full h-[48px] bg-brand_primary hover:bg-dark_brand_primary text-brand_secondary font-aileron_sb text-14 py-2 rounded-xl transition mt-[40px]"
          onClick={() => navigate("?step=signup-2")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmailVerified;
