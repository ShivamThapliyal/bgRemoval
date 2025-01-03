import React from "react";
import { assets } from "../assets/assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

function Navbar() {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <div className="flex items-center justify-between py-3 mx-4 lg:mx-44">
      <Link to={"/"}>
        <img className="w-32 sm:w-44" src={assets.logo} alt="" />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox:
                  "w-[50px] h-[50px] border-2 border-blue-500 rounded-full", // Custom styles for avatar
                userButtonTrigger: "hover:bg-gray-200 p-2 rounded-md", // Custom styles for button
              },
            }}
          />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="text-white  bg-zinc-800 flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-[30px]"
        >
          Get started
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
        </button>
      )}
    </div>
  );
}

export default Navbar;
