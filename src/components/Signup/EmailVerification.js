import React from "react";
import Logo from "assets/images/logo-main.webp";
import { useNavigate } from "react-router-dom";

const EmailVerification = ({ email }) => {
  const navigate = useNavigate();

  return (
    <div className="md:w-[85%] w-[90%] m-auto mt-[4rem]">
      <img src={Logo} alt="logo" className="w-[4rem]" />
      <div className="pt-8">
        <h2 className="text-[34px] font-albra_sans_sb text-brand_secondary mb-2">
          Email Address Verification
        </h2>
        <p className="text-14 text-border_stroke_2 mb-6 font-aileron_r">
          Please check your inbox to confirm your email address
        </p>
        <p className="text-14 text-border_stroke_2 mb-6 font-aileron_r">
          We sent an email confirmation to{" "}
          <span className="text-14 text-border_stroke_2 mb-6 font-aileron_b">
            {email}
          </span>
        </p>

        <button
          type="submit"
          className="w-full h-[48px] bg-brand_primary hover:bg-dark_brand_primary text-brand_secondary font-aileron_sb text-14 py-2 rounded-xl transition mt-[40px]"
          onClick={() => navigate("?step=email-verified")}
        >
          Continue
        </button>

        <div className="mt-[30px]">
          <p className="font-aileron_sb text-14 text-center cursor-pointer underline">
            Resend Email
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
