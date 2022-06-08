import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/layout/AuthLayout";
import SignUpPage from "../pages/SignUpPage";

function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<HomePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
