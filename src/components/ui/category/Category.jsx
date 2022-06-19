import React from "react";
import CategoryContainer from "./CategoryContainer";

function Category() {
  return (
    <div className="flex justify-around mt-8 mx-24 ">
      <CategoryContainer
        to="product/search/sd"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/uz_dgfqrd.png"
      />
      <CategoryContainer
        to="product/search/hg"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/30_hvkwae.png"
      />
      <CategoryContainer
        to="product/search/rg"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/hb_qt2fvn.png"
      />
      <CategoryContainer
        to="product/search/mg"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/l4_tehctp.png"
      />
      <CategoryContainer
        to="product/search/pg"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/gl_okydny.png"
      />
    </div>
  );
}

export default Category;
