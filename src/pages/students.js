import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import QuickActions from "components/Inputs/QuickActions";
import {
  NewStudentIcon,
  DownloadListIcon,
  ExportListIcon,
} from "constants/quick_actions_icons";
import DataTable from "components/Table/DataTable";
import AddNewStudent from "components/Modals/AddNewStudent";


const Students = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);

const students = [
  {
    name: "Mrs. Olatunji Gbemisola",
    course: "Biology",
    email: "WilsonStratham@yahoo.com",
    status: "Active",
    actions: "",
  },
  {
    name: "Mrs. Obi Samson",
    course: "Mathematics",
    email: "WilsonStratham@yahoo.com",
    status: "Disabled",
    actions: "",
  },
  {
    name: "Mr. Tolu Adeniran",
    course: "Coding",
    email: "ToluAdeniran@gmail.com",
    status: "Active",
    actions: "",
  },
  {
    name: "Mrs. Olatunji Gbemisola",
    course: "French",
    email: "WilsonStratham@yahoo.com",
    status: "Active",
    actions: "",
  },
];

  const actions = [
    {
      label: "Add new student",
      icon: <NewStudentIcon size={22} />,
      bg: "bg-[#FFECE3]",
      border: "border-[#FFB694]",
      hover: "hover:bg-[#FFD8C7]",
      onClick: () => setIsAddStudentOpen(true),
    },
    {
      label: "Download student list",
      icon: <DownloadListIcon size={22} />,
      bg: "bg-[#FCF9EA]",
      border: "border-[#E3B62C]",
      hover: "hover:bg-[#FCF9EA]",
    },
    {
      label: "Export student list",
      icon: <ExportListIcon size={22} />,
      bg: "bg-[#F5F5F5]",
      border: "border-[#848484]",
      hover: "hover:bg-[#F5F5F5]",
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
          Students
        </h2>
        <DataTable
          data={students}
          columns={[
            { key: "name", label: "Students" },
            { key: "course", label: "Courses" },
            { key: "email", label: "Email Address" },
            { key: "status", label: "Status" },
            { key: "actions", label: "Actions" },
          ]}
          filters={{
            course: ["All", "Biology", "Mathematics", "Coding", "French"],
            status: ["All", "Active", "Disabled"],
          }}
          itemsPerPage={3}
        />
      </div>

      <AddNewStudent
        isModalOpen={isAddStudentOpen}
        setIsModalOpen={() => setIsAddStudentOpen(false)}
      />
    </section>
  );
};

export default Students;
