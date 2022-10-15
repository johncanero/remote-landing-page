import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GoThreeBars } from "@react-icons/all-files/go/GoThreeBars";
import FeaturesDropdown from "./FeaturesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import { MdNaturePeople } from "@react-icons/all-files/md/MdNaturePeople";
import { FcAbout } from "@react-icons/all-files/fc/FcAbout";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className=" relative inline-block">
      <div>
        <Menu.Button className="inline-flex w-full bg-white  py-2 text-base font-Poppins font-medium text-gray-600 hover:text-gray-800">
          <GoThreeBars className=" h-11 w-5" />
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
        <Menu.Items className="mt-96 z-10 w-48 h-96 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-3 text-base font-Poppins font-medium"
                  )}
                >
                  <FeaturesDropdown />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-3 text-base font-Poppins font-medium"
                  )}
                >
                  <CompanyDropdown />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-3 mt-1 text-base font-Poppins font-medium"
                  )}
                >
                  <div className="flex">
                    <MdNaturePeople
                      className="md:hidden sm:block mt-1 mr-2 text-remoteLightBrown"
                      size={18}
                    />
                    Careers
                  </div>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-4 mt-1 text-base font-Poppins font-medium"
                  )}
                >
                  <div className="flex">
                    <FcAbout
                      className="md:hidden sm:block mt-1 mr-2"
                      size={18}
                    />
                    About
                  </div>
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex justify-center px-4 py-4 mt-1 text-base font-Poppins font-medium"
                  )}
                >
                  Login
                </a>
              )}
            </Menu.Item>

          

            <Menu.Item as="div" className="relative">
              <div>
                <Menu.Button className="flex justify-center bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-800  font-Poppins font-medium border-2 border-gray-500 rounded-xl mx-auto w-36  px-2 py-2 mt-1 text-base">
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
