import React from "react";
import Carousel from "../components/ui/carousel/Carousel";
import Category from "../components/ui/category/Category";

function HomePage() {
  return (
    <div className=" container mx-10 mt-4 px-4 border-2">
      <Carousel />
      <Category />
    </div>
  );
}

export default HomePage;
