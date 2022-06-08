import React from "react";
import LoginForm from "../components/auth/LoginForm";
import hero from "../../asset/image/hero.webp";
import Toast from "../components/toast/Toast";
import { useError } from "../context/ErrorContext";

function LoginPage() {
  const { error } = useError();
  return (
    <div className="container-xl bg-dark-blue min-h-screen ">
      <div className="flex justify-between h-20 bg-white  items-center">
        <h1 className="text-3xl font-black ml-10">Login</h1>
        <h1 className="mr-10">Need Help?</h1>
      </div>
      <div className="flex justify-between  mx-24 my-24">
        <img className="max-w-md" src={hero}></img>
        <LoginForm />
      </div>
      {error && <Toast title={error.statusText} message={error.data.message} />}
    </div>
  );
}

export default LoginPage;
