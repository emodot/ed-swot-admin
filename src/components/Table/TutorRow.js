import React from "react";
import StatusBadge from "./StatusBadge";
import CourseTag from "./CourseTag";

const TutorRow = ({ tutor }) => {
  return (
    <tr className="border-b border-neutral_stroke_2 hover:bg-neutral_disabled transition">
      <td className="py-4 flex items-center gap-3">
        <img
          src={tutor.image}
          alt={tutor.name}
          className={`w-10 h-10 rounded-full object-cover ${
            tutor.status === "Disabled" ? "grayscale" : ""
          }`}
        />
        <span className="text-[14px] font-albra_sans_m">{tutor.name}</span>
      </td>
      <td className="py-4">
        <CourseTag course={tutor.course} />
      </td>
      <td className="py-4 text-[14px] text-brand_secondary">{tutor.email}</td>
      <td className="py-4">
        <StatusBadge status={tutor.status} />
      </td>
      <td className="py-4">
        <button className="hover:opacity-75 transition">👁️</button>
      </td>
    </tr>
  );
};

export default TutorRow;
