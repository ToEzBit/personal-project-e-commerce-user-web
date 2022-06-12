import axios from "../config/axios";

export const getMyOrdersByStatus = async (status) => {
  const res = await axios.get(`/orders/status?status=${status}`);
  return res.data.orders;
};

export const getMyOrderExistNewOrders = async () => {
  const res = await axios.get("/orders/all");
  return res.data.orders;
};

export const updateOrderProduct = async (action, orderProductId) => {
  await axios.patch(`/orders/orderProduct/${orderProductId}?action=${action}`);
};

export const deleteOrderProduct = async (orderProductId) => {
  await axios.delete(`/orders/${orderProductId}`);
};

export const addOrderProduct = async (orderId, productId, amount) => {
  const productObj = {};
  productObj.productId = productId;
  productObj.amount = amount;
  await axios.post(`/orders/${orderId}`, productObj);
};

export const createOrder = async (productId, amount) => {
  const productObj = {};
  productObj.productId = productId;
  productObj.amount = amount;
  await axios.post(`/orders`, productObj);
};

export const checkout = async (orderId, addressId, slip) => {
  const formData = new FormData();
  formData.append("slip", slip);
  await axios.patch(`/orders/checkout/${orderId}`, { addressId: addressId });
  await axios.patch(`/orders/payment/${orderId}`, formData);
};
