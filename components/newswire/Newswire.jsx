import React from "react";
import Link from "next/link";

const Newswire = (props) => {
  const { newswireGames } = props;

  return (
    <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {newswireGames.slice(0, 6).map((newswire) => (
        <Link
          key={newswire?.id}
          href={`/newswire/${newswire?.id}?name=${newswire?.name}&description=${newswire?.description}`}
        >
          <div className="group relative rounded-lg h-full bg-[#000] border border-[#282828] cursor-pointer">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 transition ease-in-out delay-10">
              <img
                src={newswire?.imageSrc}
                alt={newswire?.imageAlt}
                className="h-full w-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-5 mb-3">
              <div className="flex justify-between mb-3">
                <h3 className="text-white">{newswire?.name}</h3>
                <h3 className="text-sm text-gray-400 mb-2">{newswire?.date}</h3>
              </div>
              <h3 className="font text-2xl text-white">
                {newswire?.description}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Newswire;
