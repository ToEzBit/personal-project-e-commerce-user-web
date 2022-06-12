import axios from "../config/axios";

export const createAddress = async (input, password) => {
  const res = await axios.patch(`/users/updateProfile/`, {
    address: input,
    password,
  });
  return res.data.product;
};
