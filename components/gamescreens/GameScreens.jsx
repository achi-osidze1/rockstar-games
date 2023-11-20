import React from "react";

const GameScreens = (props) => {
  const { games } = props;

  return (
    <div className="my-12 pt-12">
      <h1 className="text-white font text-2xl">Screens</h1>
      {games.map((game) => (
        <div key={game?.id} className="game-screens mt-3">
          <div className="-m-1 md:flex md:flex-wrap lg:flex lg:flex-wrap md:-m-2">
            <div className="flex flex-wrap md:w-1/2 lg:1/2">
              <div className="w-full md:w-1/2 lg:w-1/2 pb-3 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center cursor-pointer hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screens}
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 pb-3 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center cursor-pointer hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screens2}
                />
              </div>
              <div className="w-full pb-3 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center cursor-pointer hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screens3}
                />
              </div>
            </div>
            <div className="flex flex-wrap md:w-1/2 lg:1/2">
              <div className="w-full pb-3 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center cursor-pointer hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screens4}
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 pb-3 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center cursor-pointer hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screens5}
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center cursor-pointer hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screens6}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameScreens;
