import React, { useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = (props) => {
  const { closeModal, videoSrc, isOpen } = props;
  const cancelButtonRef = useRef(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full mt-12 max-w-lg lg:max-w-[60%] transform overflow-hidden rounded-lg bg-[#161616] text-left align-middle transition-all">
                <div>
                  <video
                    src={videoSrc}
                    controls
                    width="100%"
                    height="auto"
                    className="rounded-t"
                  ></video>
                </div>
                <div className="mt-3 mb-3 ml-3">
                  <button
                    type="button"
                    className="inline-flex justify-center bg-black border border-black rounded-md text-white hover:border-[#fcaf17] px-4 py-2 text-sm font-medium outline-none transition ease-in-out delay-10"
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
