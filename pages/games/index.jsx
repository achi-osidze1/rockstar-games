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
        <div className="mx-3 lg:mx-12">
          {search ? (
            <>
              {loading ? (
                <div className="text-center">
                  <h1 className="font mb-3 text-gray-700 text-2xl animate-pulse">
                    Fetching Search Results...
                  </h1>
                  <h1 className="text-white uppercase text-4xl">{search}</h1>
                </div>
              ) : (
                <>
                  <div className="text-center mb-5">
                    <h1 className="font text-gray-700 text-2xl mb-3">
                      Search Results For:
                    </h1>
                    <h1 className="text-white uppercase text-4xl mb-3">{search}</h1>
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
