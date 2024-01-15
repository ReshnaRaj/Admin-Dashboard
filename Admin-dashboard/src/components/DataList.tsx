import React from 'react';
import { Item } from '../datatypes/Dtypes';

interface Values {
  items: Item;
}

const DataList: React.FC<Values> = ({ items }) => {
  let extractedPrice = 0;

  if (!items?.percentage) {
    extractedPrice = items?.price ? parseInt(items.price.split(" ")[0]) : 0;
  } else {
    extractedPrice = items?.percentage ?? 0;
  }

  const pricePercentage = `${extractedPrice}%`;

  return (
    <div className="w-full h-8 bg-transparent flex items-center text-xs font-sans text-white p-4">
      {/* Left section: Item name */}
      <div className="md:w-[33%] h-full flex items-center justify-end pe-3">
        <p className="truncate w-20 text-end me-4">{items?.item}</p>
      </div>
      {/* Middle section: Price percentage bar */}
      <div
        style={{ width: pricePercentage }}
        className="h-full w-[33%] flex items-center transition-all duration-700 ease-in scale-110"
      >
        <span className={`w-[90%] h-2 ${items?.color} rounded-e-md`}></span>
      </div>
      {/* Right section: Item price */}
      <div className="w-[33%] h-full flex items-center justify-start">
        <p className="truncate">{items?.price}</p>
      </div>
    </div>
  );
};

export default DataList;
