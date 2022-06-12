import React, { useEffect, useState } from "react";

import { getMyOrderExistNewOrders } from "../../api/order";

import MyPurchaseItem from "./MyPurchaseItem";

function MyPurchaseContainer() {
  const [orders, setOrder] = useState();

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await getMyOrderExistNewOrders();
      setOrder(res);
    };
    fetchOrders();
  }, []);

  console.log(orders);
  return (
    <>
      {orders &&
        orders.map((el, idx) => {
          return (
            <MyPurchaseItem
              key={idx}
              addressId={el.addressId}
              OrderProducts={el.OrderProducts}
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
