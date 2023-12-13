import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import GamesId from "@/components/gamesid/GamesId";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";
import { Context } from "@/components/context/Context";

const GameDetails = () => {
  const router = useRouter();
  const { id, name } = router.query;
  const { games, setGames } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        if (id) {
          const response = await axios.get(`/api/featuredGamesData`);
          if (response.status === 200) {
            const data = response.data;
            const selectedGame = data.featuredGames.filter(
              (game) => String(game.id) === String(id)
            );
            setGames(selectedGame);
          }
        }
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    }
    fetchGameDetails();
  }, [id]);

  return (
    <>
      <Head>
        <title>Rockstar Games | {name}</title>
        <meta name="description" content="GameDetails" />
      </Head>

      <div className="mx-auto mt-12 pt-12 p-4 sm:px-6 lg:max-w-[1920px]">
        <div className="mx-3 lg:mx-12 my-8">
          {loading ? <Spinner /> : <GamesId games={games} />}
        </div>
      </div>
    </>
  );
};

export default GameDetails;
