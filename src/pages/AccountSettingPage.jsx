import React from "react";
import AccountSettingContainer from "../components/accountSetting/AccountSettingContainer";
import Toast from "../components/toast/Toast";
import { useError } from "../context/ErrorContext";

function AccountSettingPage() {
  const { error } = useError();
  return (
    <div className="container m-auto mt-4 px-4 py-4 bg-purchase bg-repeat ">
      <AccountSettingContainer />
      {error && (
        <Toast title={error?.statusText} message={error?.data.message} />
      )}
    </div>
  );
}

export default AccountSettingPage;
