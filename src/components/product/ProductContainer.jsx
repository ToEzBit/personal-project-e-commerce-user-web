import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/getProduct";
import AddToCart from "./AddToCart";
import Carousel from "./Carousel";

function ProductContainer() {
  const params = useParams();
  const { productId } = params;

  const [product, setProduct] = useState({});

  const standardImages = product.ProductImages?.filter(
    (el) => el.role === "standard"
  );

  const highlightImages = product.ProductImages?.filter(
    (el) => el.role === "highlight"
  );

  console.log(product);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(productId);
        setProduct(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <span
        className={`inline-flex items-center  gap-1.5 py-1.5 pl-6 my-4  rounded-lg text-xl font-medium capitalize ${
          product?.role === "limited" ? "bg-red-400 w-28" : "bg-dark-blue w-32"
        }  text-white`}
      >
        {product?.role}
      </span>
      <h1 className="text-dark-blue text-3xl font-bold ">
        {product?.productName}
      </h1>
      <div className="flex justify-around mt-4 ">
        <Carousel imageArr={standardImages} />
        <div className="max-w-lg ">
          <p className="text-4xl text-dark-blue font-bold">{`Price ${product?.price} 円 `}</p>
          <p className="border-2 border-slate-600 p-8 mt-4">
            {product?.mainDescription}
          </p>

          <div className="flex justify-between mx-2 mt-8">
            <p className="text-xl my-7 text-stone-400">Quantity</p>
            <AddToCart stock={product?.stock} />
            <p className="text-xl my-7 text-stone-400">{`${product?.stock} pieces available`}</p>
          </div>
        </div>
      </div>
      {product?.subDescription1 ? (
        <p className="border-2 border-slate-600 p-8 my-6">
          {product?.subDescription1}
        </p>
      ) : null}
      {product?.subDescription2 ? (
        <p className="border-2 border-slate-600 p-8 my-6">
          {product?.subDescription2}
        </p>
      ) : null}
      {highlightImages?.map((el) => (
        <img className="w-full mt-10" key={el.id} src={el.image} />
      ))}
    </>
  );
}

export default ProductContainer;
