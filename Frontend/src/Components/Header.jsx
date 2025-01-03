import React from "react";
import { assets } from "../assets/assets/assets";

function Header() {
  return (
    <div className="flex items-center justify-between px-4 mt-10 max-sm:flex-col-reverse gap-y-10 lg:px-44 sm:mt-20">
      <div className="">
        <div className="text-4xl font-bold leading-tight xl:text-5xl 2xl:text-6xl text-neutral-700">
          <h1>
            Remove the <br />{" "}
            <span className="text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-700 bg-clip-text">
              Background
            </span>
            from <br /> images for free
          </h1>
        </div>
        <div>
          <p className="my-6 text-[15px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Deserunt eum placeat modi officia impedit <br /> illo fugit
            doloremque reprehenderit architecto fugiat id itaque corpori
          </p>
        </div>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            className="inline-flex gap-3 px-8 py-4 m-auto transition-all duration-700 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-800 hover:scale-105"
            htmlFor="upload1"
          >
            <img className="w-[20px]" src={assets.upload_btn_icon} alt="" />
            <p className="text-sm text-white">Upload your image</p>
          </label>
        </div>
      </div>
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
}

export default Header;
