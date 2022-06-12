import React from "react";

function ModalBtn({ mainBtnMessage }) {
  return (
    <button
      type="button"
      className="px-6
      bg-dark-blue font-semibold hover:bg-button-blue py-3 text-sm text-white rounded-full w-full transition duration-150 ease-in-out"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      {mainBtnMessage}
    </button>
  );
}

export default ModalBtn;
