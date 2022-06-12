import React from "react";

function ModalFooter({ actionBtnMessage, onClick }) {
  return (
    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
      <button
        type="button"
        className="px-6
          py-2.5
          bg-button-hover
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md

          transition
          duration-150
          ease-in-out"
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <button
        type="button"
        className="px-6
          py-2.5
          bg-dark-blue
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-button-blue hover:shadow-lg
          focus:bg-button-blue focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-button-blue active:shadow-lg
          transition
          duration-150
          ease-in-out
          ml-1"
        onClick={onClick}
      >
        {actionBtnMessage}
      </button>
    </div>
  );
}

export default ModalFooter;
