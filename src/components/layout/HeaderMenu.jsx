import { Link, useNavigate } from "react-router-dom";
import hero from "../../../asset/image/hero.webp";
import DropDownContainer from "../ui/dropdown/DropDownContainer";
import { useAuth } from "../../context/AuthContext";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

import { IoGameControllerOutline } from "react-icons/io5";

// IoGameControllerOutline

// GrGamepad

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
            <img
              src={hero}
              className="w-16"
              alt="img"
              loading="lazy"
              role="button"
              onClick={() => {
                navigate("/");
                window.location.reload(false);
              }}
            />
          </div>
          <div className="flex items-center relative mr-8">
            {user ? (
              <>
                <AiOutlineShoppingCart
                  className="text-white text-3xl hover:text-button-hover mr-14"
                  role="button"
                  onClick={() => {
                    navigate("/cart");
                    window.location.reload(false);
                  }}
                />
                <IoGameControllerOutline
                  className="text-white text-3xl hover:text-button-hover mr-14"
                  role="button"
                  onClick={() => navigate("/flappy")}
                />
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
                    onClick={() => {
                      navigate("/account-setting");
                      window.location.reload(false);
                    }}
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
