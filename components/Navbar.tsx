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

    if (currentTheme === "light") {
      return (
        <button
          className="p-2 rounded-lg text-zinc-900 dark:text-zinc-200 "
          onClick={() => setTheme("dark")}
        >
          {/* Moon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          className="p-2 rounded-lg text-zinc-900 dark:text-zinc-200"
          onClick={() => setTheme("light")}
        >
          {/* Sun */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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
    }
  };

  return (
    <div>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <div>
            {/* Mobile */}
            <div className="px-2 mx-auto shadow-sm md:hidden sm:block sm:px-6 lg:px-8 dark:bg-zinc-900">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex items-center flex-shrink-0 w-36">
                  <Link href="/" passHref>
                    <Image
                      className="block lg:hidden"
                      src={RemoteLogo}
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="flex">
                  <div className="mt-2 mr-2">{renderThemeChanger()}</div>
                  <MobileDropdown />
                </div>
              </div>
            </div>

            {/* Tablet and Desktop */}
            <div className="flex justify-center px-2 mx-auto shadow-sm sm:hidden md:block sm:px-6 md:px-8 lg:pl-12 dark:bg-zinc-900 dark:shadow-sm dark:shadow-zinc-800">
              <div className="relative flex items-center justify-between h-20">
                <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                  <div className="flex items-center flex-shrink-0 h-8 md:w-32 lg:w-44">
                    {/* Image */}
                    <Link href="/" passHref>
                      <Image
                        className="block w-3 h-8 px-4 pb-3"
                        src={RemoteLogo}
                        alt="Your Company"
                      />
                    </Link>
                  </div>

                  {/* Links */}
                  <FeaturesDropdown />
                  <CompanyDropdown />
                  <Link
                    rel="noopener noreferrer"
                    href="/careers"

                  >
                    <div className="py-2 text-base font-medium text-zinc-600 hover:text-zinc-800 md:ml-6 dark:text-zinc-500 dark:hover:text-zinc-300 font-Poppins">
                      <h2>Careers</h2>
                    </div>

                  </Link>

                  <Link
                    rel="noopener noreferrer"
                    href="/about"
                  >
                    <div className="py-2 text-base font-medium text-zinc-600 hover:text-zinc-800 md:ml-6 dark:text-zinc-500 dark:hover:text-zinc-300 font-Poppins">
                      <h2>About</h2>
                    </div>
                  </Link>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Bell Button */}
                  <Link
                    href="/"
                    className="py-2 text-base font-medium md:mr-6 text-zinc-600 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300 font-Poppins"
                  >
                    Login
                  </Link>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="font-semibold text-white border-2 bg-zinc-900 hover:bg-remoteOrange hover:text-zinc-900 font-Poppins md:py-1 md:px-2 lg:px-4 lg:mr-1 rounded-xl">
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
