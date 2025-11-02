import React from "react";

const FilterBar = ({
  courses,
  courseFilter,
  setCourseFilter,
  statusFilter,
  setStatusFilter,
  search,
  setSearch,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-[14px] font-albra_sans_sb">Course:</label>
          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="border border-neutral_stroke_2 rounded-lg px-3 py-2 text-[14px] bg-white focus:outline-none"
          >
            {courses.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-[14px] font-albra_sans_sb">Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-neutral_stroke_2 rounded-lg px-3 py-2 text-[14px] bg-white focus:outline-none"
          >
            <option>All</option>
            <option>Active</option>
            <option>Disabled</option>
          </select>
        </div>
      </div>

      <div className="relative w-full md:w-[350px]">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-neutral_stroke_2 rounded-lg px-10 py-2 text-[14px] focus:outline-none"
        />
        <span className="absolute left-3 top-2.5 text-neutral_stroke_2">
          🔍
        </span>
      </div>
    </div>
  );
};

export default FilterBar;
