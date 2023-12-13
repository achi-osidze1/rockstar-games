import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GamesList from "@/components/featuredgames/gameslist/GamesList";
import LoadingGamesList from "@/components/featuredgames/gameslist/LoadingGamesList";
import { useRouter } from "next/router";
import { Context } from "@/components/context/Context";

const GamesPage = () => {
  const [loading, setLoading] = useState(true);
  const { games, setGames } = useContext(Context);
  const [filteredGames, setFilteredGames] = useState([]);
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    async function fetchFeaturedGames() {
      try {
        const response = await axios.get("/api/featuredGamesData");
        if (response.status === 200) {
          setGames(response.data.featuredGames);
        }
      } catch (error) {
        console.error("Error fetching featured games:", error);
      }
    }
    fetchFeaturedGames();
  }, []);

  useEffect(() => {
    const updatedFilteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(search?.toLowerCase() || "")
    );
    setFilteredGames(updatedFilteredGames);
  }, [search, games]);

  return (
    <>
      <Head>
        <title>Rockstar Games | Games</title>
        <meta name="description" content="GamesPage" />
      </Head>

      <div className="mx-auto mt-12 pt-12 p-4 sm:px-6 lg:max-w-[1920px]">
        <div className="mx-3 lg:mx-12 my-8">
          {search ? (
            <>
              {loading ? (
                <div className="lg:mt-9 lg:pt-9">
                  <h1 className="mb-3 text-gray-700 text-2xl animate-pulse">
                    Fetching Search Results...
                  </h1>
                  <h1 className="font text-white uppercase text-4xl">
                    {search}
                  </h1>
                </div>
              ) : (
                <>
                  {filteredGames.length > 0 ? (
                    <>
                      <div className="lg:mt-9 lg:pt-9">
                        <h1 className="text-gray-500 text-2xl mb-3">
                          Showing <span className="text-white"> Games</span>{" "}
                          filtered by{" "}
                          <span className="font text-white uppercase">
                            {" "}
                            {search}
                          </span>
                        </h1>
                        <h1 className="font text-[#fcaf17]">
                          Games <span>( {filteredGames.length} )</span>
                        </h1>
                      </div>
                      <div>
                        {loading ? (
                          <LoadingGamesList games={filteredGames} />
                        ) : (
                          <GamesList games={filteredGames} />
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="mt-12 pt-12 text-center flex flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-[80px] h-[80px] text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                      <h1 className="font text-white text-2xl">
                        Sorry, there were no results.
                      </h1>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {loading ? (
                <LoadingGamesList games={games} />
              ) : (
                <GamesList games={games} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GamesPage;
