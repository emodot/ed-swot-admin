import { useState } from "react";
import RightSideModal from "./RightSideModal";
import { FiEdit2, FiUser } from "react-icons/fi";
import AddNewRole from "./AddNewRole";

const AllRoles = ({ isModalOpen, setIsModalOpen }) => {
  const [editingRole, setEditingRole] = useState(null);
  const [isEditRoleOpen, setIsEditRoleOpen] = useState(false);

  const roles = [
    {
      id: 1,
      title: "Super Admin",
      description:
        "Global system access, with the ability to create and manage all other admins while controlling settings across the entire platform.",
    },
    {
      id: 2,
      title: "Academic Admin",
      description:
        "Oversees the academic side of the platform by creating and managing courses, assigning tutors, and editing curricula.",
    },
    {
      id: 3,
      title: "Finance Admin",
      description:
        "Handles all financial operations, including payment records, invoices, coupon codes, and financial reporting.",
    },
  ];

  const handleEdit = (role) => {
    setEditingRole(role);
    setIsEditRoleOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditRoleOpen(false);
    setEditingRole(null);
  };

  return (
    <>
      <RightSideModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="All Roles"
        width="md:w-[600px] lg:w-[700px]"
      >
        <div className="w-full mx-auto px-4">
          <div className="space-y-6">
            {roles.map((role, index) => (
              <div
                key={role.id}
                className={`${
                  index !== roles.length - 1
                    ? "border-b border-neutral_stroke_2 pb-6"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-brand_secondary font-aileron_b text-16 mb-2">
                      {role.title}
                    </h3>
                    <p className="text-14 text-border_stroke_2 font-aileron_r leading-6">
                      {role.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleEdit(role)}
                    className="flex items-center gap-2 text-[#1B82D3] hover:opacity-75 transition-opacity flex-shrink-0"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1813 2.92689C16.0291 1.71505 14.1047 1.69077 12.9222 2.87317L3.54741 12.2475C3.21958 12.5754 2.99204 12.9899 2.89148 13.4424L2.01387 17.3923C1.97678 17.5592 2.02754 17.7335 2.14844 17.8544C2.26934 17.9753 2.44362 18.026 2.6105 17.9889L6.53689 17.1157C7.00432 17.0118 7.43243 16.7767 7.77103 16.4381L11.8333 12.3758C11.6611 12.0426 11.5495 11.6731 11.5131 11.2818L7.06391 15.731C6.85976 15.9352 6.60164 16.0769 6.31982 16.1396L3.1605 16.8421L3.86768 13.6593C3.92698 13.3924 4.06117 13.148 4.2545 12.9547L12.2509 4.95864L15.0436 7.7513L14.7818 8.01306C15.1731 8.04952 15.5426 8.16113 15.8757 8.33333L17.129 7.08003C18.27 5.939 18.2933 4.09631 17.1813 2.92689ZM13.6293 3.58029C14.4143 2.79538 15.6917 2.8115 16.4566 3.61596C17.1948 4.39225 17.1793 5.61548 16.4219 6.37293L15.7507 7.04418L12.958 4.25155L13.6293 3.58029ZM16.5 11C16.5 12.1046 15.6046 13 14.5 13C13.3954 13 12.5 12.1046 12.5 11C12.5 9.89543 13.3954 9 14.5 9C15.6046 9 16.5 9.89543 16.5 11ZM18 15.5C18 16.7452 17 18 14.5 18C12 18 11 16.7499 11 15.5C11 14.6716 11.6716 14 12.5 14H16.5C17.3284 14 18 14.6716 18 15.5Z"
                        fill="#1B82D3"
                      />
                    </svg>

                    <span className="text-16 font-aileron_sb underline text-[#1B82D3]">
                      Edit
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RightSideModal>

      {editingRole && (
        <AddNewRole
          isModalOpen={isEditRoleOpen}
          setIsModalOpen={handleCloseEdit}
        />
      )}
    </>
  );
};

export default AllRoles;
