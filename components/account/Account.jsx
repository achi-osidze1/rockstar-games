import { Menu, Transition, Dialog } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Account = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

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
        <Menu.Items className="absolute right-0 z-10">
          <div className="py-1">
          <ul className="absolute right-0 z-10 mt-[19px] w-56 origin-top-right border border-[#282828] rounded bg-[#161616]">
            <Menu.Item>
              {({ active }) => (
                <Link href="/signin">
                  <li
                    className={classNames(
                      "font text-white block px-4 py-2 text-left text-sm border-b border-b-[#282828] w-full hover:bg-[#282828] transition ease-in-out delay-10"
                    )}
                  >
                    Sign In
                  </li>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <li
                  className={classNames(
                    "font text-white block px-4 py-2 text-left text-sm border-b border-b-[#282828] w-full hover:bg-[#282828] transition ease-in-out delay-10"
                  )}
                >
                  Sign Up
                </li>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <li
                  className={classNames(
                    "font text-white block px-4 py-2 text-left text-sm border-b border-b-[#282828] w-full hover:bg-[#282828] transition ease-in-out delay-10"
                  )}
                >
                  Help
                </li>
              )}
            </Menu.Item>
            </ul>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Account;
