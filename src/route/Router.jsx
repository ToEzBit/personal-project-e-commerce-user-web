import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/layout/AuthLayout";
import SignUpPage from "../pages/SignUpPage";
import SearchPage from "../pages/SearchPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import MyPurchasePage from "../pages/MyPurchasePage";
import AccountSettingPage from "../pages/AccountSettingPage";

function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="/product/search/:category" element={<SearchPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/my-purchase" element={<MyPurchasePage />} />
            <Route path="/account-setting" element={<AccountSettingPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="/product/search/:category" element={<SearchPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
