import React, { useEffect, useState } from "react";
import { getMyOrdersByStatus } from "../../api/order";
import { useAuth } from "../../context/AuthContext";
import CartItem from "./CartItem";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Back from "./Back";

function CartContainer() {
  const [orders, setOrders] = useState();
  const [render, setRender] = useState(false);

  const { user } = useAuth();
  useEffect(() => {
    const fetchOrder = async () => {
      const orders = await getMyOrdersByStatus("neworder");
      setOrders(orders[0]);
    };
    fetchOrder();
  }, [render]);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <Header amount={orders?.OrderProducts.length} />
            {orders &&
              orders.OrderProducts.map((el) => {
                return (
                  <CartItem
                    key={el.id}
                    amount={el.amount}
                    price={el.price}
                    id={el.id}
                    productName={el.Product.productName}
                    category={el.Product.category}
                    img={el.Product.ProductImages[0].image}
                    stock={el.Product.stock}
                    setRender={setRender}
                  />
                );
              })}
            <Back />
          </div>
          <Sidebar
            totalPrice={orders?.totalPrice}
            addresses={user.Addresses}
            orderId={orders?.id}
            isExistOrderProduct={orders?.OrderProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
