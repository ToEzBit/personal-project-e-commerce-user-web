import React from "react";
import CarouselContainer from "./CarouselContainer";
import CarouselItem from "./CarouselItem";

function Carousel() {
  return (
    <div className="flex justify-center">
      <CarouselContainer>
        <CarouselItem
          src="https://res.cloudinary.com/myclound/image/upload/v1654691032/codecamp-e-commerce/carousel/bnr_bb_rx-93ff_vgundam-1_pwqsv1.jpg"
          active={true}
        />
        <CarouselItem src="https://res.cloudinary.com/myclound/image/upload/v1654691033/codecamp-e-commerce/carousel/bnr_limited5116_ebtktg.jpg" />
        <CarouselItem src="https://res.cloudinary.com/myclound/image/upload/v1654691032/codecamp-e-commerce/carousel/%E3%82%A6%E3%82%A7%E3%83%AB%E3%82%AB%E3%83%A0%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%98%E3%82%9A%E3%83%BC%E3%83%B3%E3%83%8F%E3%82%99%E3%83%8A%E3%83%BC_myq7kp.jpg" />
        <CarouselItem src="https://res.cloudinary.com/myclound/image/upload/v1654691032/codecamp-e-commerce/carousel/bnr_rg_rx-93ff_vgundam-1_k2amcq.jpg" />
        <CarouselItem src="https://res.cloudinary.com/myclound/image/upload/v1654691032/codecamp-e-commerce/carousel/bnr_eg_rx-93ff_vgundam-1_kxtkyg.jpg" />
        <CarouselItem src="https://res.cloudinary.com/myclound/image/upload/v1654691032/codecamp-e-commerce/carousel/bnr_open_epovvf.jpg" />
        <CarouselItem src="https://res.cloudinary.com/myclound/image/upload/v1654691032/codecamp-e-commerce/carousel/bnr_limited5117_qwhys9.jpg" />
      </CarouselContainer>
    </div>
  );
}

export default Carousel;
