import React from "react";
import ReactPlayer from "react-player";

const VideosId = (props) => {
  const { videos } = props;

  return (
    <div>
      {videos.map((video) => (
        <div key={video?.id}>
          {video?.videoUrl ? (
            <ReactPlayer
              url={video?.videoUrl}
              width="100%"
              height="500px"
              controls
              autoPlay
            />
          ) : (
            <video
              src={video?.videoSrc}
              controls
              autoPlay
              width="100%"
              height="100%"
            ></video>
          )}
          <div className="mx-auto my-10 p-4 sm:px-6 lg:max-w-[1920px]">
            <div className="mx-3 lg:mx-12">
              <h1 className="text-white text-lg md:text-xl">{video?.name}</h1>
              <h1 className="text-white font text-2xl md:text-4xl my-3">
                {video?.title}
              </h1>
              <h1 className="text-white text-lg">{video?.description}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosId;
