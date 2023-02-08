import React from "react";
import { FaCoins } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/">
        <div className="flex space-x-3 p-4 justify-center items-center">
          <FaCoins size={40} className=" text-[#6900ff]" />
          <h1 className="text-4xl font-bold">
            Coin <span className="text-[#6900ff]">Search</span>
          </h1>
        </div>
      </NavLink>
    </>
  );
};

export default Navbar;
