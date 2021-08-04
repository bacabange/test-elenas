import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="header">
      <Link
        to="/"
        className="btn hidden lg:inline-block text-white"
      >
        Customers
      </Link>
      <Link
        to="/customer/create"
        className="btn hidden lg:inline-block text-white"
      >
        <i className="fa fa-plus"></i>
      </Link>
    </header>
  );
};

export default Header;
