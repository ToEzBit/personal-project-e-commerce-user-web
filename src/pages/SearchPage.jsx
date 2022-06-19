import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchProductByCategory } from "../api/product";
import CardContainer from "../components/card/CardContainer";

function SearchPage() {
  const { category } = useParams();
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await searchProductByCategory(category);
        setSearchProducts(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <div className="container m-auto ">
        <img src="https://res.cloudinary.com/myclound/image/upload/v1654712694/codecamp-e-commerce/webImage/header/bg_col_btm_zadpqj.png" />
        <div className="relative">
          <img src="https://res.cloudinary.com/myclound/image/upload/v1654712695/codecamp-e-commerce/webImage/header/titleBg_msuc_jibuuf.jpg" />
          <img
            className="absolute top-8 right-1/4"
            src="https://res.cloudinary.com/myclound/image/upload/v1655609294/codecamp-e-commerce/webImage/header/title_products_cv7aun.png"
          />
        </div>
        <img src="https://res.cloudinary.com/myclound/image/upload/v1654712694/codecamp-e-commerce/webImage/header/bg_col_top_ydf6lm.png" />
      </div>
      <div className="container m-auto  px-4  py-4 bg-home bg-repeat h-full">
        {searchProducts.length <= 0 ? (
          <h1 className="text-center text-5xl text-bold text-gray-400">
            Products not found
          </h1>
        ) : null}
        <CardContainer products={searchProducts} />
      </div>
    </>
  );
}

export default SearchPage;
