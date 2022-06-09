import React from "react";
import SignUpForm from "../components/auth/SignUpForm";
import hero from "../../asset/image/hero.webp";
import Toast from "../components/toast/Toast";
import { useError } from "../context/ErrorContext";

function SignUpPage() {
  const { error } = useError();
  return (
    <div className="container-xl bg-dark-blue min-h-screen ">
      <div className="flex justify-between h-20 bg-white  items-center">
        <h1 className="text-3xl font-black ml-10">Sign up</h1>
        <h1 className="mr-10">Need Help?</h1>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row justify-between  mx-24 my-24 ">
        <img className="w-xs self-center" src={hero}></img>
        <SignUpForm />
      </div>
      {error && <Toast title={error.statusText} message={error.data.message} />}
    </div>
  );
}

export default SignUpPage;
