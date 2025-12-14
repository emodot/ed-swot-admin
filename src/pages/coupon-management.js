import React, { useState } from "react";
import QuickActions from "components/Inputs/QuickActions";
import StatusBadge from "components/Table/StatusBadge";
import DataTable from "components/Table/DataTable";
import { EllipsisIcon, GridIcon, ListIcon } from "lucide-react";
import CouponStats from "components/Dashboard/CouponStats";
import { NewCouponIcon, PauseAllCouponIcon } from "constants/quick_actions_icons";
import AddNewCoupon from "components/Modals/AddNewCoupon";

// Mock data for coupons
const coupons = [
  {
    name: "Back-2-School",
    code: "STUDYNOW_EDS",
    percentage: 15,
    activeFrom: "11/08/2025",
    status: "Active",
    limitNo: 25,
    redeemed: 5,
    actions: "",
  },
  {
    name: "Back-2-School",
    code: "STUDYNOW_EDS",
    percentage: 15,
    activeFrom: "11/08/2025",
    status: "Expired",
    limitNo: 25,
    redeemed: 5,
    actions: "",
  },
  {
    name: "Back-2-School",
    code: "STUDYNOW_EDS",
    percentage: 15,
    activeFrom: "11/08/2025",
    status: "Expired",
    limitNo: 25,
    redeemed: 5,
    actions: "",
  },
  {
    name: "Back-2-School",
    code: "STUDYNOW_EDS",
    percentage: 15,
    activeFrom: "11/08/2025",
    status: "Paused",
    limitNo: 25,
    redeemed: 5,
    actions: "",
  },
  {
    name: "Back-2-School",
    code: "STUDYNOW_EDS",
    percentage: 15,
    activeFrom: "11/08/2025",
    status: "Paused",
    limitNo: 25,
    redeemed: 5,
    actions: "",
  },
  {
    name: "Back-2-School",
    code: "STUDYNOW_EDS",
    percentage: 15,
    activeFrom: "11/08/2025",
    status: "Active",
    limitNo: 25,
    redeemed: 5,
    actions: "",
  },
];

const CouponManagement = () => {
  const [viewMode, setViewMode] = useState("Details"); // "Details" or "Card"
  const [isAddCouponModalOpen, setIsAddCouponModalOpen] = useState(false);

  const actions = [
    {
      label: "Add new coupon",
      icon: <NewCouponIcon size={16} />,
      bg: "bg-[#EEF9E9]",
      border: "border-[#8BD37B]",
      hover: "hover:bg-[#D9F1CF]",
      onClick: () => setIsAddCouponModalOpen(true),
    },
    {
      label: "Pause all coupon",
      icon: <PauseAllCouponIcon size={16} />,
      bg: "bg-[#FFF2EB]",
      border: "border-[#F5853F]",
      hover: "hover:bg-[#FFE8D6]",
      onClick: () => console.log("Pause all coupon"),
    },
  ];

  // Render code badge with color
  const renderCodeBadge = (code, status) => {
    const colorClasses = {
      Active: "bg-success_fade text-success",
      Expired: "bg-neutral_disabled text-border_stroke_2",
      Paused: "bg-[#FFF2EB] text-[#F5853F]",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-[12px] font-aileron_r ${
          colorClasses[status] || colorClasses.Expired
        }`}
      >
        {code}
      </span>
    );
  };

  // Custom renderers for DataTable
  const customRenderers = {
    code: (row) => renderCodeBadge(row.code, row.status),
    status: (row) => <StatusBadge status={row.status} />,
    percentage: (row) => `${row.percentage}%`,
    actions: () => (
      <button className="hover:opacity-75 transition">
        <EllipsisIcon size={20} className="text-brand_secondary" />
      </button>
    ),
  };

  return (
    <section className="p-4 md:p-6">
      {/* Quick Actions */}
      <div className="mb-10">
        <h2 className="text-brand_secondary font-aileron_b text-16 mb-2">
          Quick actions
        </h2>
        <QuickActions actions={actions} />
      </div>
      {/* Stats */}
      <CouponStats />

      {/* Coupons Section */}
      <div className="bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-brand_secondary font-aileron_b text-[24px]">
            Coupons
          </h2>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("Details")}
              className={`px-4 py-2 rounded-lg text-[14px] font-aileron_r flex items-center gap-2 ${
                viewMode === "Details"
                  ? "bg-[#FFF44F] text-brand_secondary"
                  : "bg-white border border-neutral_stroke_2 text-brand_secondary"
              }`}
            >
              <ListIcon size={16} />
              Details
            </button>
            <button
              onClick={() => setViewMode("Card")}
              className={`px-4 py-2 rounded-lg text-[14px] font-aileron_r flex items-center gap-2 ${
                viewMode === "Card"
                  ? "bg-[#FFF44F] text-brand_secondary"
                  : "bg-white border border-neutral_stroke_2 text-brand_secondary"
              }`}
            >
              <GridIcon size={16} />
              Card
            </button>
          </div>
        </div>

        {viewMode === "Details" && (
          <DataTable
            data={coupons}
            columns={[
              { key: "name", label: "Name" },
              { key: "code", label: "Code" },
              { key: "percentage", label: "Percentage (%)" },
              { key: "activeFrom", label: "Active From" },
              { key: "status", label: "Status" },
              { key: "limitNo", label: "Limit No." },
              { key: "redeemed", label: "Redeemed" },
              { key: "actions", label: "Action" },
            ]}
            filters={{
              status: ["All", "Active", "Expired", "Paused"],
            }}
            itemsPerPage={10}
            customRenderers={customRenderers}
            searchPlaceholder="Search by name"
          />
        )}
      </div>

      {/* Add New Coupon Modal */}
      <AddNewCoupon
        isModalOpen={isAddCouponModalOpen}
        setIsModalOpen={setIsAddCouponModalOpen}
      />
    </section>
  );
};

export default CouponManagement;
