import React, { useState } from "react";

function ModalBody({ message, img, upload, setSlipPayment }) {
  return (
    <div className="modal-body relative p-4">
      <p>{message}</p>
      <img src={img} alt="modal" className="w-full h-auto" />
      {upload && (
        <input
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          type="file"
          onChange={(e) => setSlipPayment(e.target.files[0])}
        ></input>
      )}
    </div>
  );
}

export default ModalBody;
