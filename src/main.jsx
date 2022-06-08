import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AuthContextProvider from "./context/AuthContext";
import ErrorContextProvider from "./context/ErrorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ErrorContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
