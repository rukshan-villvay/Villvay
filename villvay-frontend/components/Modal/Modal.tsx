import React from "react";
import type { FC, ReactNode } from "react";

type Props = { message: string; closeModal: () => void };

const Modal: FC<Props> = ({ message, closeModal }) => {
  return (
    <div>
      <div
        id="defaultModal"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex items-center justify-center h-screen"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative  rounded-lg shadow bg-gray-700">
            <div className="flex flex-nowrap">
              <button
                type="button"
                className="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex ali hover:bg-gray-600 hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => {
                  closeModal();
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <h5 className="text-white text-xl text-center">{message}</h5>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-600 justify-center">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                onClick={() => closeModal()}
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
