import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Search from "../search/Search";
import Link from "next/link";
import { useRouter } from "next/router";

const NavMenu = (props) => {
  const { open, setOpen } = props;
  const router = useRouter();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10 justify-start">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -mr-8 flex pl-2 pt-4 sm:-mr-10 sm:pl-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-black py-6 shadow-xl">
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <nav>
                        <Search />
                        <ul>
                          <li className="py-3 w-0">
                            <Link href="/newswire">
                              <h1
                                className={`cursor-pointer transition ease-in-out delay-10 hover:text-[#fcaf17] text-2xl w-0 ${
                                  router.pathname === "/newswire"
                                    ? "text-[#fcaf17]"
                                    : "text-white"
                                }`}
                              >
                                Newswire
                              </h1>
                            </Link>
                          </li>
                          <li className="py-3 w-0">
                            <Link href="/games">
                              <h1
                                className={`cursor-pointer transition ease-in-out delay-10 hover:text-[#fcaf17] text-2xl w-0 ${
                                  router.pathname === "/games"
                                    ? "text-[#fcaf17]"
                                    : "text-white"
                                }`}
                              >
                                Games
                              </h1>
                            </Link>
                          </li>
                          <li className="py-3 w-0">
                            <Link href="/videos">
                              <h1
                                className={`cursor-pointer transition ease-in-out delay-10 hover:text-[#fcaf17] text-2xl w-0 ${
                                  router.pathname === "/videos"
                                    ? "text-[#fcaf17]"
                                    : "text-white"
                                }`}
                              >
                                Videos
                              </h1>
                            </Link>
                          </li>
                          <li className="cursor-pointer transition ease-in-out delay-10 hover:text-[#fcaf17] text-white text-2xl py-3 w-0">
                            Downloads
                          </li>
                          <li className="cursor-pointer transition ease-in-out delay-10 hover:text-[#fcaf17] text-white flex text-center items-center text-2xl py-3 w-0">
                            Support
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 ml-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                              </svg>
                            </span>
                          </li>
                          <li className="cursor-pointer transition ease-in-out delay-10 whitespace-nowrap hover:text-[#fcaf17] text-white flex text-center items-center text-2xl py-3 w-0">
                            Social Club
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 ml-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                              </svg>
                            </span>
                          </li>
                          <li className="cursor-pointer transition ease-in-out delay-10 hover:text-[#fcaf17] text-white flex text-center items-center text-2xl py-3 w-0">
                            Launcher
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 ml-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                              </svg>
                            </span>
                          </li>
                          <li className="cursor-pointer transition ease-in-out delay-10 hover:text-[#fcaf17] text-white flex text-center items-center text-2xl py-3 w-0">
                            Store
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 ml-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NavMenu;
