import {
  RedeemedCouponIcon,
} from "constants/dashboard_icons";
import React from "react";

const stats = [
  {
    label: "Redeemed Coupons",
    value: 6,
    icon: <RedeemedCouponIcon iconFill="#2196F3" fill="#EBF5FF" />,
    border: "border-[#2196F3]",
  },
  {
    label: "Expired Coupons",
    value: "5",
    icon: <RedeemedCouponIcon iconFill="#E53935" fill="#FFEDEB" />,
    border: "border-[#E53935]",
  },
  {
    label: "Active Coupons",
    value: 3,
    icon: <RedeemedCouponIcon iconFill="#47A025" fill="#F1F9D2" />,
    border: "border-green",
  },
];

const CouponStats = () => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 border ${stat.border} rounded-[12px] p-4 bg-white`}
        >
          <div className="p-2 rounded-md text-dark_brand_primary">
            {stat.icon}
          </div>
          <div>
            <h4 className="text-24 font-aileron_m text-brand_secondary">
              {stat.value}
            </h4>
            <p className="text-14 text-border_stroke_2">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouponStats;
