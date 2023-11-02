import Login from "../Shared/Signup/Login";
import { useState } from "react";
import Logo from "../../assets/logo.svg";
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavbarHidden(!isNavbarHidden);
  };
  const toggle = () => {
    setIsNavbarHidden(false);
  };

  return (
    <div className="-ml-2 md:ml-2">
      <div className="p-0 md:p-[5px] navbar bg-base-100 ">
        <div className=" navbar-start">
          <Link href='/'>
            <Image src={Logo} alt="logo" className="w-[168px] h-[40px] flex items-center md:-ml-4 -ml-2" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex px-1 text-base">
            <li className=' font-paragraph md:px-6 md:py-3 navi'>
              <Link href="/">
              <span className={`font-paragraph text-base block hover:bg-transparent`}>AI Tools Finder</span>
              </Link>
            </li>

            <li className=' md:px-6 md:py-3 navi'>
              <Link href="/news">
              <span className={`font-paragraph text-base block hover:bg-transparent`}>News</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className='hidden lg:block'>
            <Login />
          </div>

        </div>
        <div className="dropdown dropdown-end">
          <label onClick={toggle} tabIndex={0} className="hide-menu btn-ghost btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
          <ul tabIndex={0} className={`menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1 navi ${isNavbarHidden ? 'hidden' : ''} `}>
            <li className='mx-6 font-paragraph text-base'>
              <Link href="/" onClick={handleNavLinkClick}>
                <div style={{ background: 'transparent' }} className="p-0 font-paragraph text-base">
                  AI Tools Finder
                </div>
              </Link>
            </li>

            <li className='mx-6 navi'>
              <Link href="/news" onClick={handleNavLinkClick}>
                <div style={{ background: 'transparent' }} className="p-0 font-paragraph text-base">
                  News
                </div>
              </Link>
            </li>
            <li className='ml-4 mr-10'>
              <Login/>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
