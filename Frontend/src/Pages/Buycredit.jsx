import React from "react";
import { assets, plans } from "../assets/assets/assets";

function Buycredit() {
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="px-8 py-4 border rounded-full cursor-pointer">
        Our Plans
      </button>
      <h1 className="mt-4 mb-8 text-2xl font-semibold text-center text-transparent md:text-3xl lg:text-4xl bg-gradient-to-r from-gray-700 to-gray-400 bg-clip-text">
        Choose the plan that’s right for you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-4 text-left ">
        {plans.map((item, index) => (
          <div
            className="px-8 py-12 text-gray-500 transition-all duration-500 bg-white rounded-xl drop-shadow-xl hover:scale-105"
            key={index}
          >
            <img className="w-[40px]" src={assets.logo_icon} alt="" />
            <h1 className="mt-3 font-semibold">{item.id}</h1>
            <p className="text-sm">{item.desc}</p>

            <p className="mt-6">
              <span className="text-3xl font-medium">{item.price}</span>/
              {item.credits}
            </p>

            <button className="w-full py-3 mt-8 text-sm text-white bg-gray-500 rounded-md min-w-52 hover:bg-gray-900">
              Get started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buycredit;
