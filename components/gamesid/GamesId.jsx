import React from "react";
import GameScreens from "../gamescreens/GameScreens";

const GamesId = (props) => {
  const { games } = props;

  return (
    <div className="details">
      {games.map((game) => (
        <div key={game?.id}>
          <div className="lg:flex">
            <div className="w-full">
              <img
                src={game?.secondImage}
                alt=""
                className="w-full rounded-lg object-contain"
              />
            </div>
            <div className="mt-5 sm:mt-5 lg:ml-5 lg:mt-0 lg:w-[80%]">
              <h3
                className="font text-3xl animate-bounce"
                style={{ animation: "pulseAnimation 3s infinite" }}
              >
                {game?.title}
              </h3>
              <h3 className="text-white lg:text-xl mt-3">
                {game?.description}
              </h3>
            </div>
          </div>
          <GameScreens games={games} />
        </div>
      ))}

      <style jsx>{`
        @keyframes pulseAnimation {
          0% {
            color: white;
          }
          50% {
            color: #fcaf17;
          }
          100% {
            color: white;
          }
        }
      `}</style>
    </div>
  );
};

export default GamesId;
