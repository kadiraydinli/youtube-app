import React from "react";
import dataSide from "../assets/data/dataSide";

const Sidebar: React.FC = () => {
  return (
    /* absolute bg-white z-50 transition duration-500 ease-in-out -translate-x-full */
    <div
      id="sidebar"
      className="max-w-[240px] border-r h-screen absolute bg-white z-50 transition duration-500 ease-in-out -translate-x-full"
    >
      {dataSide.map((item, index) => (
        <div
          key={`side-${index}`}
          className="max-w-[240px] flex items-center space-x-5 px-3 py-2 m-2 rounded-lg hover:bg-gray-200 cursor-pointer"
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
