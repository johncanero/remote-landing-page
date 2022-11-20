import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoon } from "@react-icons/all-files/bs/BsMoon";
import { BsSun } from "@react-icons/all-files/bs/BsSun";
// Public Files
import RemoteLogo from "../public/images/remoteLogo.png";
import FeaturesDropdown from "./FeaturesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import MobileDropdown from "./MobileDropdown";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className=" text-gray-900 rounded-lg p-2"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          className=" text-gray-900 rounded-lg p-2"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      );
    }
  };

  return (
    <div>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <div>
            {/* Mobile */}
            <div className="md:hidden sm:block mx-auto px-2 sm:px-6 lg:px-8 shadow-sm">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-shrink-0 w-36 items-center">
                  <Link href="/" passHref>
                    <Image
                      className="block lg:hidden"
                      src={RemoteLogo}
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="flex">
                  <div className="mt-3 mr-2">{renderThemeChanger()}</div>
                  <MobileDropdown />
                </div>
              </div>
            </div>

            {/* Tablet and Desktop */}
            <div className="sm:hidden md:block sm:px-6 mx-auto px-2 md:px-8 lg:pl-12 shadow-sm flex justify-center">
              <div className="relative flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 h-8 md:w-32 lg:w-44 items-center">
                    {/* Image */}
                    <Link href="/" passHref>
                      <Image
                        className="block h-8 w-3 bg-white lg:hidden rounded-xl px-4 pb-3"
                        src={RemoteLogo}
                        alt="Your Company"
                      />
                    </Link>
                  </div>

                  {/* Links */}
                  <FeaturesDropdown />
                  <CompanyDropdown />
                  <a
                    href="#"
                    className="  md:ml-6 py-2 text-base font-medium text-gray-600 hover:text-gray-800 font-Poppins"
                  >
                    Careers
                  </a>

                  <a
                    href="#"
                    className="  md:ml-6 py-2 text-base font-medium text-gray-600 hover:text-gray-800 font-Poppins"
                  >
                    About
                  </a>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Bell Button */}
                  <a
                    href="#"
                    className="  md:mr-6 py-2 text-base font-medium text-gray-600 hover:text-gray-800 font-Poppins"
                  >
                    Login
                  </a>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="bg-zinc-900 text-white font-semibold hover:bg-remoteOrange hover:text-zinc-900 font-Poppins md:py-1 md:px-2 lg:px-4 border-2 rounded-xl">
                        <span className="sr-only">Open user menu</span>
                        Register
                      </Menu.Button>
                    </div>
                  </Menu>
                  {renderThemeChanger()}
                </div>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
