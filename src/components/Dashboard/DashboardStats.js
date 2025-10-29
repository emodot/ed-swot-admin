import { TotalTutorsIcon, TotalStudentsIcon, TotalCoursesIcon, MonthlyRevenueIcon } from "constants/dashboard_icons";
import React from "react";

const stats = [
  {
    label: "Total Tutors",
    value: 28,
    icon: <TotalTutorsIcon />,
    border: "border-[#2196F3]",
  },
  {
    label: "Total Students",
    value: "15,760",
    icon: <TotalStudentsIcon />,
    border: "border-[#E53935]",
  },
  {
    label: "Total Courses",
    value: 54,
    icon: <TotalCoursesIcon />,
    border: "border-warning",
  },
  {
    label: "Monthly Revenue",
    value: "£54,450",
    icon: <MonthlyRevenueIcon />,
    border: "border-green",
  },
];

const DashboardStats = () => {
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

export default DashboardStats;
