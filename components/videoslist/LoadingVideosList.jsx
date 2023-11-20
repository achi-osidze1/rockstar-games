import React from "react";

const LoadingVideosList = (props) => {
  const { videos } = props;
  return (
    <>
      <div className="flex flex-row gap-x-6 overflow-x-scroll mt-5">
        {videos.map((video) => (
          <div
            key={video?.id}
            className="group relative rounded-lg w-[400px] h-full animate-pulse"
          >
            <div className="flex justify-center items-center h-64 bg-[#282828] rounded-lg"></div>
            <div className="p-5 mb-3 w-[400px]">
              <h3 className="bg-[#282828] w-full h-5 rounded mb-3"></h3>
              <h3 className="bg-[#282828] w-full h-5 rounded"></h3>
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 0;
          }
        `}
      </style>
    </>
  );
};

export default LoadingVideosList;
