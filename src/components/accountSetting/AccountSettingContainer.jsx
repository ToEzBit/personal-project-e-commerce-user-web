import React from "react";
import { useAuth } from "../../context/AuthContext";
import AddressContainer from "./AddressContainer";

function AccountSettingContainer() {
  const { user } = useAuth();
  return (
    <div>
      <AddressContainer addresses={user.Addresses} />
    </div>
  );
}

export default AccountSettingContainer;
