import React, { useState, useMemo } from "react";
import FilterBar from "./FilterBar";
import TutorRow from "./TutorRow";

const CustomTable = ({ tutors }) => {
  const [courseFilter, setCourseFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const courses = useMemo(
    () => ["All", ...new Set(tutors.map((t) => t.course))],
    [tutors]
  );

  const filteredTutors = useMemo(() => {
    return tutors.filter((tutor) => {
      const matchesCourse =
        courseFilter === "All" || tutor.course === courseFilter;
      const matchesStatus =
        statusFilter === "All" || tutor.status === statusFilter;
      const matchesSearch = tutor.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCourse && matchesStatus && matchesSearch;
    });
  }, [tutors, courseFilter, statusFilter, search]);

  return (
    <div className="p-4 w-full overflow-x-auto">
      <FilterBar
        courses={courses}
        courseFilter={courseFilter}
        setCourseFilter={setCourseFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        search={search}
        setSearch={setSearch}
      />

      <table className="min-w-full mt-6">
        <thead>
          <tr className="border-b border-neutral_stroke_2 text-left text-[14px] font-albra_sans_sb text-brand_secondary">
            <th className="py-3">Tutors</th>
            <th className="py-3">Courses</th>
            <th className="py-3">Email Address</th>
            <th className="py-3">Status</th>
            <th className="py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTutors.map((tutor, index) => (
            <TutorRow key={index} tutor={tutor} />
          ))}
        </tbody>
      </table>

      {filteredTutors.length === 0 && (
        <p className="text-center text-neutral_stroke_2 mt-6">
          No tutors found
        </p>
      )}
    </div>
  );
};

export default CustomTable;
