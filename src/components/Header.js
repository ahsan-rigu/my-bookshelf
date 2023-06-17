import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { BsBookshelf, BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <BsBookshelf size={"2rem"} />
          My Bookshelf
        </Link>
        <Link to="/search">
          <BsSearch size={"2rem"} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
