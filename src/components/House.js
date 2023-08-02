import React from "react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="bg-white shadow-1 p-5 rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl">
      <img className="mb-8" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full px-3 text-white">{type}</div>
        <div className="bg-violet-500 rounded-full px-3 text-white">
          {country}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px] ">{address}</div>
      <div className="flex gap-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBed className="text-[20px]" />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBath className="text-[20px]" />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiArea className="text-[20px]" />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-violet-600 text-lg font-semibold">{price}</div>
    </div>
  );
};

export default House;
