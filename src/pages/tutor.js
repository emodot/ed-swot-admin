import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import QuickActions from "components/Inputs/QuickActions";
import {
  NewTutorIcon,
  DownloadListIcon,
  ExportListIcon,
} from "constants/quick_actions_icons";
import DataTable from "components/Table/DataTable";
import AddNewTutor from "components/Modals/AddNewTutor";


const Tutors = () => {
  const [isAddTutorOpen, setIsAddTutorOpen] = useState(false);

const tutors = [
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
      label: "Add new tutor",
      icon: <NewTutorIcon size={22} />,
      bg: "bg-[#E8F1FF]",
      border: "border-[#9DC0FF]",
      hover: "hover:bg-[#D5E5FF]",
      onClick: () => setIsAddTutorOpen(true),
    },
    {
      label: "Download tutor list",
      icon: <DownloadListIcon size={22} />,
      bg: "bg-[#FCF9EA]",
      border: "border-[#E3B62C]",
      hover: "hover:bg-[#FCF9EA]",
    },
    {
      label: "Export tutor list",
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
          Tutors
        </h2>
        <DataTable
          data={tutors}
          columns={[
            { key: "name", label: "Tutors" },
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

      <AddNewTutor
        isModalOpen={isAddTutorOpen}
        setIsModalOpen={() => setIsAddTutorOpen(false)}
      />
    </section>
  );
};

export default Tutors;
