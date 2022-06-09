import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";

import CardItem from "./CardItem";

function Product({ title }) {
  const { products } = useProduct();
  return (
    <div>
      <h1>{title}</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {products?.map((el) => {
          return (
            <CardItem
              key={el.id}
              title={el.productName}
              thumbnail={el.ProductImages[0].image}
              id={el.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;
