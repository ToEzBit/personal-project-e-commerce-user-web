import React from "react";

function OrderProductItem({
  img,
  productName,
  category,
  price,
  amount,
  stock,
}) {
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="w-14" src={img} alt={productName} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{productName}</span>
          <span className="text-red-500 text-xs">{category.toUpperCase()}</span>
        </div>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">{amount}</span>

      <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {price * amount}
      </span>
    </div>
  );
}

export default OrderProductItem;
