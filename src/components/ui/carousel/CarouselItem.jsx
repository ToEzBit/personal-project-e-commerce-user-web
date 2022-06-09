import React from "react";
import { Link } from "react-router-dom";

function CarouselItem({ src, active }) {
  return (
    <div
      className={`carousel-item ${
        active ? "active" : ""
      } relative float-left w-full `}
    >
      <img src={src} className="block w-full " alt="Wild Landscape" />
    </div>
  );
}

export default CarouselItem;
