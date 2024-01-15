import React from 'react';
// import List from '../components/List';

interface SellingProductProps {
  data:  Item // Replace YourProductType with the actual type of your product data
}

const SellingProduct: React.FC<SellingProductProps> = ({ data }) => {
  return (
    <div className="md:h-[100%] h-fit p-4 w-[100%] md:w-[30%] bg-gray-950 rounded-lg md:p-4">
      <div className="w-full h-8 flex items-center ps-4 text-sm py-3">
        <p className="text-white font-semibold">Least 5 selling product</p>
      </div>
      <div className="w-full h-[86%] bg-transparent flex justify-center items-center flex-col">
        {data.map((item, i) => (
          <List key={i} items={item} />
        ))}
      </div>
    </div>
  );
};

export default SellingProduct;
