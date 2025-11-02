import React from "react";

const StatusBadge = ({ status, data }) => {
  const isActive = status === "Active";
  const isError =
    status === "Error" ||
    status === "Disabled" ||
    status === "Failed";

  let badgeClass = "";
  let dotClass = "";

  if (isActive) {
    badgeClass = "bg-success_fade text-success";
  } else if (isError) {
    badgeClass = "bg-[#FFEDEB] text-[#E53935]";
  } else {
    badgeClass =
      "bg-neutral_disabled text-border_stroke_2";
  }

  return (
    <span
      className={`px-3 py-[3px] rounded-full text-[12px] font-aileron_r ${badgeClass}`}
    >
      {data || status}
    </span>
  );
};

export default StatusBadge;
