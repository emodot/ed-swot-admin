import React, { useMemo, useState } from "react";
import { SearchIcon } from "constants/dashboard_icons";

const DataTable = ({
  data = [],
  columns = [],
  filters = {},
  itemsPerPage = 5,
  customRenderers = {},
  searchPlaceholder = "Search...",
}) => {
  const [search, setSearch] = useState("");
  const [filterValues, setFilterValues] = useState(
    Object.keys(filters).reduce((acc, key) => ({ ...acc, [key]: "All" }), {})
  );
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);

  // ---- Filtering ----
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      let matchesAllFilters = true;

      // Apply each filter dropdown
      for (const [key, selectedValue] of Object.entries(filterValues)) {
        if (selectedValue !== "All" && item[key] !== selectedValue) {
          matchesAllFilters = false;
          break;
        }
      }

      // Search by name or any column text
      const searchMatch = Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesAllFilters && searchMatch;
    });
  }, [data, search, filterValues]);

  // ---- Sorting ----
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    const sorted = [...filteredData].sort((a, b) => {
      const aVal = a[sortConfig.key]?.toString().toLowerCase() || "";
      const bVal = b[sortConfig.key]?.toString().toLowerCase() || "";
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [filteredData, sortConfig]);

  // ---- Pagination ----
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );  

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key && prev.direction === "asc")
        return { key, direction: "desc" };
      return { key, direction: "asc" };
    });
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return "↕️";
    return sortConfig.direction === "asc" ? "▲" : "▼";
  };

  return (
    <div className="p-6 w-full overflow-x-auto border border-neutral_stroke_1 rounded-lg">
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex flex-wrap items-center gap-3">
          {Object.entries(filters).map(([key, options]) => (
            <div key={key} className="flex items-center gap-2">
              <label className="text-[14px] font-aileron_r capitalize">
                {key}:
              </label>
              <select
                value={filterValues[key]}
                onChange={(e) =>
                  setFilterValues((prev) => ({
                    ...prev,
                    [key]: e.target.value,
                  }))
                }
                className="border border-neutral_stroke_2 rounded-lg px-3 py-2 text-[14px] bg-white focus:outline-none"
              >
                {options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="relative w-full md:w-[350px]">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full border border-neutral_stroke_2 rounded-lg px-10 py-2 text-[14px] focus:outline-none"
          />
          <span className="absolute left-3 top-2.5 text-neutral_stroke_2">
            <SearchIcon size={20} />
          </span>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-neutral_stroke_2 text-left text-[14px] font-albra_sans_sb text-brand_secondary">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                className="py-3 font-aileron_b text-14 cursor-pointer select-none"
              >
                {col.label} 
                {/* {renderSortIcon(col.key)} */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => (
            <tr
              key={i}
              className="border-b border-neutral_stroke_2 hover:bg-neutral_disabled transition h-[60px]"
            >
              {columns.map((col) => (
                <td key={col.key} className="py-3 text-[14px]">
                  {customRenderers[col.key] ? (
                    customRenderers[col.key](row, col)
                  ) : col.key === "course" ? (
                    // status is either row.status or row.statusbar (if exists)
                    // fallback to "Active" if not present
                    (() => {
                      let StatusBadge;
                      try {
                        StatusBadge = require("./StatusBadge").default;
                      } catch (e) {
                        StatusBadge = null;
                      }
                      return StatusBadge ? (
                        <StatusBadge
                          status={row.status || row.statusbar || "Error"}
                          data={row[col.key]}
                        />
                      ) : (
                        row[col.key]
                      );
                    })()
                  ) : typeof row[col.key] === "string" ||
                    typeof row[col.key] === "number" ? (
                    row[col.key]
                  ) : (
                    JSON.stringify(row[col.key])
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Empty state */}
      {filteredData.length === 0 && (
        <p className="text-center text-neutral_stroke_2 mt-6">No data found</p>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-neutral_stroke_2 rounded-lg text-[14px] disabled:opacity-40"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg text-[14px] ${
                currentPage === i + 1
                  ? "bg-success text-white"
                  : "border border-neutral_stroke_2"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-neutral_stroke_2 rounded-lg text-[14px] disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
