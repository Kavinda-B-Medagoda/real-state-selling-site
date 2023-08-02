import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center py-6 border-b mb-10">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <div className="flex gap-5 items-center">
        <Link to="" className=" hover:text-violet-900">
          Log in
        </Link>
        <Link
          to=""
          className=" bg-violet-900 px-4 py-3 text-white rounded-lg transition"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Header;
