import React from "react";

import CardItem from "./CardItem";

function Product({ title, products }) {
  return (
    <div className="my-4">
      {title === "Ranking" ? (
        <img
          className="my-8"
          src="https://res.cloudinary.com/myclound/image/upload/v1655581481/codecamp-e-commerce/webImage/icon/title_ranking_pc_copy_bciiov.png"
        />
      ) : null}
      {title === "Limited" ? (
        <img
          className="my-8"
          src="https://res.cloudinary.com/myclound/image/upload/v1655581485/codecamp-e-commerce/webImage/icon/title_limited_pc_qovpgi.png"
        />
      ) : null}
      {title === "Event" ? (
        <img
          className="my-8"
          src="https://res.cloudinary.com/myclound/image/upload/v1655581485/codecamp-e-commerce/webImage/icon/title_event_pc_ziutfw.png"
        />
      ) : null}
      <div className="grid grid-cols-4 gap-4 ">
        {products?.map((el) => {
          return (
            <CardItem
              key={el.id}
              title={title}
              productName={el.productName}
              thumbnail={el.ProductImages[0].image}
              id={el.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;
