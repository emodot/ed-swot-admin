import React from "react";

const StatusBadge = ({ status, data }) => {
  const isActive = status === "Active";
  const isPaused = status === "Paused";
  const isExpired = status === "Expired";
  const isError =
    status === "Error" ||
    status === "Disabled" ||
    status === "Failed";

  let badgeClass = "";
  let dotClass = "";

  if (isActive) {
    badgeClass = "bg-success_fade text-success";
  } else if (isPaused) {
    badgeClass = "bg-[#FFF2EB] text-[#F5853F]";
  } else if (isExpired) {
    badgeClass = "bg-neutral_disabled text-border_stroke_2";
  } else if (isError) {
    badgeClass = "bg-[#FFEDEB] text-[#E53935]";
  } else {
    badgeClass =
      "bg-neutral_disabled text-border_stroke_2";
  }

  return (
    <span
      className={`px-3 py-[3px] rounded-full text-[12px] font-aileron_r flex items-center gap-1.5 ${badgeClass}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${
        isActive ? "bg-success" :
        isPaused ? "bg-[#F5853F]" :
        isExpired ? "bg-border_stroke_2" :
        isError ? "bg-[#E53935]" :
        "bg-border_stroke_2"
      }`}></span>
      {data || status}
    </span>
  );
};

export default StatusBadge;
