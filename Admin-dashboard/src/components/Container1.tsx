import React from "react";
import { SalesType } from "../datatypes/Dtypes";

interface Container1Props {
  data: SalesType;
}

const Container1: React.FC<Container1Props> = ({ data }) => {
    console.log(data.value,"data of the box")
  return (
    <div className="bg-gray-950  text-white p-4  rounded-lg shadow-md">
      <h3 className="text-xs font-semibold mb-2">{data.title}</h3>
      <p className={`text-lg font-normal text-center mb-4 ${data.color}`}>{data.value}{data.currency}</p>
      <footer className={`text-white text-sm text-center  ${data.footer?.color}`}>
          {data.footer?.value}
        </footer>
    </div>
  );
};

export default Container1;
