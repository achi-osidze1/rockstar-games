import React from "react";

const LoadingSlider = () => {
  return (
    <div className="mx-auto p-4 sm:px-6 lg:max-w-[1920px]">
      <div className="mx-3 lg:mx-12">
        <div role="status" className="mx-auto animate-pulse mt-10">
          <div className="lg:flex">
            <div className="w-full h-[400px] rounded-lg flex items-center justify-center bg-[#282828]"></div>
            <div className="lg:p-5 mt-5 lg:mt-0 w-full">
              <div className="h-5 w-[200px] bg-[#282828] rounded-lg"></div>
              <div className="h-5 mt-5 bg-[#282828] rounded-lg"></div>
              <div className="h-5 w-[75px] mt-5 bg-[#282828] rounded-lg"></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSlider;
