import { Link } from "react-router-dom";
import hero from "../../../asset/image/hero.webp";
import DropDownContainer from "../ui/dropdown/DropDownContainer";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { useState } from "react";
import DropDownItem from "../ui/dropdown/DropDownItem";
import { removeAccessToken } from "../../services/localStorage";

function HeaderMenu() {
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    removeAccessToken();
    location.reload();
  };

  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-dark-blue shadow-lg navbar navbar-expand ">
        <div className="container-fluid w-full flex  items-center justify-between px-6">
          <div
            className="collapse navbar-collapse items-center "
            id="navbarSupportedContent"
          >
            <Link className="flex items-center mt-2 mr-1" to="/">
              <img src={hero} className="w-16" alt="img" loading="lazy" />
            </Link>
          </div>
          <input
            className="w-7/12"
            type="text"
            placeholder="Search Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <AiOutlineSearch
            className="text-white text-3xl hover:text-button-hover"
            role="button"
            onClick={() => alert(search)}
          />
          <div className="flex items-center relative mr-8">
            <button>
              <AiOutlineShoppingCart className="text-white text-3xl hover:text-button-hover mr-14" />
            </button>
            <DropDownContainer
              icon={
                <AiOutlineUser className="text-white text-3xl hover:text-button-hover" />
              }
              item={[
                <DropDownItem key="1" title="Account Setting" to="/product" />,
                <DropDownItem key="2" title="Log out" onClick={handleLogout} />,
              ]}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderMenu;
