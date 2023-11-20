import React from "react";

const LoadingGamesList = (props) => {
  const { games } = props

  return (
    <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8">
      {games.map((game) => (
        <div
          key={game?.id}
          role="status"
          className="group relative rounded-lg animate-pulse"
        >
          <div className="flex justify-center items-center h-64 bg-[#282828] rounded-lg"></div>
        </div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingGamesList;
