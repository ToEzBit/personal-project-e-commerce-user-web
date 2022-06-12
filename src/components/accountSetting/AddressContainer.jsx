import React from "react";
import AddressItem from "./AddressItem";
import NewAddress from "./NewAddress";
function AddressContainer({ addresses }) {
  return (
    <>
      <div className="flex justify-around flex-wrap">
        {addresses &&
          addresses.map((address) => (
            <AddressItem
              key={address.id}
              name={address.name}
              province={address.province}
              district={address.district}
              postalCode={address.postalCode}
              description={address.description}
            />
          ))}
      </div>
      <NewAddress />
    </>
  );
}

export default AddressContainer;
