import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import RemoteLogo from "../public/images/remoteLogo.png";
import FeaturesDropdown from "./FeaturesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import MobileDropdown from "./MobileDropdown";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <div>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <div>
            {/* Mobile */}
            <div className="md:hidden sm:block mx-auto px-2 sm:px-6 lg:px-8 shadow-md">
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
                <MobileDropdown />
              </div>
            </div>

            {/* Tablet and Desktop */}
            <div className="sm:hidden md:block sm:px-6 mx-auto px-2 md:px-8 lg:pl-12 shadow-md">
              <div className="relative flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 h-8 md:w-32 lg:w-44 items-center">
                    {/* Image */}
                    <Link href="/" passHref>
                      <Image
                        className="block h-8 w-3 lg:hidden"
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
                    className=" bg-white md:ml-6 py-2 text-base font-medium text-gray-600 hover:text-gray-800 font-Poppins"
                  >
                    Careers
                  </a>

                  <a
                    href="#"
                    className=" bg-white md:ml-6 py-2 text-base font-medium text-gray-600 hover:text-gray-800 font-Poppins"
                  >
                    About
                  </a>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Bell Button */}
                  <a
                    href="#"
                    className=" bg-white md:mr-6 py-2 text-base font-medium text-gray-600 hover:text-gray-800 font-Poppins"
                  >
                    Login
                  </a>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-800  font-Poppins font-medium md: py-1 md:px-2 lg:px-4 border-2 border-gray-500 rounded-xl">
                        <span className="sr-only">Open user menu</span>
                        Register
                      </Menu.Button>
                    </div>
                  </Menu>
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
