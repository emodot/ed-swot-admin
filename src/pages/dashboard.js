import React from "react";
import DashboardStats from "components/Dashboard/DashboardStats";
import "react-multi-carousel/lib/styles.css";
import Activities from "components/Dashboard/Activities";
import QuickActions from "components/Inputs/QuickActions";
import {
  NewTutorIcon,
  NewStudentIcon,
  NewCourseIcon,
  NewCouponIcon,
} from "constants/quick_actions_icons";
import StatsOverview from "components/Dashboard/StatsOverview";
import StudentEnrollment from "components/Dashboard/StudentEnrollment";

const Dashboard = () => {
  const actions = [
    {
      label: "Add new tutor",
      icon: <NewTutorIcon size={22} />,
      bg: "bg-[#E8F1FF]",
      border: "border-[#9DC0FF]",
      hover: "hover:bg-[#D5E5FF]",
    },
    {
      label: "Add new student",
      icon: <NewStudentIcon size={22} />,
      bg: "bg-[#FFECE3]",
      border: "border-[#FFB694]",
      hover: "hover:bg-[#FFD8C7]",
    },
    {
      label: "Add new course",
      icon: <NewCourseIcon size={22} />,
      bg: "bg-[#FFE8E8]",
      border: "border-[#FF9B9B]",
      hover: "hover:bg-[#FFD6D6]",
    },
    {
      label: "Add new coupon",
      icon: <NewCouponIcon size={22} />,
      bg: "bg-[#EEF9E9]",
      border: "border-[#8BD37B]",
      hover: "hover:bg-[#D9F1CF]",
    },
  ];

  return (
    <section className="p-4 md:p-6">
      <div className="mb-10">
        <h2 className="text-brand_secondary font-aileron_b text-16 mb-2">
          Quick actions
        </h2>
        <QuickActions actions={actions} />
      </div>
      {/* Stats */}
      <DashboardStats />

      <div className="mb-6">
        <StatsOverview />
      </div>
      {/* Activities and Calender */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <StudentEnrollment />
        </div>
        <div>
          <Activities />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
