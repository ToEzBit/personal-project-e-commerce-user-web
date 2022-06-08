import React from "react";
import { Link } from "react-router-dom";

function CategoryContainer({ src, to }) {
  return (
    <>
      <Link to={to}>
        <img src={src} className="w-36" />
      </Link>
    </>
  );
}

export default CategoryContainer;
