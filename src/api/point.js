import axios from "../config/axios";

export const addPoint = async (point) => {
  await axios.patch("/users/point", { point });
};
