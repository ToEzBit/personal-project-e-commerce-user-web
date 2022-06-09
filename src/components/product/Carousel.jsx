import React from "react";
import CarouselContainer from "../ui/carousel/CarouselContainer";
import CarouselItem from "../ui/carousel/CarouselItem";
function Carousel({ imageArr }) {
  return (
    <CarouselContainer width="max-w-lg">
      {imageArr?.map((el, idx) =>
        idx == 1 ? (
          <CarouselItem key={el.id} src={el.image} active={true} />
        ) : (
          <CarouselItem key={el.id} src={el.image} />
        )
      )}
    </CarouselContainer>
  );
}

export default Carousel;
