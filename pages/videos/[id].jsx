import VideosId from "@/components/videosid/VideosId";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Spinner from "@/components/spinner/Spinner";

const Videos = () => {
  const router = useRouter();
  const { id } = router.query;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  useEffect(() => {
    async function fetchVideos() {
      try {
        if (id) {
          const response = await axios.get("/api/videosData");
          if (response.status === 200) {
            const data = response.data;
            const selectedGame = data.videos.filter(
              (game) => String(game.id) === String(id)
            );
            setVideos(selectedGame);
          }
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }
    fetchVideos();
  }, [id]);

  return (
    <>
      <Head>
        <title>Rockstar Games | Video - {id}</title>
        <meta name="description" content="Videos" />
      </Head>

      <div className="w-full h-full mt-12 pt-3">
        {loading ? <Spinner /> : <VideosId videos={videos} />}
      </div>
    </>
  );
};

export default Videos;
