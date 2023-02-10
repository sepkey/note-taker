import React from "react";
import Search from "./Search";
import Img from "../assets/profile.jpg";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={Img} alt="Sepide Kia" />
      </div>
      <Search />
    </header>
  );
};

export default Header;
