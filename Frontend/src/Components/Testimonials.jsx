import React from "react";
import { testimonialsData } from "../assets/assets/assets";

function Testimonials() {
  return (
    <div>
      <h1 className="mt-4 mb-12 text-2xl font-semibold text-center text-transparent sm:mb-20 md:text-3xl lg:text-4xl bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text">
        Customer Testimonials
      </h1>
      <div className="grid max-w-4xl grid-cols-1 gap-10 px-4 py-8 mx-auto md:grid-cols-2 ">
        {testimonialsData.map((item, index) => (
          <div
            className="max-w-lg p-6 m-auto bg-white rounded-xl drop-shadow-xl"
            key={index}
          >
            <p className="text-4xl text-gray-500">”</p>
            <p className="text-sm text-gray-500">{item.text}</p>
            <div className="flex items-center gap-3 mt-5">
              <img
                className="w-[50px] rounded-[150px]"
                src={item.image}
                alt=""
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  {item.author}
                </h1>
                <p className="text-sm text-gray-700">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
