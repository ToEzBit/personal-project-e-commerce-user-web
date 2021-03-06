import React from "react";
import { Link } from "react-router-dom";

function Card({ title, productName, thumbnail, id }) {
  const shortProductName =
    productName.length > 25
      ? productName.substring(0, 25) + "..."
      : productName;
  return (
    <div className="flex justify-center ">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <Link to={`/product/${id}`}>
          <div className="rounded-t-lg relative overflow-hidden bg-no-repeat bg-cover ">
            <img
              src={thumbnail}
              className=" rounded-t-lg hover:scale-110 transition duration-300 ease-in-out hover:grayscale-50"
              alt={productName}
            />
          </div>
        </Link>
        <div className="p-6">
          {title === "Limited" ? (
            <span class="bg-[#c70c45] text-white text-sm  mr-2 px-2.5 py-0.5 rounded   font-bold">
              LIMITED
            </span>
          ) : null}

          {title === "Event" ? (
            <span class="bg-[#3db88f] text-white text-sm  mr-2 px-2.5 py-0.5 rounded   font-bold">
              EVENT
            </span>
          ) : null}

          <Link to={`/product/${id}`}>
            <h5
              className="text-gray-900 hover:text-dark-blue text-xl font-bold mb-2"
              role="button"
            >
              {shortProductName}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
