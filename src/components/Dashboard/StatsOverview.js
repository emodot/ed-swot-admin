import { ArrowRightIcon, OpenEyeIcon } from "constants/dashboard_icons";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

export default function StatsOverview() {
  const stats = [
    {
      title: "Active Tutors",
      active: "25",
      inactiveLabel: "3 Inactive Tutors",
      revenue: "Monthly revenue",
      amount: "£54,450",
      trend: "Increase compared to last month",
      trendColor: "text-[#3D8B1F]",
      status: 'increase',
      iconColor: "bg-[#3D8B1F]",
    },
    {
      title: "Active Students",
      active: "15,500",
      inactiveLabel: "260 Inactive Students",
      revenue: "Yearly Revenue",
      amount: "£420,000",
      trend: "Decrease compared to last month",
      trendColor: "text-error",
      iconColor: "bg-[#ACD39B]",
    },
    {
      title: "Active Coupons",
      active: "3",
      inactiveLabel: "5 Expired Coupons",
      revenue: null,
      amount: null,
      trend: null,
      iconColor: "bg-[#ACD39B]",
    },
    {
      title: "Active Courses",
      active: "2",
      inactiveLabel: "22 Inactive Courses",
      revenue: null,
      amount: null,
      trend: null,
      iconColor: "bg-[#ACD39B]",
    },
  ];

  return (
    <div className="border border-error_tint rounded-[8px] p-6 font-aileron_r text-brand_secondary">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
        {stats.map((item, i) => (
          <div key={i} className="flex flex-col gap-1">
            {/* Header */}
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] rounded-full bg-[#47A025]"></div>
              <p className="text-14 font-aileron_r">{item.title}</p>
              <OpenEyeIcon size={20} className="text-warning" />
            </div>

            {/* Active Number */}
            <h2 className="text-24 font-aileron_b">{item.active}</h2>

            {/* Inactive label */}
            <div className="flex items-center gap-2 text-14 text-brand_secondary/70">
              <div className="w-[10px] h-[10px] rounded-full bg-[#999]"></div>
              {item.inactiveLabel}
              <ArrowRightIcon />
            </div>

            {/* Revenue section (conditionally rendered) */}
            {item.revenue && (
              <div className="mt-10 flex flex-col gap-1">
                <div className="flex gap-4 items-center justify-between text-14 mb-1 w-fit">
                  <p className="text-14 font-aileron_r">{item.revenue}</p>
                  <ArrowRightIcon />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-24 font-aileron_b">{item.amount}</h3>
                  <OpenEyeIcon size={20} className="text-warning" />
                </div>
                <div
                  className={`text-12 mt-1 flex items-center gap-1 ${item.trendColor}`}
                >
                  {item.trend}
                  {item.status === "increase" ? (
                    <ArrowUpRight size={12} color="#3D8B1F" />
                  ) : (
                    <ArrowDownLeft size={12} color="#C7302D" />
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
