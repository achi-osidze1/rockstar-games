import React from "react";

const LoadingNewswireList = (props) => {
  const { newswireGames } = props;

  return (
    <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {newswireGames.map((newswire) => (
        <div
          key={newswire?.id}
          role="status"
          className="group relative rounded-lg animate-pulse"
        >
          <div className="flex justify-center items-center h-64 bg-[#282828] rounded-lg"></div>
          <div className="p-5 mb-3">
            <div className="flex justify-between mb-3">
              <h3 className="bg-[#282828] h-5 w-3/4 rounded"></h3>
              <h3 className="bg-[#282828] w-1/5 h-5 rounded"></h3>
            </div>
            <h3 className="bg-[#282828] w-full h-5 rounded"></h3>
          </div>
        </div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingNewswireList;
