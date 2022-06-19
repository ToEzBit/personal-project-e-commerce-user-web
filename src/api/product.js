import axios from "../config/axios";

export const getProductById = async (id) => {
  const res = await axios.get(`/products/active/${id}`);
  return res.data.product;
};

export const searchProductByCategory = async (category) => {
  const res = await axios.get(`/products/search/${category}`);
  return res.data.products;
};
