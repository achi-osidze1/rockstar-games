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
                  className="block h-full w-full rounded object-cover object-center hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screenshots[0]}
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 pb-3 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screenshots[1]}
                />
              </div>
              <div className="w-full pb-3 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screenshots[2]}
                />
              </div>
            </div>
            <div className="flex flex-wrap md:w-1/2 lg:1/2">
              <div className="w-full pb-3 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screenshots[3]}
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 pb-3 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screenshots[4]}
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 p-1 md:p-2">
                <img
                  alt=""
                  className="block h-full w-full rounded object-cover object-center hover:opacity-75 transition ease-in-out delay-10"
                  src={game?.screenshots[5]}
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
