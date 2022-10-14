import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaHistory } from "@react-icons/all-files/fa/FaHistory";
import { FaBlogger } from "@react-icons/all-files/fa/FaBlogger";
import { GiTeamDowngrade } from "@react-icons/all-files/gi/GiTeamDowngrade";
import { GiTvRemote } from "@react-icons/all-files/gi/GiTvRemote";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full bg-white md:ml-6 py-2 text-base font-Poppins font-medium text-gray-600">
          <div className="flex">
            <GiTvRemote className="md:hidden sm:block mt-1 mr-2 text-remoteBlue" size={18} /> Company
          </div>
          <ChevronDownIcon className="ml-1 mt-1 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute z-10 mt-2 w-36 ml-5 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 sm:py-4  py-2 text-base font-Poppins font-medium"
                  )}
                >
                  <FaHistory className="mt-1 mr-1 text-remoteLightBrown" />
                  History
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 sm:py-4  py-2 text-base font-Poppins font-medium"
                  )}
                >
                  <GiTeamDowngrade className="mt-1 mr-1 text-remoteBlue" />
                  Our Team
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
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
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
