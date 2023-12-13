import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../context/Context";

const HeaderSearch = () => {
  const [search, setSearch] = useState("");
  const { games } = useContext(Context);
  const [filteredGames, setFilteredGames] = useState([]);
  const router = useRouter();

  const handleSearch = (searchQuery) => {
    const updatedFilteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGames(updatedFilteredGames);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(search);
      router.push({
        pathname: "/games",
        query: search ? { search, filteredGames } : {},
      });
    }
  };
  return (
    <div className="bg-[#282828] lg:max-w-full hidden lg:block border-b border-b-[#636363]">
      <div className="mx-auto px-4 sm:px-3">
        <div className="mx-3 lg:mx-12">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-96 p-6 ps-10 text-xl outline-none bg-[#282828] text-white"
              placeholder="Search Rockstar Games..."
              required
              value={search}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
