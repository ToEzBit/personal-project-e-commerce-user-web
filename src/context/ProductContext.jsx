import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";

const ProductContext = createContext();
function ProductContextProvider({ children }) {
  const [products, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("/products/active");
        setProduct(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
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
