import Link from "next/link";
import React from "react";

const GamesList = (props) => {
  const { games } = props;

  return (
    <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8">
      {games.map((game) => (
        <Link key={game?.id} href={`/games/${game?.id}?name=${game?.name}`}>
          <div className="group relative h-full rounded-lg cursor-pointer">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 transition ease-in-out delay-10">
              <img
                src={game?.image}
                alt=""
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GamesList;
