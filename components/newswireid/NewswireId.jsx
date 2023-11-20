import React from "react";

const NewswireId = (props) => {
  const { newswireGames } = props;

  return (
    <div className="flex justify-center items-center">
      {newswireGames.map((game) => (
        <div key={game?.id} className="w-[700px]">
          <div className="h-[497.438px] w-full transition ease-in-out delay-10 bg-black">
            <img
              src={game?.imageSrc}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl md:text-2xl text-white">{game?.name}</h3>
            <h3 className="font text-3xl md:text-5xl text-white mt-5">
              {game?.description}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewswireId;
