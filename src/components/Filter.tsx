import React from "react";
import dataFilter from "../assets/data/dataFilter";

const Filter: React.FC = () => {
  return (
    <div className="flex max-w-[85vw] overflow-hidden overflow-x-auto gap-2 mb-3">
      {dataFilter.map((item, index) => (
        <div
          key={`filter-${index}`}
          className={`px-3 py-2 rounded-lg cursor-pointer ${
            index % 2 === 0 ? "active-filter-color" : "deactive-filter-color"
          }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Filter;
