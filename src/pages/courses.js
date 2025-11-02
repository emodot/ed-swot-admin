import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import QuickActions from "components/Inputs/QuickActions";
import {
  NewCourseIcon,
} from "constants/quick_actions_icons";
import DataTable from "components/Table/DataTable";
import AddNewCourse from "components/Modals/AddNewCourse";

const Courses = () => {
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);

  const courses = [
    {
      course: "Biology 101",
      tutor: "Mrs. Olatunji Gbemisola",
      status: "Active",
      enrolled: 35,
      revenue: "₦700,000",
      date_created: "2024-05-12",
      actions: "",
    },
    {
      course: "Intro to Mathematics",
      tutor: "Mrs. Obi Samson",
      status: "Inactive",
      enrolled: 22,
      revenue: "₦330,000",
      date_created: "2024-04-28",
      actions: "",
    },
    {
      course: "Web Development Bootcamp",
      tutor: "Mr. Tolu Adeniran",
      status: "Active",
      enrolled: 40,
      revenue: "₦1,400,000",
      date_created: "2024-03-19",
      actions: "",
    },
    {
      course: "Beginners French",
      tutor: "Mrs. Olatunji Gbemisola",
      status: "Active",
      enrolled: 28,
      revenue: "₦504,000",
      date_created: "2024-06-01",
      actions: "",
    },
  ];

  const actions = [
    {
      label: "Add new course",
      icon: <NewCourseIcon size={22} />,
      bg: "bg-[#FFE8E8]",
      border: "border-[#FF9B9B]",
      hover: "hover:bg-[#FFD6D6]",
      onClick: () => setIsAddCourseOpen(true),
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

      <div className="bg-white">
        <h2 className="text-brand_secondary font-aileron_b text-[24px] mb-2">
          Courses
        </h2>
        <DataTable
          data={courses}
          columns={[
            { key: "course", label: "Course" },
            { key: "tutor", label: "Tutor" },
            { key: "status", label: "Status" },
            { key: "enrolled", label: "Enrolled" },
            { key: "revenue", label: "Revenue" },
            { key: "date_created", label: "Date Created" },
            { key: "actions", label: "Actions" },
          ]}
          filters={{
            status: ["All", "Active", "Inactive"],
            tutor: [
              "All",
              "Mrs. Olatunji Gbemisola",
              "Mrs. Obi Samson",
              "Mr. Tolu Adeniran",
            ],
          }}
          itemsPerPage={3}
        />
      </div>

      <AddNewCourse
        isModalOpen={isAddCourseOpen}
        setIsModalOpen={() => setIsAddCourseOpen(false)}
      />
    </section>
  );
};

export default Courses;
