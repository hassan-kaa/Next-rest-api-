import React from "react";
import Categories from "./Categories";
import Search from "./Search";
import logo from "../Assets/logo3.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex relative justify-center items-start w-full py-4">
      <Link to="/" exact>
        <img className="w-[48px] h-[48px] absolute left-0" src={logo} alt="" />
      </Link>
      <div className=" flex-col flex justify-center items-center self-center min-w-[50%]">
        <Search />
        <Categories />
      </div>
    </div>
  );
}

export default Navbar;
