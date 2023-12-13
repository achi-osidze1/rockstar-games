import Link from "next/link";
import React from "react";

const GtaVideosList = (props) => {
  const { videos } = props;

  return (
    <div className="overflow-x-scroll">
      <div className="flex flex-row gap-x-6 mt-5 mb-3">
        {videos.slice(6, 12).map((video) => (
          <Link key={video?.id} href={`/videos/${video?.id}`}>
            <div className="group relative rounded-lg w-72 md:w-full h-full bg-[#000] border border-[#282828] cursor-pointer">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 transition ease-in-out delay-10">
                <img
                  src={video?.imageSrc}
                  alt=""
                  className="h-full w-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-5 mb-3 w-72 md:w-[400px] lg:w-[500px]">
                <h3 className="text-white">{video?.name}</h3>
                <h3 className="font text-2xl text-white">{video?.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GtaVideosList;
