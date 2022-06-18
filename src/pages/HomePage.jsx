import React from "react";
import { useProduct } from "../context/ProductContext";
import CardContainer from "../components/card/CardContainer";
import Carousel from "../components/home/Carousel";
import Category from "../components/ui/category/Category";

function HomePage() {
  const { standardProducts, limitedProducts, eventProducts } = useProduct();

  return (
    <div className=" container m-auto mt-4 px-4  bg-home bg-repeat">
      <Carousel />
      <Category />
      <CardContainer title="Ranking" products={standardProducts} />
      <CardContainer title="Limited" products={limitedProducts} />
      <CardContainer title="Event" products={eventProducts} />
    </div>
  );
}

export default HomePage;
