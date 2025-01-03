import React from "react";
import { assets } from "../assets/assets/assets";

function Footer() {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 lg:px-44">
      <img className="w-[180px]" src={assets.logo} alt="" />
      <p className="text-[18px] text-gray-500 flex-1 border-l pl-4  max-sm:hidden ">
        Copyright @GreatStack.dev | All right reserved.
      </p>
      <div className="flex items-center">
        <img className="w-[40px]" src={assets.facebook_icon} alt="" />
        <img className="w-[40px]" src={assets.twitter_icon} alt="" />
        <img className="w-[40px]" src={assets.google_plus_icon} alt="" />
      </div>
    </div>
  );
}

export default Footer;
