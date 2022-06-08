import React from "react";
import CategoryContainer from "./CategoryContainer";

function Category() {
  return (
    <div className="flex justify-around mt-8 mx-24 ">
      <CategoryContainer
        to="/product"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/uz_dgfqrd.png"
      />
      <CategoryContainer
        to="/product"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/30_hvkwae.png"
      />
      <CategoryContainer
        to="/product"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/hb_qt2fvn.png"
      />
      <CategoryContainer
        to="/product"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/l4_tehctp.png"
      />
      <CategoryContainer
        to="/product"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/lv_jt5j8e.png"
      />
      <CategoryContainer
        to="/product"
        src="https://res.cloudinary.com/myclound/image/upload/v1654692265/codecamp-e-commerce/category/gl_okydny.png"
      />
    </div>
  );
}

export default Category;
