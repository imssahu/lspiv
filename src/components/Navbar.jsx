import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className=" w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex gap-2">
            <li className="mr-8">
              <a
                href="/"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                Home
              </a>
            </li>
            <li className="mr-8">
              <a
                href="/"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                About
              </a>
            </li>
            <li className="mr-8">
              <Link
                to="/"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                Contact
              </Link>
            </li>
            <li className="mr-8">
              <Link
                to="/Services"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pr-24">
          <FaBars size={40} />
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-48 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
            : "fixed left-[-100%] top-0 w-48 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="flex flex-col gap-9 mt-10 ">
          <li>
            <a
              href="/"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
