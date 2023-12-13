import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NewswireId from "@/components/newswireid/NewswireId";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";

const NewswireDetails = () => {
  const router = useRouter();
  const { id, description } = router.query;
  const [newswireGames, setNewswireGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  useEffect(() => {
    async function fetchNewswireDetails() {
      try {
        if (id) {
          const response = await axios.get("/api/newswireData");
          if (response.status === 200) {
            const data = response.data;
            const selectedGame = data.newswire.filter(
              (game) => String(game.id) === String(id)
            );
            setNewswireGames(selectedGame);
          }
        }
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    }
    fetchNewswireDetails();
  }, [id]);

  return (
    <>
      <Head>
        <title>{description}</title>
        <meta name="description" content="NewswireDetails" />
      </Head>

      <div className="mx-auto mt-12 p-4 sm:px-6 lg:max-w-[1920px]">
        <div className="mx-3 lg:mx-12 my-[15px]">
          {loading ? <Spinner /> : <NewswireId newswireGames={newswireGames} />}
        </div>
      </div>
    </>
  );
};

export default NewswireDetails;
