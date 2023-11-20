import Head from "next/head";
import Newswire from "@/components/newswire/Newswire";
import FeaturedGames from "@/components/featuredgames/FeaturedGames";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import LoadingNewswire from "@/components/newswire/LoadingNewswire";
import LoadingFeaturedGames from "@/components/featuredgames/LoadingFeaturedGames";
import axios from "axios";
import Slider from "@/components/slider/Slider";
import { Context } from "@/components/context/Context";

export default function Home() {
  const [newswireGames, setNewswireGames] = useState([]);
  const { games, setGames } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    async function fetchNewswireGames() {
      try {
        const response = await axios.get('/api/newswireData');
        if (response.status === 200) {
          setNewswireGames(response.data.newswire);
        }
      } catch (error) {
        console.error('Error fetching newswire games:', error);
      }
    }
    fetchNewswireGames();
  }, []);

  useEffect(() => {
    async function fetchFeaturedGames() {
      try {
        const response = await axios.get('/api/featuredGamesData');
        if (response.status === 200) {
          setGames(response.data.featuredGames);
        }
      } catch (error) {
        console.error('Error fetching featured games:', error);
      }
    }
    fetchFeaturedGames();
  }, []);

  return (
    <>
      <Head>
        <title>Rockstar Games</title>
        <meta name="description" content="HomePage" />
      </Head>

      <div className="mt-12 pt-3">
        <Slider newswireGames={newswireGames}/>
      </div>

      <div className="mx-auto mt-12 pt-12 p-4 sm:px-6 lg:max-w-[1920px]">
        <div className="mx-3 lg:mx-12">
          <div className="my-5">
            <div className="w-0">
              <Link href='/newswire'>
                <h2 className="text-2xl font-bold tracking-tight text-white cursor-pointer w-0 hover:text-[#fcaf17] transition ease-in-out delay-10">
                  Newswire
                </h2>
              </Link>
            </div>
            {loading ? (
              <LoadingNewswire newswireGames={newswireGames} />
            ) : (
              <>
                <Newswire newswireGames={newswireGames} />
                <div className="text-center">
                  <Link href='/newswire'>
                    <button className="px-2 py-1 text-white font-bold transition ease-in-out delay-10 outline-none rounded-tl-lg rounded-tr-lg border hover:rounded-lg border-[#0b0b0b] border-b border-b-[#fcaf17] hover:bg-[#fcaf17] hover:text-black cursor-pointer">
                      View More
                    </button>
                  </Link>
                </div>
              </>
            )}
            <div className="w-0">
              <Link href='/games'>
                <h2 className="text-2xl mt-12 pt-12 font-bold tracking-tight text-white cursor-pointer w-0 hover:text-[#fcaf17] transition ease-in-out delay-10 whitespace-nowrap">
                  Featured Games
                </h2>
              </Link>
            </div>
            {loading ? (
              <LoadingFeaturedGames games={games} />
            ) : (
              <>
                <FeaturedGames games={games} />
                <div className="text-center">
                  <Link href='/games'>
                    <button className="px-2 py-1 text-white font-bold transition ease-in-out delay-10 outline-none rounded-tl-lg rounded-tr-lg border hover:rounded-lg border-[#0b0b0b] border-b border-b-[#fcaf17] hover:bg-[#fcaf17] hover:text-black cursor-pointer">
                      View More
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
