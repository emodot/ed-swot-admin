import React from "react";

const CourseTag = ({ course }) => {
  return (
    <span className="bg-error_tint text-error text-[12px] font-albra_sans_sb px-3 py-1 rounded-md">
      {course}
    </span>
  );
};

export default CourseTag;
