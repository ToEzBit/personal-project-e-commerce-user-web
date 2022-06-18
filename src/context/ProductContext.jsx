import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";

const ProductContext = createContext();
function ProductContextProvider({ children }) {
  const [products, setProduct] = useState(null);
  const [standardProducts, setStandardProducts] = useState([]);
  const [limitedProducts, setLimitedProducts] = useState([]);
  const [eventProducts, setEventProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("/products/active");
        setProduct(res.data.products);
        const standard = res.data.products.filter(
          (el) => el.role === "standard"
        );
        const limited = res.data.products.filter((el) => el.role === "limited");
        const event = res.data.products.filter((el) => el.role === "event");
        setStandardProducts(standard);
        setLimitedProducts(limited);
        setEventProducts(event);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, standardProducts, limitedProducts, eventProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => {
  const ctx = useContext(ProductContext);
  return ctx;
};

export default ProductContextProvider;
export { useProduct };
