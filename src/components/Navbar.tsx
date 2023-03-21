import React from "react";
import icons from "../assets/icons";
import { YoutubeLogo } from "../assets/images";

const Navbar: React.FC = () => {
  const onSidebarToggle = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar?.classList.toggle("-translate-x-full");
  };
  return (
    <div className="w-full flex items-center justify-between h-20 px-3 border-b">
      <div className="w-3/12 flex items-center space-x-4 mx-4">
        <icons.menu className="icon-style" onClick={onSidebarToggle} />
        <img className="w-32" src={YoutubeLogo} alt="" />
      </div>

      <div className="w-6/12 flex items-center">
        <input
          className="flex-1 h-10 border rounded-l-full px-4"
          type="text"
          placeholder="Ara"
        />
        <div className="flex items-center justify-center w-16 h-10 rounded-r-full bg-gray-100 cursor-pointer">
          <icons.search className="icon-style" />
        </div>
        <div className="icon-style-rounded mx-2">
          <icons.microphone className="icon-style" />
        </div>
      </div>

      <div className="w-3/12 flex items-center justify-end space-x-5">
        <div className="icon-style-rounded">
          <icons.video className="icon-style" />
        </div>
        <div className="icon-style-rounded">
          <icons.notification className="icon-style" />
        </div>
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
