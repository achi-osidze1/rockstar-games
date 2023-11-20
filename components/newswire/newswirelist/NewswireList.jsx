import React, { useState } from "react";
import Link from "next/link";

const NewswireList = (props) => {
  const { newswireGames } = props;
  const [visibleItems, setVisibleItems] = useState(9);

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 9);
  };

  return (
    <>
      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {newswireGames.slice(0, visibleItems).map((newswire) => (
          <Link
            key={newswire?.id}
            href={`/newswire/${newswire?.id}?name=${newswire?.name}&description=${newswire?.description}`}
          >
            <div className="group relative rounded-lg h-full bg-[#000] border border-[#282828] cursor-pointer">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 transition ease-in-out delay-10">
                <img
                  src={newswire?.imageSrc}
                  alt={newswire?.imageAlt}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="p-5 mb-3">
                <div className="flex justify-between mb-3">
                  <h3 className="text-white">{newswire?.name}</h3>
                  <h3 className="text-sm text-gray-400 mb-2">
                    {newswire?.date}
                  </h3>
                </div>
                <h3 className="font text-2xl text-white">
                  {newswire?.description}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        {visibleItems < props.newswireGames.length && (
          <div className="text-center mb-5">
            <button
              onClick={showMoreItems}
              className="px-2 py-1 text-white font-bold transition ease-in-out delay-10 outline-none rounded-tl-lg rounded-tr-lg border hover:rounded-lg border-[#0b0b0b] border-b border-b-[#fcaf17] hover:bg-[#fcaf17] hover:text-black cursor-pointer"
            >
              More Stories
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NewswireList;
