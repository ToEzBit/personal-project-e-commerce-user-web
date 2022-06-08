import React from "react";
import DropDownItem from "./DropDownItem";

function DropDownContainer({ icon, children }) {
  return (
    <div className="dropdown relative">
      <button
        className="mr-4 dropdown-toggle hidden-arrow flex items-center"
        id="dropdownMenuButton1"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {icon}
      </button>
      <ul
        className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0"
        aria-labelledby="dropdownMenuButton1"
      >
        {children}
      </ul>
    </div>
  );
}

export default DropDownContainer;
