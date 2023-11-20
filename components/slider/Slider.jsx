import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import Modal from "../modal/Modal";
import LoadingSlider from "./LoadingSlider";

const Slider = (props) => {
  const { newswireGames } = props;
  const [loading, setLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const closeModal = () => {
    setIsOpen(false);
    setVideoSrc("");
  };

  const openModal = (src) => {
    setIsOpen(true);
    setVideoSrc(src);
  };

  return (
    <>
      {loading ? (
        <LoadingSlider />
      ) : (
        <Carousel className="mx-auto bg-black">
          {newswireGames.slice(6, 9).map((newswire) => (
            <div key={newswire?.id}>
              <div className="lg:flex">
                <div className="w-full">
                  <img
                    src={newswire?.imageSrc}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-5 w-full">
                  <h3 className="font text-2xl text-center lg:text-left text-white">
                    {newswire?.name}
                  </h3>
                  <h3 className="text-white text-center lg:text-left text-lg sm:text-lg md:text-3xl lg:text-4xl mt-3">
                    {newswire?.description}
                  </h3>
                  <div className="text-center lg:text-left">
                    <button
                      onClick={() => openModal(newswire?.videoSrc)}
                      className="text-white border border-gray-700 px-2 py-2 lg:text-2xl rounded my-8 lg:my-12 lg:px-5 lg:py-2 hover:bg-[#fcaf17] hover:text-black hover:border-[#fcaf17] transition ease-in-out delay-10"
                    >
                      Watch Now
                    </button>
                    <Modal
                      closeModal={closeModal}
                      videoSrc={videoSrc}
                      isOpen={isOpen}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Slider;
