import React, { useState, useEffect, useRef } from "react";
// import logo from "../assets/images/logo/logoReact.svg";
import logo2 from "../assets/images/avatar/avatar-man1.svg";
import { ResumeButton } from "./ResumeButton";
import { NavLink, Link } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import openMenu from "../assets/images/icons/menu-expand-svgrepo-com.svg";
import closeMenu from "../assets/images/icons/menu-collapsed-svgrepo-com.svg";

export const NavBar = ({ isOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <nav className="flex items-center justify-between p-6 bg-slate-100 shadow-md">
        <div>
          <Link to="/">
            <div className="flex flex-col justify-center items-center">
              <div className="border-black border-2 rounded-full w-12 h-12 overflow-hidden">
                <img src={logo2} alt="logo" className="object-contain" />
              </div>
              <h1 className="border-black border-b-4 rounded-lg px-1 shadow-sm shadow-black italic">
                OMAR MOUSA
              </h1>
            </div>
          </Link>
        </div>

        <div className="block md:hidden lg:hidden">
          <button
            className="flex items-center px-3 py-2 rounded text-gray-900 hover:text-gray-600"
            onClick={toggleSidebar}
          >
            <img
              src={closeMenu}
              alt="Close Menu"
              className={`fill-current h-6 w-6 transform transition-transform duration-300 ${
                isOpen ? "block rotate-y-in" : "hidden rotate-y-out"
              }`}
            />
            <img
              src={openMenu}
              alt="Open Menu"
              className={`fill-current h-6 w-6 transform transition-transform duration-300 ${
                isOpen ? "hidden rotate-y-out" : "block rotate-y-in"
              }`}
            />
          </button>
        </div>

        <div className="hidden md:flex space-x-2">
          <div
            className="hidden md:block lg:block text-center relative"
            ref={dropdownRef}
          >
            <button
              onClick={handleDropdownToggle}
              className="p-2 text-gray-900 w-full text-left border-2 border-black rounded-md"
            >
              Projects
              <svg
                className={`fill-current h-3 w-3 inline ml-2 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.293 9.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            <div
              className={`absolute mt-2 p-3 text-sm transition-all bg-slate-200 shadow-md shadow-black border-t-2 border-black rounded-lg flex flex-col z-10 gap-y-1 transform ${
                !isDropdownOpen
                  ? "scale-y-0 opacity-0 invisible"
                  : "scale-y-100 opacity-100 visible"
              } origin-top`}
            >
              <NavLink to={"tictactoe"}>TicTacToe</NavLink>
              <hr className="border border-black opacity-25" />
              <NavLink to={"wordle"}>Wordle</NavLink>
              <hr className="border border-black opacity-25" />
              <NavLink to={"todo"}>Todo List</NavLink>
              <hr className="border border-black opacity-25" />
              <NavLink to={"weather"}>Weather System</NavLink>
            </div>
          </div>
          <ResumeButton />
        </div>
      </nav>
      <div className="hidden md:block lg:block absolute top-4 left-44">
        <Breadcrumbs />
      </div>
    </>
  );
};
