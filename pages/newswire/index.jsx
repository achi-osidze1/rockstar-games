import React, { useEffect, useState } from "react";
import Head from "next/head";
import NewswireList from "@/components/newswire/newswirelist/NewswireList";
import LoadingNewswireList from "@/components/newswire/newswirelist/LoadingNewswireList";
import axios from "axios";

const NewswirePage = () => {
  const [newswireGames, setNewswireGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    async function fetchNewswireGames() {
      try {
        const response = await axios.get("/api/newswireData");
        if (response.status === 200) {
          setNewswireGames(response.data.newswire);
        }
      } catch (error) {
        console.error("Error fetching newswire games:", error);
      }
    }
    fetchNewswireGames();
  }, []);

  return (
    <>
      <Head>
        <title>Rockstar Games | Newswire</title>
        <meta name="description" content="NewswirePage" />
      </Head>

      <div className="mx-auto mt-12 pt-12 p-4 sm:px-6 lg:max-w-[1920px]">
        <div className="mx-3 lg:mx-12 my-8">
          {loading ? (
            <LoadingNewswireList newswireGames={newswireGames} />
          ) : (
            <NewswireList newswireGames={newswireGames} />
          )}
        </div>
      </div>
    </>
  );
};

export default NewswirePage;
