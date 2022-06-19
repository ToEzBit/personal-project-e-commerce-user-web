import React, { useEffect, useState } from "react";

import { getMyOrderExistNewOrders } from "../../api/order";

import MyPurchaseItem from "./MyPurchaseItem";

function MyPurchaseContainer() {
  const [orders, setOrder] = useState();
  console.log(orders);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await getMyOrderExistNewOrders();
      res.reverse();
      setOrder(res);
    };
    fetchOrders();
  }, []);

  return (
    <>
      {orders &&
        orders.map((el, idx) => {
          return (
            <MyPurchaseItem
              key={idx}
              id={el.id}
              addressId={el.addressId}
              OrderProducts={el.OrderProducts}
              discount={el.discount}
              totalPrice={el.totalPrice}
              status={el.status}
              trackingNumber={el.trackingNumber}
            />
          );
        })}
      {orders && orders.length === 0 && <div>Your not have orders.</div>}
    </>
  );
}

export default MyPurchaseContainer;
