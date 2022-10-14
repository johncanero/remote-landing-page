import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GoThreeBars } from "@react-icons/all-files/go/GoThreeBars";
import FeaturesDropdown from "./FeaturesDropdown";
import CompanyDropdown from "./CompanyDropdown";

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
        <Menu.Items className=" mt-60 z-10 w-44 h-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-2 text-base font-Poppins font-medium"
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
                    "flex px-4 py-2 text-base font-Poppins font-medium"
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
                    "flex px-4 py-2 mt-1 text-base font-Poppins font-medium"
                  )}
                >
                    Careers
                </a>
              )}
            </Menu.Item><Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 py-4 mt-1 text-base font-Poppins font-medium"
                  )}
                >
                    About
                </a>
              )}
            </Menu.Item>





            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                      "flex w-full px-4 py-4 text-left text-base font-Poppins font-medium"
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
