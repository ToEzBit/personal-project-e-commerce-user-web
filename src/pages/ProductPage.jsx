import React from "react";

import ProductContainer from "../components/product/ProductContainer";

function ProductPage() {
  return (
    <>
      <div className="container m-auto ">
        <img src="https://res.cloudinary.com/myclound/image/upload/v1654712694/codecamp-e-commerce/webImage/header/bg_col_btm_zadpqj.png" />
        <img src="https://res.cloudinary.com/myclound/image/upload/v1654712695/codecamp-e-commerce/webImage/header/titleBg_msuc_jibuuf.jpg" />
        <img src="https://res.cloudinary.com/myclound/image/upload/v1654712694/codecamp-e-commerce/webImage/header/bg_col_top_ydf6lm.png" />
      </div>
      <div className="container mx-auto  px-4  bg-shop  bg-repeat ">
        <ProductContainer />
      </div>
      <div></div>
      <img
        className="container m-auto h-16"
        src="https://res.cloudinary.com/myclound/image/upload/v1654712694/codecamp-e-commerce/webImage/header/bg_col_btm_zadpqj.png"
      />
    </>
  );
}

export default ProductPage;
