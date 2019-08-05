import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <span className="logo">RGB Clothing</span>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
