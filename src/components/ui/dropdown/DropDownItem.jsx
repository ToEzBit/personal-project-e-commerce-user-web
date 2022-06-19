import React from "react";
import { Link } from "react-router-dom";

function DropDownItem({ title, onClick }) {
  return (
    <li>
      <p
        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
        onClick={onClick}
        role="button"
      >
        {title}
      </p>
    </li>
  );
}

export default DropDownItem;
