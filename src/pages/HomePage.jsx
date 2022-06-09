import React from "react";
import CardContainer from "../components/card/CardContainer";
import Carousel from "../components/home/Carousel";
import Category from "../components/ui/category/Category";

function HomePage() {
  return (
    <div className=" container m-auto mt-4 px-4  bg-home bg-repeat">
      <Carousel />
      <Category />
      <CardContainer title="Limited Item" />
      <CardContainer title="Limited Item" />
    </div>
  );
}

export default HomePage;
