import * as React from "react";
import Link from "next/link";
import type { FC, ReactNode } from "react";
import { useState } from "react";
const Navbar: FC = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) setdropdownOpen(false);
    });
  }, []);

  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-2.5  bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center z-10">
            <span className="self-center  text-xl font-semibold whitespace-nowrap text-white">
              VILLVAY
            </span>
          </a>
        </Link>
        <div className="flex items-baseline md:order-2">
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center z-10 p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => {
              setdropdownOpen(!dropdownOpen);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/">
                  <a className="block py-2 pr-4 pl-3  border-b    md:border-0  md:p-0 text-gray-400 md:hover:text-whitehover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                    WORK
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="block py-2 pr-4 pl-3  border-b    md:border-0  md:p-0 text-gray-400 md:hover:text-whitehover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                    SERVICES
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="block py-2 pr-4 pl-3  border-b    md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                    ABOUT
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="block py-2 pr-4 pl-3  border-b    md:border-0  md:p-0 text-gray-400 md:hover:text-white :hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                    CONTACT
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="block py-2 pr-4 pl-3  border-b    md:border-0  md:p-0 text-gray-400 md:hover:text-white :hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                    CAREERS
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Dropdown menu --> */}
      {dropdownOpen && (
        <div
          className="md:hidden z-50  text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 w-full"
          id="dropdown"
        >
          <ul className="py-1" aria-labelledby="dropdown">
            <li>
              <Link href="/">
                <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  WORK
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  SERVICES
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  ABOUT
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  CONTACT
                </a>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  CAREERS
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
