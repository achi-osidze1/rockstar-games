import { Menu, Transition, Dialog } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Account = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-full bg-[#282828] py-1.5 px-1.5  hover:bg-[#313131] transition ease-in-out delay-10">
          <svg
            className="w-5 h-5 text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
            />
          </svg>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded bg-[#161616]">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/signin">
                  <button
                    className={classNames(
                      active ? "text-[#fcaf17]" : "text-white",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Sign In
                  </button>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "text-[#fcaf17]" : "text-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Join Social Club
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Account;
