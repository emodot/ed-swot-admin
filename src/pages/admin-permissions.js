import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import QuickActions from "components/Inputs/QuickActions";
import {
  NewAdminIcon,
  NewRoleIcon,
  SendInvitationIcon,
  ViewAllInvitationsIcon,
} from "constants/quick_actions_icons";
import DataTable from "components/Table/DataTable";
import AddNewAdmin from "components/Modals/AddNewAdmin";


const AdminPermissions = () => {
  const [isAddAdminOpen, setIsAddAdminOpen] = useState(false);

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
      label: "Add new admin",
      icon: <NewAdminIcon size={22} />,
      bg: "bg-[#E8F1FF]",
      border: "border-[#9DC0FF]",
      hover: "hover:bg-[#D5E5FF]",
      onClick: () => setIsAddAdminOpen(true),
    },
    {
      label: "Add new role",
      icon: <NewRoleIcon size={22} />,
      bg: "bg-[#FFECE3]",
      border: "border-[#FFB694]",
      hover: "hover:bg-[#FFD8C7]",
    },
    {
      label: "View all roles",
      icon: <NewRoleIcon size={22} />,
      bg: "bg-[#FFE8E8]",
      border: "border-[#FF9B9B]",
      hover: "hover:bg-[#FFD6D6]",
    },
    {
      label: "Send email invitation",
      icon: <SendInvitationIcon size={22} />,
      bg: "bg-[#EEF9E9]",
      border: "border-[#8BD37B]",
      hover: "hover:bg-[#D9F1CF]",
    },
    {
      label: "View all invitations",
      icon: <ViewAllInvitationsIcon size={22} />,
      bg: "bg-[#F2E8FC]",
      border: "border-[#962DFF]",
      hover: "hover:bg-[#F2E8FC]",
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
          Admins & Permissions
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

      <AddNewAdmin
        isModalOpen={isAddAdminOpen}
        setIsModalOpen={() => setIsAddAdminOpen(false)}
      />
    </section>
  );
};

export default AdminPermissions;
