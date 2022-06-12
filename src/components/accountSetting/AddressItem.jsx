import React from "react";

function AddressItem({ name, province, district, postalCode, description }) {
  return (
    <div className="bg-white rounded-xl px-4 py-4 my-4 w-fit">
      <h1 className="text-xl text-dark-blue capitalize">{name}</h1>
      <div>
        <p>{province}</p>
        <p>{district}</p>
        <p>{postalCode}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AddressItem;
