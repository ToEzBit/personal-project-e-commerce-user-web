import React from "react";
import { Link } from "react-router-dom";

function DropDownItem({ title, to, onClick }) {
  return (
    <li>
      <Link
        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
        to={to || ""}
        onClick={onClick}
      >
        {title}
      </Link>
    </li>
  );
}

export default DropDownItem;
