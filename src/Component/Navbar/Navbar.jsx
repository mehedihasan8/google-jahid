"use client";
import Login from "../Shared/Signup/Login";
import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const router = useRouter();

  const dropdownRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleUserClick = () => {
    setUserClicked(!userClicked);
  };

  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutsideDropdown);
    };
  }, [isMenuOpen]);

  return (
    <div
      // ref={dropdownRef}
      className="max-w-screen-xl mx-auto md:pt-7 py-4 top-0 backdrop-blur-sm md:backdrop-blur-sm z-50 w-full fixed flex justify-between items-center "
    >
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          className="w-[150px] h-[35px] md:w-[175px] md:h-[45px] pl-[6px] md:pl-0"
        />
      </Link>
      <ul className="md:flex justify-between w-[12rem] md:mt-2 hidden">
        <Link href="/">
          <li
            className={`nav-item hover:text-[#2970ff] text-[#4D5761] hover:translate transition-all duration-300 ${
              router.pathname === "/" ? "active" : ""
            }`}
          >
            AI Tools Finder
            {router.pathname === "/" ? (
              <div className="active-indicator"></div>
            ) : null}
          </li>
        </Link>

        <Link href="/news">
          <li
            className={`nav-item hover:text-[#2970ff] text-[#4D5761] hover:translate transition-all duration-300 ${
              router.pathname === "/news" ? "active" : ""
            }`}
          >
            News
            {router.pathname === "/news" ? (
              <div className="active-indicator"></div>
            ) : null}
          </li>
        </Link>
      </ul>

      <div className="hidden md:block">
        <Login />
      </div>

      {/* toggole Button  */}
      <button
        onClick={handleMenuToggle}
        className="lg:hidden z-10 text-black pr-5 md:pr-0 focus:outline-none transition-opacity duration-300 ease-in-out"
        aria-controls="mobile-menu"
        aria-expanded={isMenuOpen}
        style={{ opacity: isMenuOpen ? 0.5 : 1 }}
      >
        {isMenuOpen ? (
          <svg
            ref={dropdownRef}
            className="w-6 h-6 bg-[#f3f4f6] rounded-full border-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            ref={dropdownRef}
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      <div
        ref={dropdownRef}
        onClick={handleUserClick}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute right-6 top-10 z-50 px-2 py-3 shadow bg-white border border-gray-200 rounded transition-all duration-300`}
        id="mobile-menu"
      >
        <ul className="flex flex-col items-center gap-3 text-center">
          <Link href="/" onClick={closeMenu}>
            <li
              className={`nav-item border-b border-gray-300 hover:text-[#2970ff] ${
                router.pathname === "/" ? "active" : ""
              }`}
            >
              AI Tools Finder
              {router.pathname === "/" ? (
                <div className="active-indicator"></div>
              ) : null}
            </li>
          </Link>

          <Link href="/news" onClick={closeMenu}>
            <li
              className={`nav-item px-4 border-b border-gray-300 hover:text-[#2970ff] ${
                router.pathname === "/news" ? "active" : ""
              }`}
            >
              News
              {router.pathname === "/news" ? (
                <div className="active-indicator"></div>
              ) : null}
            </li>
          </Link>
          <li>
            <Login />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
