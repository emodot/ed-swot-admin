import React, { useState } from "react";
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
import DataTable from "components/Table/DataTable";
import AddNewTutor from "components/Modals/AddNewTutor";
import AddNewStudent from "components/Modals/AddNewStudent";
import AddNewCourse from "components/Modals/AddNewCourse";

const Dashboard = () => {
  const [isAddTutorOpen, setIsAddTutorOpen] = useState(false);
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);

  const tutors = [
    {
      customer: "Olatunji Gbemisola",
      course: "Graphic Design Mastery",
      course_category: "Software & Tech",
      amount: "£45",
      date: "12 - 05 - 2025",
      actions: "",
    },
    {
      customer: "David Gbemisola",
      course: "Graphic Design Mastery",
      course_category: "Software & Tech",
      amount: "£45",
      date: "12 - 05 - 2025",
      actions: "",
    },
    {
      customer: "Olatunji Gbemisola",
      course: "Graphic Design Mastery",
      course_category: "Software & Tech",
      amount: "£45",
      date: "12 - 05 - 2025",
      actions: "",
    },
    {
      customer: "Olatunji Gbemisola",
      course: "Graphic Design Mastery",
      course_category: "Software & Tech",
      amount: "£45",
      date: "12 - 05 - 2025",
      actions: "",
    },
  ];

  const actions = [
    {
      label: "Add new tutor",
      icon: <NewTutorIcon size={22} />,
      bg: "bg-[#E8F1FF]",
      border: "border-[#9DC0FF]",
      hover: "hover:bg-[#D5E5FF]",
      onClick: () => setIsAddTutorOpen(true),
    },
    {
      label: "Add new student",
      icon: <NewStudentIcon size={22} />,
      bg: "bg-[#FFECE3]",
      border: "border-[#FFB694]",
      hover: "hover:bg-[#FFD8C7]",
      onClick: () => setIsAddStudentOpen(true),
    },
    {
      label: "Add new course",
      icon: <NewCourseIcon size={22} />,
      bg: "bg-[#FFE8E8]",
      border: "border-[#FF9B9B]",
      hover: "hover:bg-[#FFD6D6]",
      onClick: () => setIsAddCourseOpen(true),
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

      <div className="bg-white">
        <h2 className="text-brand_secondary font-aileron_b text-16 mb-2">
          Recent Transactions
        </h2>
        <DataTable
          data={tutors}
          columns={[
            { key: "customer", label: "Customer" },
            { key: "course", label: "Course" },
            { key: "course_category", label: "Course Category" },
            { key: "amount", label: "Amount" },
            { key: "date", label: "Date" },
            { key: "actions", label: "Actions" },
          ]}
          filters={{
            date: ["All", "This Week", "This Month", "This Year"],
            course_category: ["All", "Software  & Tech", "Design"],
            course: ["All", "Graphics Design"],
          }}
          itemsPerPage={3}
        />
      </div>

      <AddNewTutor
        isModalOpen={isAddTutorOpen}
        setIsModalOpen={() => setIsAddTutorOpen(false)}
      />
      <AddNewStudent
        isModalOpen={isAddStudentOpen}
        setIsModalOpen={() => setIsAddStudentOpen(false)}
      />
      <AddNewCourse
        isModalOpen={isAddCourseOpen}
        setIsModalOpen={() => setIsAddCourseOpen(false)}
      />
    </section>
  );
};

export default Dashboard;
