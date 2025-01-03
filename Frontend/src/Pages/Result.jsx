import React from "react";
import { assets } from "../assets/assets/assets";

function Result() {
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="px-8 py-6 bg-white rounded-lg drop-shadow-lg">
        <div className="flex flex-col grid-cols-2 gap-8 sm:grid">
          <div>
            <p className="mb-2 font-semibold text-gray-600">Original</p>
            <img className="border rounded-md" src={assets.image_w_bg} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 font-semibold text-gray-600">
              Background Removed
            </p>
            <div className="relative h-full overflow-hidden border border-gray-500 rounded-md bg-layer">
              {/* <img
                className="border rounded-md"
                src={assets.image_wo_bg}
                alt=""
              /> */}
              <div className="absolute transform translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2">
                <div className="w-12 h-12 border-4 rounded-full border-violet-500 border-t-transparent animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 sm:justify-end">
          <button className="px-8 py-4 text-transparent transition-all duration-700 border rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-800 bg-clip-text border-violet-600 hover:scale-105">
            Try another image
          </button>
          <a
            href=""
            className="gap-3 px-8 py-4 text-white transition-all duration-700 rounded-full cursor-pointer  bg-gradient-to-r from-violet-600 to-fuchsia-800 hover:scale-105"
          >
            Download Image
          </a>
        </div>
      </div>
    </div>
  );
}

export default Result;
