import React, { useState, useEffect } from "react";
import OrderProductItem from "./OrderProductItem";
import OrderProductHeader from "./OrderProductHeader";
import { useAuth } from "../../context/AuthContext";

function MyPurchaseItem({
  addressId,
  OrderProducts,
  totalPrice,
  status,
  trackingNumber,
}) {
  const { user } = useAuth();
  const [address, setAddress] = useState("");
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    const filAddress = user.Addresses.filter((el) => el.id === addressId);
    setAddress(filAddress[0]);
    if (status === "pending") {
      setStatusColor("text-yellow-300");
    }
    if (status === "payment") {
      setStatusColor("text-blue-300");
    }

    if (status === "delivered") {
      setStatusColor("text-orange-300");
    }
    if (status === "succeed") {
      setStatusColor("text-green-300");
    }
    if (status === "cancelled") {
      setStatusColor("text-red-300");
    }
  }, []);

  // console.log(OrderProducts);

  return (
    <div className="bg-white w-full rounded-lg my-4  px-8 py-8 ">
      <div className="flex justify-between">
        <p>{user.userName || Doge}</p>
        <p className={`text-2xl capitalize font-bold ${statusColor}`}>
          {status}
        </p>
      </div>
      <hr className="my-4 text-slate-300" />
      <div>
        <OrderProductHeader />
        {OrderProducts.map((el, idx) => {
          return (
            <OrderProductItem
              key={idx}
              img={el.Product.ProductImages[0].image}
              productName={el.Product.productName}
              category={el.Product.category}
              price={el.price}
              amount={el.amount}
            />
          );
        })}
      </div>
      <hr className="my-4 text-slate-300" />
      <div className="flex justify-around">
        <div>
          <p>Tracking Number</p>
          <p>{trackingNumber || "wating"}</p>
        </div>
        <p>{`Delivery to ${address.name}`}</p>
        <div>
          <p>Total Price</p>
          <p>{totalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default MyPurchaseItem;
