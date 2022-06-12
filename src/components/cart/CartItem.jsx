import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteOrderProduct, updateOrderProduct } from "../../api/order";

function CartItem({
  amount,
  price,
  id,
  productName,
  category,
  img,
  stock,
  setRender,
}) {
  const handleUpdateCartItem = async (action) => {
    await updateOrderProduct(action, id);
    setRender((e) => !e);
  };

  const handleDeleteCartItem = async () => {
    await deleteOrderProduct(id);
    setRender((e) => !e);
  };

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="w-14" src={img} alt={productName} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{productName}</span>
          <span className="text-red-500 text-xs">{category.toUpperCase()}</span>
          <p
            className="font-semibold hover:text-red-500 text-gray-500 text-xs "
            role="button"
            onClick={() => handleDeleteCartItem()}
          >
            Remove
          </p>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        {amount > 1 && (
          <svg
            className="fill-current text-gray-600 w-3"
            viewBox="0 0 448 512"
            role="button"
            onClick={() => handleUpdateCartItem("decrease")}
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        )}

        <p className="mx-2 border text-center w-8" type="text">
          {amount}
        </p>
        {stock > amount && (
          <svg
            className="fill-current text-gray-600 w-3"
            viewBox="0 0 448 512"
            role="button"
            onClick={() => handleUpdateCartItem("increase")}
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        )}
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {price * amount}
      </span>
    </div>
  );
}

export default CartItem;
