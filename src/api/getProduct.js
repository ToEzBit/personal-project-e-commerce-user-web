import axios from "../config/axios";

export const getProductById = async (id) => {
  const res = await axios.get(`/products/${id}`);
  return res.data.product;
};
