import React from "react";
import "./Header.css";
import logo from "./Amazon-logo-dark.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  let userName = "Guest";
  if (auth.currentUser) {
    userName = auth.currentUser.email;
  }
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="gfz" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {/* !user will ensure that on clicking sign out it will not redirect to login page */}
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">Hello {userName}</span>
            <span className="header__optionLineTwo">{!user ? "Sign In" : "Sign Out"}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/Checkout">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
