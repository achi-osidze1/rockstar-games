import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavMenu from "../navmenu/NavMenu";
import Account from "../account/Account";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <header className={loading ? "border-b-2 border-b-[#fcaf17] bg-[rgba(0,0,0,0.75)] fixed top-0 left-0 right-0 z-10 backdrop-filter backdrop-blur-lg" : "border-b-2 border-b-[#161616] bg-[rgba(0,0,0,0.75)] fixed top-0 left-0 right-0 z-10 backdrop-filter backdrop-blur-lg"}>
      <div className="mx-auto p-1 px-4 sm:px-6">
        <div className="mx-3 lg:mx-12">
          <nav>
            <div className="flex items-center justify-between">
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
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={70}
                  height={100}
                  alt="logo"
                  priority={true}
                  as="image"
                />
              </Link>
              <Account />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
