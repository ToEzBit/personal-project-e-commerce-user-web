import React, { useState } from "react";
import { createAddress } from "../../api/address";

function NewAddress() {
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !province ||
      !district ||
      !postalCode ||
      !description ||
      !password
    ) {
      alert("Please fill all fields");
      return;
    }
    const addressObj = {};
    addressObj.name = name;
    addressObj.province = province;
    addressObj.district = district;
    addressObj.postalCode = postalCode;
    addressObj.description = description;
    await createAddress(addressObj, password);
    location.reload(false);
  };

  return (
    <div className=" rounded-xl px-4 py-4 my-4 w-fit">
      <form onSubmit={handleSubmit}>
        <div className="new-address-input">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="mx-4"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="new-address-input">
          <label htmlFor="Province">Province</label>
          <input
            id="Province"
            className="mx-4"
            type="text"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
        </div>
        <div className="new-address-input">
          <label htmlFor="District">District</label>
          <input
            name="District"
            className="mx-4"
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div className="new-address-input">
          <label htmlFor="Postal">Postal Code</label>
          <input
            id="Postal"
            className="mx-4"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="new-address-input">
          <label htmlFor="Description">Description</label>
          <input
            id="Description"
            className="mx-4"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="new-address-input">
          <label htmlFor="password">password</label>
          <input
            id="password"
            className="mx-4"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="px-6
      bg-dark-blue font-semibold hover:bg-button-blue py-3 text-sm text-white rounded-full w-full transition duration-150 ease-in-out"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default NewAddress;
