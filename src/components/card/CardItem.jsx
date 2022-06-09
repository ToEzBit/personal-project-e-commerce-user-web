import React from "react";
import { Link } from "react-router-dom";

function Card({ title, thumbnail, id }) {
  return (
    <div className="flex justify-center ">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <Link to={`/product/${id}`}>
          <div className="rounded-t-lg relative overflow-hidden bg-no-repeat bg-cover ">
            <img
              src={thumbnail}
              className=" rounded-t-lg hover:scale-110 transition duration-300 ease-in-out hover:grayscale-50"
              alt={title}
            />
          </div>
        </Link>
        <div className="p-6">
          <div className="bg-red-500 w-16">
            <p className=" text-white text-xs rounded  ml-2">LIMITED</p>
          </div>
          <Link to={`/product/${id}`}>
            <h5
              className="text-gray-900 hover:text-dark-blue text-xl font-bold mb-2"
              role="button"
            >
              {title}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
