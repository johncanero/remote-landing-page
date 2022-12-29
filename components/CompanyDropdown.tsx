import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaHistory } from "@react-icons/all-files/fa/FaHistory";
import { FaBlogger } from "@react-icons/all-files/fa/FaBlogger";
import { GiTeamDowngrade } from "@react-icons/all-files/gi/GiTeamDowngrade";
import { GiTvRemote } from "@react-icons/all-files/gi/GiTvRemote";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full py-2 text-base font-medium md:ml-6 font-Poppins text-zinc-600 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300 ">
          <Link rel="noopener noreferrer" href="/company">

            <div className="flex">
              <GiTvRemote className="mt-1 mr-2 md:hidden sm:block text-remoteBlue" size={18} /> Company
            </div>
          </Link>
          <ChevronDownIcon className="w-5 h-5 mt-1 ml-1" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 bg-white rounded-md shadow-lg sm:w-44 sm:h-64 md:h-44 md:w-36 md:ml-5 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 sm:py-4  py-2 text-base font-Poppins font-medium"
                  )}
                >
                  <FaHistory className="mt-1 mr-1 text-remoteLightBrown" />
                  History
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 sm:py-4  py-2 text-base font-Poppins font-medium"
                  )}
                >
                  <GiTeamDowngrade className="mt-1 mr-1 text-remoteBlue" />
                  Our Team
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:text-gray-800",
                    "flex px-4 sm:py-4  py-2 text-base font-Poppins font-medium"
                  )}
                >
                  <FaBlogger className="mt-1 mr-1 text-remoteOrange" />
                  Blog
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
