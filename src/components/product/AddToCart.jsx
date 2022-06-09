import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function AddToCart({ stock }) {
  const [count, setCount] = useState(1);
  return (
    <div className="my-2 flex flex-col">
      <div className="flex justify-center">
        <AiOutlineMinus
          className="border border-stone-300  w-16 h-16 hover:text-dark-blue"
          role="button"
          onClick={() => setCount(count === 1 ? 1 : count - 1)}
        />
        <p className="border border-stone-300 w-24 h-16 text-6xl text-center ">
          {count}
        </p>
        <AiOutlinePlus
          className="border border-stone-300  w-16 h-16 hover:text-dark-blue"
          role="button"
          onClick={() => setCount(count === stock ? stock : count + 1)}
        />
      </div>
      <button className="relative right-24 top-14 py-3 px-4  mt-4 mx-auto w-56 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-dark-blue text-white hover:bg-button-blue   transition-all text-sm dark:focus:ring-offset-gray-800">
        Add to cart
      </button>
    </div>
  );
}

export default AddToCart;
