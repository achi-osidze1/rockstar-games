import React from "react";
import ReactPlayer from "react-player";

const NewswireId = (props) => {
  const { newswireGames } = props;

  return (
    <div className="flex justify-center items-center">
      {newswireGames.map((newswire) => (
        <div key={newswire?.id} className="w-[760px]">
          <div className="w-full">
            <div className="rounded-lg overflow-hidden">
              {newswire?.videoUrl && (
                <ReactPlayer
                  url={newswire?.videoUrl}
                  width="100%"
                  height="420px"
                  controls
                />
              )}
            </div>
            <img src={newswire?.secondImageSrc} alt="" className="w-full" />
          </div>
          <div className="p-5">
            <h3 className="text-xl md:text-2xl text-white">{newswire?.name}</h3>
            <h3 className="font text-2xl md:text-4xl text-white mt-5">
              {newswire?.description}
            </h3>
            <h3 className="text-gray-400 my-5">{newswire?.date}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewswireId;
