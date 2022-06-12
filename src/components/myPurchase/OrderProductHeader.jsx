import React from "react";

function OrderProductHeader() {
  return (
    <>
      <div className="flex mt-10 mb-5">
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
          Product Details
        </h3>
        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
          Quantity
        </h3>
        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
          Price
        </h3>
        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
          Total
        </h3>
      </div>
    </>
  );
}

export default OrderProductHeader;
