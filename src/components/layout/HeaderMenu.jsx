import { Link, useNavigate } from "react-router-dom";
import hero from "../../../asset/image/hero.webp";
import DropDownContainer from "../ui/dropdown/DropDownContainer";
import { useAuth } from "../../context/AuthContext";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { useState } from "react";
import DropDownItem from "../ui/dropdown/DropDownItem";
import { removeAccessToken } from "../../services/localStorage";

function HeaderMenu() {
  const { user } = useAuth();

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    removeAccessToken();
    navigate("/");
    window.location.reload(false);
  };

  const handleLogin = () => {
    navigate("/login");
    window.location.reload(false);
  };

  const handleMyPurchase = () => {
    navigate("/my-purchase");
    window.location.reload(false);
  };

  return (
    <>
      <nav className=" w-full flex flex-wrap items-center justify-between py-4 bg-dark-blue shadow-lg navbar navbar-expand ">
        <div className="container-fluid w-full flex  items-center justify-between px-8">
          <div
            className="collapse navbar-collapse items-center "
            id="navbarSupportedContent"
          >
            <Link className="flex items-center mt-2 mr-1" to="/">
              <img src={hero} className="w-16" alt="img" loading="lazy" />
            </Link>
          </div>
          <div className="flex items-center relative mr-8">
            {user ? (
              <>
                <button>
                  <AiOutlineShoppingCart
                    className="text-white text-3xl hover:text-button-hover mr-14"
                    onClick={() => navigate("/cart")}
                  />
                </button>
              </>
            ) : (
              <></>
            )}

            <DropDownContainer
              icon={
                <AiOutlineUser className="text-white text-3xl hover:text-button-hover" />
              }
            >
              {user ? (
                <>
                  <DropDownItem
                    key="1"
                    title="Account Setting"
                    to="/account-setting"
                  />
                  <DropDownItem
                    key="2"
                    title="My Purchase"
                    onClick={handleMyPurchase}
                  />
                  <DropDownItem
                    key="3"
                    title="Log out"
                    onClick={handleLogout}
                  />
                </>
              ) : (
                <>
                  <DropDownItem key="3" title="Log in" onClick={handleLogin} />
                </>
              )}
            </DropDownContainer>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderMenu;
