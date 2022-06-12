import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkout } from "../../api/order";
import ModalContainer from "../ui/modal/ModalContainer";

function Sidebar({ totalPrice, addresses, orderId, isExistOrderProduct }) {
  const [selectedAddress, setSelectedAddress] = useState();
  const [selectedPayment, setSelectedPayment] = useState();
  const [slipPayment, setSlipPayment] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (addresses.length > 0) {
      setSelectedAddress(addresses[0].id);
    }
  }, []);
  const handleBankTransferPayment = async () => {
    if (!slipPayment) {
      alert("Pleas upload you slip");
      return;
    }
    await checkout(orderId, selectedAddress, slipPayment);
    navigate("/my-purchase");
    location.reload(false);
  };

  return (
    <div className="w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Address</span>
        {addresses.length > 0 ? (
          <select
            className="py-3 px-4 pr-9 block w- border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            value={selectedAddress}
            onChange={(e) => setSelectedAddress(e.target.value)}
          >
            {addresses?.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
        ) : (
          <span className="font-semibold text-sm uppercase text-red-400">
            Add Address first
          </span>
        )}
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Payment Method</span>
        <span>
          <select
            className="py-3 px-4 pr-9 block w- border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            value={selectedPayment}
            onChange={(e) => setSelectedPayment(e.target.value)}
          >
            <option value="CC">Credit Card</option>
            <option value="PP">Paypal</option>
            <option value="BT">Bank Transfer</option>
          </select>
        </span>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Shipping</span>
        <span className="font-semibold text-sm">Free !!</span>
      </div>

      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total price</span>
          <span>{`${totalPrice || 0} 円`}</span>
        </div>
        {addresses.length > 0 &&
          selectedPayment === "BT" &&
          isExistOrderProduct.length > 0 && (
            <ModalContainer
              mainBtnMessage="Pay with Bank Transfer"
              title="Bank Transfer"
              message="Transfer qr code to the bank account"
              img="https://res.cloudinary.com/myclound/image/upload/v1655039089/codecamp-e-commerce/webImage/payment/Screen_Shot_2565-06-12_at_20.03.20_v9wdhq.png"
              upload={true}
              setSlipPayment={setSlipPayment}
              actionBtnMessage="Accept"
              onClick={handleBankTransferPayment}
            />
          )}
      </div>
    </div>
  );
}

export default Sidebar;
