import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useError } from "../../context/ErrorContext";

function FormContainer() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp } = useAuth();
  const { setError } = useError();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await signUp({ email, userName, password, confirmPassword });
    } catch (err) {
      setError(err.response);
    }
  };
  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-full w-1/3">
        <form onSubmit={handleSubmitForm}>
          <div className="form-group mb-6 mt-4">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-6 mt-4">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="exampleInputPassword2"
              placeholder="ConFirm Password"
            />
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-button-blue
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-button-hover hover:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Sign up !
          </button>
        </form>
      </div>
    </>
  );
}

export default FormContainer;
