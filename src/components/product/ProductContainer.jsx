import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../api/getProduct";
import {
  addOrderProduct,
  createOrder,
  getMyOrdersByStatus,
} from "../../api/order";
import AddToCart from "./AddToCart";
import Carousel from "./Carousel";

function ProductContainer() {
  const params = useParams();
  const navigate = useNavigate();
  const [existOrder, setExistOrder] = useState(false);
  const [existProductInOrder, setExistProductInOrder] = useState(false);
  const [order, setOrder] = useState(null);
  const [amount, setAmount] = useState(1);

  const { productId } = params;

  const [product, setProduct] = useState({});

  const standardImages = product.ProductImages?.filter(
    (el) => el.role === "standard"
  );

  const highlightImages = product.ProductImages?.filter(
    (el) => el.role === "highlight"
  );

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

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const order = await getMyOrdersByStatus("neworder");
        if (order.length > 0) {
          setOrder(order[0]);
          setExistOrder(true);
          const existProductInOrder = order[0].OrderProducts.filter(
            (el) => el.Product.id === Number(productId)
          );
          if (existProductInOrder.length > 0) {
            setExistProductInOrder(true);
          }
        } else {
          setExistOrder(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrder();
  }, []);

  const handleClickAddToCart = () => {
    addOrderProduct(order.id, productId, amount);
    navigate("/cart");
    location.reload(false);
  };

  const handleClickCreateOrder = () => {
    createOrder(productId, amount);
    navigate("/cart");
    location.reload(false);
  };
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
          {existProductInOrder || product.stock == "0" ? (
            <p className="text-xl text-dark-blue font-bold mx-20 my-24">
              {existProductInOrder
                ? "You have already this product in cart"
                : "This product is out of stock"}
            </p>
          ) : (
            <div className="flex justify-between mx-2 mt-8">
              <p className="text-xl my-7 text-stone-400">Quantity</p>
              <AddToCart
                stock={product?.stock}
                setAmount={setAmount}
                handleClickAddToCart={handleClickAddToCart}
                handleClickCreateOrder={handleClickCreateOrder}
                existOrder={existOrder}
                existProductInOrder={existProductInOrder}
              />
              <p className="text-xl my-7 text-stone-400">{`${product?.stock} pieces available`}</p>
            </div>
          )}
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
        <img className="w-full" key={el.id} src={el.image} />
      ))}
    </>
  );
}

export default ProductContainer;