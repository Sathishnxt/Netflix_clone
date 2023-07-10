import React from "react";
import logo from "../source/Netflix_Logo.png";
import { useNetflixContext } from "../context/Context";
import { IoReorderThreeSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import profile from "../source/profile.png";
import { useAuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { navList } = useNetflixContext();
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="h-10 absolute top-5 left-7 right-7 flex justify-between">
      <div className="right-section flex gap-3">
        <img
          src={logo}
          alt="logo"
          className="w-[150px] h-10 object-cover mr-3"
        />
        <div className="hidden sm:flex navList font-medium items-center gap-6">
          {navList.map((item) => (
            <NavLink to={item.link} key={item.id}>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="right-section relative flex items-center gap-3">
        <img
          src={profile}
          alt="Profile"
          className="hidden sm:block w-10 h-10 text-xs rounded"
        />
        <button
          onClick={handleLogOut}
          className="hidden sm:block bg-redButton w-20 h-10 m-2 rounded font-medium"
        >
          Log Out
        </button>
      </div>
      <div className="sm:hidden flex items-center relative group">
        <IoReorderThreeSharp className="w-7 h-7" />
        <div className="options hidden group-hover:flex flex-col absolute bg-customBackground hover:flex rounded z-10 gap-2 p-3 top-10 right-0">
          {navList.map((item) => (
            <Link to={item.link} key={item.id}>
              {item.title}
            </Link>
          ))}
          <button
            onClick={handleLogOut}
            className="bg-redButton w-20 h-10 rounded font-medium"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
