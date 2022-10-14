import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon, } from "@heroicons/react/24/outline";



import Link from "next/link";
import Image from "next/image";
import FeaturesDropdown from "./FeaturesDropdown";
import CompanyDropdown from "./Company Dropdown";
import RemoteLogo from "../public/images/remoteLogo.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <div>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <div>
            <div className="sm:hidden md:block mx-auto px-2 sm:px-6 lg:px-8 shadow-md">
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
                    className=" bg-white md:ml-7 lg:ml-6 py-2 text-base font-medium text-gray-600 hover:text-gray-800 font-Poppins"
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
                    className=" bg-white md:mr-8 py-2 text-base font-medium text-gray-600 hover:text-gray-800 font-Poppins"
                  >
                    Login
                  </a>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="bg-white text-gray-600 hover:text-gray-800 font-Poppins font-medium md: lg:py-1 lg:px-4 lg:border lg:border-gray-500 lg:rounded-xl lg:shadow md:mr-4">
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
