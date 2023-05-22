import Link from "next/link";
import { Fragment } from "react";
// Headles UI React
import { Menu, Transition } from "@headlessui/react";
// Components
import FeaturesDropdown from "./FeaturesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import Login from "./Login";
// Icons
import { MdNaturePeople } from "@react-icons/all-files/md/MdNaturePeople";
import { FcAbout } from "@react-icons/all-files/fc/FcAbout";
import { GoThreeBars } from "@react-icons/all-files/go/GoThreeBars";
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
// Framer-Motion
import { motion } from "framer-motion"
import LoginMobile from "./LoginMobile";
// NextAuth
import { useSession, signIn, signOut } from "next-auth/react"


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <Menu.Button className="inline-flex w-full py-2 text-base font-medium font-Poppins text-neutral-800 dark:text-neutral-200">
          <GoThreeBars className="w-5 h-10" />
        </Menu.Button>
      </div>

      {/* Dropdown */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link rel="noopener noreferrer"
                  href="/features"

                >
                  <div className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-3 text-base font-Poppins font-medium"
                  )}>
                    <FeaturesDropdown />
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link rel="noopener noreferrer"
                  href="/company"

                >
                  <div className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-3 text-base font-Poppins font-medium"
                  )}>

                    <CompanyDropdown />
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link rel="noopener noreferrer"
                  href="/careers"

                >
                  <div className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-3 mt-1 text-base font-Poppins font-medium"
                  )}>
                    <MdNaturePeople
                      className="mt-1 mr-2 md:hidden sm:block text-remoteLightBrown"
                      size={18}
                    />
                    Careers
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link rel="noopener noreferrer"
                  href="/about"

                >
                  <div className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-4 mt-1 text-base font-Poppins font-medium"
                  )}>
                    <FcAbout
                      className="mt-1 mr-2 md:hidden sm:block"
                      size={18}
                    />
                    About
                  </div>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link rel="noopener noreferrer"
                  href="/"

                >
                  <div className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-4 mt-1 text-base font-Poppins font-medium"
                  )}>
                    <LoginMobile />
                  </div>
                </Link>
              )}
            </Menu.Item>

            {/* Logout */}
            <Menu.Item>
              {/* Logout */}
              {({ active }) => (
                <button
                  className={`${active
                    ? "bg-blue-500 text-white"
                    : "text-gray-900"
                    } group flex items-center rounded-md px-4 py-2 text-sm font-Poppins`}
                  onClick={(() => signOut())}
                >
                  <ArrowLeftOnRectangleIcon className="w-6" />
                  <span className="ml-2 font-medium font-OpenSans">Logout</span>
                </button>
              )}
            </Menu.Item>

            <Menu.Item as="div" className="relative">
              <div>
                <Menu.Button className="flex justify-center px-2 py-2 mx-auto mt-1 text-base font-medium text-gray-600 bg-white border-2 border-gray-500 hover:bg-gray-50 hover:text-gray-800 font-Poppins rounded-xl w-36">
                  <span className="sr-only">Open user menu</span>
                  Register
                </Menu.Button>
              </div>
            </Menu.Item>

            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                      "flex w-full px-4 py-4 text-left text-base font-Poppins"
                    )}
                  ></button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
