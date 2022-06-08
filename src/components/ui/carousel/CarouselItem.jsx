import React from "react";
import { Link } from "react-router-dom";

function CarouselItem({ src, active }) {
  return (
    <div
      className={`carousel-item  relative float-left w-full ${
        active ? "active" : ""
      }`}
    >
      <img src={src} className="block w-full" alt="Wild Landscape" />
    </div>
  );
}

export default CarouselItem;
