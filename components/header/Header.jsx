import Link from "next/link";
import { useEffect, useState } from "react";
import NavMenu from "../navmenu/NavMenu";
import Account from "../account/Account";
import { useRouter } from "next/router";
import HeaderSearch from "../headersearch/HeaderSearch";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <header
      className={
        loading
          ? "border-b border-b-[#fcaf17] bg-[rgba(0,0,0,0.75)] fixed top-0 left-0 right-0 z-10 backdrop-filter backdrop-blur-2xl"
          : "border-b border-b-[#282828] bg-[rgba(0,0,0,0.75)] fixed top-0 left-0 right-0 z-10 backdrop-filter backdrop-blur-2xl"
      }
    >
      <div className="mx-auto p-1 px-4 sm:px-6">
        <div className="mx-3 lg:mx-12">
          <nav>
            <div className="flex items-center justify-between h-[70px]">
              <div className="block lg:hidden">
                <svg
                  className="w-6 h-6 text-gray-300 cursor-pointer transition ease-in-out delay-10 hover:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                  onClick={() => setOpen(true)}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
                <NavMenu open={open} setOpen={setOpen} />
              </div>
              <div className="flex justify-start items-center">
                <Link href="/">
                  <img
                    src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c46845952588bf44125a37117d4da32c.svg"
                    alt=""
                    className="h-8 w-8"
                  />
                </Link>
              </div>
              <div className="lg:flex lg:justify-center lg:items-center hidden">
                <ul className="flex space-x-8">
                  <Link href="/games">
                    <h1
                      className={`cursor-pointer hover:text-white transition ease-in-out delay-10 ${
                        router.pathname === "/games"
                          ? "font-bold text-[#e8e8e8] hover:text-[#e8e8e8]"
                          : "text-[#e8e8e8]"
                      }`}
                    >
                      Games
                    </h1>
                  </Link>
                  <Link href="/newswire">
                    <h1
                      className={`cursor-pointer hover:text-white transition ease-in-out delay-10 ${
                        router.pathname === "/newswire"
                          ? "font-bold text-[#e8e8e8] hover:text-[#e8e8e8]"
                          : "text-[#e8e8e8]"
                      }`}
                    >
                      Newswire
                    </h1>
                  </Link>
                  <Link href="/videos">
                    <h1
                      className={`cursor-pointer hover:text-white transition ease-in-out delay-10 ${
                        router.pathname === "/videos"
                          ? "font-bold text-[#e8e8e8] hover:text-[#e8e8e8]"
                          : "text-[#e8e8e8]"
                      }`}
                    >
                      Videos
                    </h1>
                  </Link>
                  <li className="text-[#e8e8e8]">Downloads</li>
                  <li className="text-[#e8e8e8]">Store</li>
                  <li className="text-[#e8e8e8]">Support</li>
                </ul>
              </div>
              <div className="flex justify-end items-center gap-5">
                <button className="hidden lg:block py-2 px-4 bg-[#fcaf17] rounded-lg font-bold">
                  GET LAUNCHER
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white hidden lg:block cursor-pointer"
                  onClick={handleSearchClick}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <Account />
              </div>
            </div>
          </nav>
        </div>
      </div>
      {showSearch && <HeaderSearch />}
    </header>
  );
};

export default Header;
