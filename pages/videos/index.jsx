import React, { useEffect, useState } from "react";
import axios from "axios";
import GtaVideosList from "@/components/videoslist/GtaVideosList";
import Head from "next/head";
import LoadingVideosList from "@/components/videoslist/LoadingVideosList";
import RedDeadVideosList from "@/components/videoslist/RedDeadVideosList";
import GtaVIVideo from "@/components/videoslist/GtaVIVideo";

const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get("/api/videosData");
        if (response.status === 200) {
          setVideos(response.data.videos);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }
    fetchVideos();
  }, []);

  return (
    <>
      <Head>
        <title>Rockstar Games | Videos</title>
        <meta name="description" content="VideosPage" />
      </Head>

      <div className="mx-auto mt-12 pt-12 p-4 sm:px-6 lg:max-w-[1920px]">
        <div className="mx-3 lg:mx-12 my-8">
          <div className="mt-5">
            <h1 className="text-xl md:text-2xl font text-white">
              Videos From Grand Theft Auto VI
            </h1>
            {loading ? (
              <LoadingVideosList videos={videos} />
            ) : (
              <GtaVIVideo videos={videos} />
            )}
          </div>
          <div className="mt-12 pt-12">
            <h1 className="text-xl md:text-2xl font text-white">
              Videos From Red Dead Online
            </h1>
            {loading ? (
              <LoadingVideosList videos={videos} />
            ) : (
              <RedDeadVideosList videos={videos} />
            )}
          </div>
          <div className="mt-12 pt-12">
            <h1 className="text-xl md:text-2xl font text-white">
              Videos From Gta Online
            </h1>
            {loading ? (
              <LoadingVideosList videos={videos} />
            ) : (
              <GtaVideosList videos={videos} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosPage;
