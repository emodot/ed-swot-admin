import React, { useState } from "react";
import Logo from "assets/images/logo-main.webp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function MembershipPlans() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('');
  const authSteps = [
    {
      title: "Sign Up",
      active: true,
    },
    {
      title: "Membership Plan",
      active: true,
    },
    {
      title: "Payment",
      active: false,
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "£17",
      note: "per hour/class",
      devices: "1",
      liveAccess: true,
      certificate: "Yes",
      connect: true,
      highlight: true,
    },
    {
      name: "Recommended",
      price: "£15",
      note: "per hour/class",
      devices: "2",
      liveAccess: true,
      certificate: "Yes",
      connect: true,
    },
    {
      name: "Enterprise",
      price: "£13",
      note: "per hour/class",
      devices: "4",
      liveAccess: true,
      certificate: "Yes",
      connect: true,
    },
  ];
  return (
    <section className="w-full bg-white py-[30px] px-[20px] lg:px-[100px]">
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
      <div className="max-w-[1300px] mx-auto mt-[4rem]">
        {/* Header */}
        <img src={Logo} alt="logo" className="w-[4rem]" />
        {/* Table Layout */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
          {/* Left Column */}
          <div className="col-span-2">
            <div className="border-b border-neutral_stroke_2 h-[100px] flex flex-col justify-center">
              <h2 className="text-24 font-albra_sans_b text-brand_secondary">
                Choose your monthly membership plan
              </h2>
              <p className="text-14 font-aileron_r text-brand_secondary">
                Experience Edswot with confidence; 30-day satisfaction guarantee
                on all plans.
              </p>
            </div>
            {[
              {
                title: "Monthly membership price",
              },
              {
                title: "Devices you can watch at the same time",
                subtitle:
                  "(Learn by yourself or share with friends and family who live with you)",
              },
              { title: "Access to all live classes for 1 month" },
              { title: "Certificate of completion for courses" },
              { title: "Connect on your computer, phone, or tablet" },
            ].map((item, i) => (
              <div
                key={i}
                className="border-b border-neutral_stroke_2 h-[80px] flex flex-col justify-center pr-[8px]"
              >
                <p className="text-14 font-aileron_sb text-brand_secondary">
                  {item.title}
                </p>
                {item.subtitle && (
                  <p className="text-12 text-[#6E6E6E] font-aileron_r mt-[6px]">
                    {item.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Plan Cards */}
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`cursor-pointer col-span-1 border border-neutral_stroke_2 mt-[30px] ${
                selectedPlan === plan.name
                  ? "bg-brand_primary border-none rounded-[12px]"
                  : "rounded-[12px]"
              }`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {/* Header */}
              <div
                className={`text-center py-[24px] h-[70px] ${
                  selectedPlan === plan.name
                    ? "bg-brand_primary rounded-[12px]"
                    : ""
                }`}
              >
                <h3
                  className={`text-18 font-albra_sans_b mb-2 ${
                    selectedPlan === plan.name
                      ? "text-brand_secondary"
                      : "text-brand_secondary"
                  }`}
                >
                  {plan.name}
                </h3>
              </div>

              {/* Features */}
              <div className="text-center">
                <div className="border-b border-neutral_stroke_2 h-[80px] flex flex-col justify-center items-center text-16 font-aileron_r">
                  <p className="text-20 font-albra_sans_b">{plan.price}</p>
                  <p className="text-14 font-aileron_r text-brand_secondary">
                    {plan.note}
                  </p>
                </div>
                <div className="bg-white rounded-[12px] mx-[10px] mb-[5px]">
                  <div className="border-b border-neutral_stroke_2 h-[80px] flex justify-center items-center text-16 font-aileron_r">
                    {plan.devices}
                  </div>
                  <div className="border-b border-neutral_stroke_2 h-[80px] flex justify-center items-center text-16 font-aileron_r">
                    {plan.liveAccess ? "✓" : "-"}
                  </div>
                  <div className="border-b border-neutral_stroke_2 h-[80px] flex justify-center items-center text-16 font-aileron_r">
                    {plan.certificate}
                  </div>
                  <div className="h-[80px] flex justify-center items-center text-16 font-aileron_r">
                    {plan.connect ? "✓" : "-"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[700px] mx-auto">
        <button
          type="submit"
          className="w-full h-[48px] bg-brand_primary hover:bg-dark_brand_primary text-brand_secondary font-aileron_sb text-14 py-2 rounded-xl transition mt-[40px]"
          onClick={(e) => {
            e.preventDefault();
            if (!selectedPlan) {
              toast.error("Please select a Plan");
              return;
            }
            // toast.success("Email verification sent! Please check your inbox.");
            navigate("/auth/multi-learner-setup");
          }}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
