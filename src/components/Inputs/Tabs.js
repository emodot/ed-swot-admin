import React, { useState } from "react";

export default function Tabs({ tabs, onChange }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <div className="rounded-[5px] p-[1px] bg-gradient-to-bl from-brand_primary to-dark_brand_primary w-fit mb-8">
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-[5px] px-2 py-1 w-fit bg-white">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleClick(tab)}
            className={`px-4 py-2 rounded-[5px] text-14 font-aileron_r lg:min-w-[11rem] ${
              activeTab === tab
                ? "bg-brand_secondary text-white"
                : "text-brand_secondary hover:bg-light_brand_primary"
            }`}
          >
            {tab}{" "}
          </button>
        ))}{" "}
      </div>
    </div>
  );
}
