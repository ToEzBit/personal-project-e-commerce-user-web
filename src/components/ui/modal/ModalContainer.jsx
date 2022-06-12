import React from "react";
import ModalBtn from "./ModalBtn";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalBody from "./ModalBody";

function ModalContainer({
  mainBtnMessage,
  title,
  message,
  img,
  upload,
  setSlipPayment,
  actionBtnMessage,
  onClick,
}) {
  return (
    <>
      <ModalBtn mainBtnMessage={mainBtnMessage} />
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <ModalHeader title={title} />
            <ModalBody
              message={message}
              img={img}
              upload={upload}
              setSlipPayment={setSlipPayment}
            />
            <ModalFooter
              actionBtnMessage={actionBtnMessage}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContainer;
