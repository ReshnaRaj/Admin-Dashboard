import React, { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { GrLinkPrevious } from "react-icons/gr";
import Container1 from "../components/Container1";
import { salesDetails,total,latestSell,topSailedProduct } from "../Sources/data";

// import { SalesType } from "../datatypes/Dtypes";
 

import Barchart from "../components/Barchart";
 
import Linechart from "../components/Linechart";
import Doughnut from "../components/Doughnut";
import DataList from "../components/DataList";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-900 min-h-screen">
        <div className="  bg-slate-900">
          <nav className="flex justify-between items-center px-6 py-4 ">
            <p className="text-white text-2xl flex items-center">
              <button>
                <span className="text-white">
                  <GrLinkPrevious />
                </span>
              </button>
              Branch Name
            </p>
            <div className="md:flex hidden items-center space-x-36 ">
              <ul className="flex space-x-4 gap-3 font-Poppins ">
                <button
                  className=" rounded-lg  text-black hover:rounded-lg btn-active"
                  style={{ padding: "3px 5px", backgroundColor: "white" }}
                >
                  Dashboard
                </button>

                <button className="text-white    ">Sales</button>

                <button className="text-white  ">Payment</button>

                <button className="text-white  ">Tax</button>

                <button className="text-white  ">MIS</button>

                <button className="text-white  ">Purchase Entry</button>

                <li className="flex items-center text-xs  text-white">
                  Export to Excel{" "}
                  <span className="text-xs  ">
                    <PiMicrosoftExcelLogo />
                  </span>
                  <span className="mr-6"></span>
                </li>
                <span className="text-white text-xs  mt-2">
                  Last updated time 09-Aug-2023 08:09 AM
                </span>
              </ul>

              <span className="text-white text-xl pr-0">
                <IoSunnyOutline />
              </span>
            </div>
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </nav>
          {/* Responsive Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-950 py-2 px-4">
              <ul className="flex flex-col space-y-2">
                <li className="text-white hover:bg-white hover:text-black rounded-lg ">
                  Dashboard
                </li>
                <li className="text-white hover:bg-white hover:text-black rounded-lg">
                  Sales
                </li>
                <li className="text-white hover:bg-white hover:text-black rounded-lg">
                  Payment
                </li>
                <li className="text-white hover:bg-white hover:text-black rounded-lg">
                  Tax
                </li>
                <li className="text-white hover:bg-white hover:text-black rounded-lg">
                  MIS
                </li>
                <li className="text-white hover:bg-white hover:text-black rounded-lg">
                  Purchase Entry
                </li>
                <li className="flex items-center text-white">
                  Export to Excel{" "}
                  <span className="ml-2 text-xl">
                    <PiMicrosoftExcelLogo />
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col  lg:flex-row bg-slate-900">
          <div className="grid flex-grow h-96 w-[10%] card bg-slate-900 rounded-box justify-between place-items-center">
            <div className="flex space-x-4   ">
              {salesDetails.map((data, index) => (
                <Container1 key={index} data={data} />
              ))}
            </div>
            {/* 3cards */}
            <div className="flex flex-row space-x-5  ">
              <Barchart />
              <div className="bg-gray-950  text-white p-4  rounded-lg shadow-md  ">
                <h3 className="text-xs font-semibold mb-2">Total Purchase </h3>

                <p className="text-lg font-normal text-center  mt-12 text-violet-600">
                  <span className="text-white text-sm">cash/23<br></br></span>
                  {total.purchase?.credit} 
                  <span className="text-xs text-white pl-1">AED</span>
                </p>
                <p className="text-lg font-normal text-center mt-10  text-violet-600">
                <span className="text-white text-sm">credit/11<br></br></span>
                  {total.purchase?.cash} 
                  <span className="text-xs text-white pl-1">AED</span>
                </p>
              </div>
              <div className="bg-gray-950  text-white p-4  rounded-lg shadow-md  ">
                <h3 className="text-xs font-semibold mb-2">Total Payment </h3>
                <p className="text-lg font-normal text-center mb-4  mt-12 text-red-600">
                <span className="text-white text-sm">cash/12<br></br></span>
                
                  {total.payment?.cash}
                  <span className="text-xs text-white pl-1">AED</span>
                </p>
                <p className="text-lg font-normal text-center  mt-10 text-yellow-600">
                <span className="text-white text-sm">cheque/2<br></br></span>
                  {total.payment?.cheque}
                  <span className="text-xs text-white pl-1">AED</span>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="divider lg:divider-horizontal"></div> */}
          {/* line chart starts */}
          <div className="grid flex-grow h-96  w-[10%]  card bg-gray-950 rounded-box place-items-center   mr-10">
            <p className="text-white text-center">Day Wise comparison
            <span className="pl-14"><button className=" rounded-lg  text-black  mt-5 hover:rounded-lg btn-active"
                  style={{ padding: "3px 5px", backgroundColor: "white" }}>Day</button>
                  <button className="pl-6">Month</button></span>
            </p>
          <p className=" text-xs  text-white">price</p>
          <Linechart/>
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row mt-5 bg-slate-900">
        <div className="w-full h-[51rem] md:h-72 bg-transparent flex flex-wrap justify-center items-center py-5 px-10 md:px-0">
      <div className="md:w-[90%] w-full h-[100%] bg-transparent flex items-center justify-between flex-nowrap flex-col md:flex-row gap-3">
        {/* Left section 1 */}
        <div className="h-[40%] md:h-[100%] w-[100%] md:w-[40%] md:ms-6 bg-gray-950 rounded-lg flex flex-col items-center md:flex-row md:p-0 md:gap-0">
          <div className="md:h-full h-[30%] md:w-[70%] w-full flex flex-col gap-5 p-6 md:p-2 text-white">
            <p className="text-sm font-semibold w-full ps-4">
              Collection distribution
            </p>
            <div className="w-full h-fit ps-4">
              <p className="text-[10px] md:text-sm">Total amount</p>
              <p>
                <b>365.61</b> AED
              </p>
            </div>
            {/* ... Other content */}
          </div>
          <Doughnut />
          {/* ... Other content */}
        </div>
        {/* Middle section */}
        <div className="md:h-[100%] h-fit p-4 w-[100%] md:w-[30%] bg-gray-950 rounded-lg md:p-4">
          <div className="w-full h-8 flex items-center ps-4 text-sm py-3">
            <p className="text-white font-semibold">Top 5 selling product</p>
          </div>
          <div className="w-full h-[86%] bg-transparent flex justify-center items-center flex-col">
          {topSailedProduct.map((item, i) => {
              return <DataList key={i} items={item} />;
            })}
             
          </div>
        </div>
        {/* Right section */}
        <div className="md:h-[100%] h-fit p-4 w-[100%] md:w-[30%] bg-gray-950 rounded-lg md:p-4">
          <div className="w-full h-8 flex items-center ps-4 text-sm py-3">
            <p className="text-white font-semibold">Least 5 selling product</p>
          </div>
          <div className="w-full h-[86%] bg-transparent flex justify-center items-center flex-col">
          {latestSell.map((item, i) => (
              <DataList key={i} items={item} />
            ))}
             
          </div>
        </div>
      </div>
    </div>
          
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
