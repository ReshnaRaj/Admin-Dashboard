import React, { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { GrLinkPrevious } from "react-icons/gr";
import Container1 from "../components/Container1";
import { salesDetails  } from "../Sources/data";
import { SalesType } from "../datatypes/Dtypes";
 
import Barchart from "../components/Barchart";

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
              < Barchart/>
              
             
            </div>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow h-96 card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row mt-5 bg-slate-900">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            content
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            content
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
