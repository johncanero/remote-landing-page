import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaClipboardList } from "@react-icons/all-files/fa/FaClipboardList";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { FaClipboard } from "@react-icons/all-files/fa/FaClipboard";
import { BsGearFill } from "@react-icons/all-files/bs/BsGearFill";
import { GiFastArrow } from "@react-icons/all-files/gi/GiFastArrow";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full md:ml-6 py-2 text-base font-Poppins font-medium text-gray-600 hover:text-gray-800">
          <div className="flex">
            <GiFastArrow className="md:hidden sm:block mt-1 mr-2 text-remoteOrange" size={18} /> Features
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
        <Menu.Items className="absolute z-10 mt-2 w-44 h-80 md:h-60 md:w-36 md:ml-5 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 sm:py-4 py-2 text-base font-Poppins font-medium"
                  )}
                >
                  <FaClipboardList className="mt-1 mr-1 text-remoteOrange" />{" "}
                  ToDo List
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 sm:py-4 py-2 text-base font-Poppins font-medium"
                  )}
                >
                  <FaCalendarAlt className="mt-1 mr-1 text-remoteBlue" />{" "}
                  Calendars
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-600",
                    "flex px-4 sm:py-4 py-2 text-base font-Poppins font-medium"
                  )}
                >
                  <FaClipboard className="mt-1 mr-1 text-remoteLightBrown" />{" "}
                  Reminders
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
                      "flex w-full px-4 sm:py-4 py-2 text-left text-base font-Poppins font-medium"
                    )}
                  >
                    <BsGearFill className="mt-1 mr-1 text-slate-700" /> Planning
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
