import React, { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { GrLinkPrevious } from "react-icons/gr";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-950 min-h-screen">
        <div className=" bg-slate-950">
          <nav className="flex justify-between items-center px-6 py-4 ">
            <p className="text-white text-2xl flex items-center">
              <button>
                <span className="text-white">
                  <GrLinkPrevious />
                </span>
              </button>
              Branch Name
            </p>
            <div className="md:flex hidden items-center space-x-20">
              <ul className="flex space-x-4 gap-8 font-Poppins">
                <button
                  className=" rounded-lg    text-black hover:rounded-lg btn-active"
                  style={{ padding: "5px 10px", backgroundColor: "white" }}
                >
                  Dashboard
                </button>

                <button
                  className="text-white    "
                  style={{ padding: "5px 10px" }}
                >
                  Sales
                </button>

                <button
                  className="text-white  "
                  style={{ padding: "5px 10px" }}
                >
                  Payment
                </button>

                <button
                  className="text-white  "
                  style={{ padding: "5px 10px" }}
                >
                  Tax
                </button>

                <button
                  className="text-white  "
                  style={{ padding: "5px 10px" }}
                >
                  MIS
                </button>

                <button
                  className="text-white  "
                  style={{ padding: "5px 10px" }}
                >
                  Purchase Entry
                </button>
              </ul>

              <li className="flex items-center text-white">
                Export to Excel{" "}
                <span className="ml-2 text-2xl">
                  <PiMicrosoftExcelLogo />
                </span>
              </li>
              <span className="text-white text-3xl pr-9">
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
        <div className="flex flex-col  lg:flex-row bg-blue-700">
          <div className="grid flex-grow h-96 w-[10%] card bg-base-300 rounded-box justify-between place-items-center">
            <div className="flex space-x-4  ">
              <div className="bg-red-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Card 1</h3>
                <p>Card content goes here...</p>
              </div>
              <div className="bg-red-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Card 2</h3>
                <p>Card content goes here...</p>
              </div>
              <div className="bg-red-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Card 3</h3>
                <p>Card content goes here...</p>
              </div>
              <div className="bg-red-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Card 4</h3>
                <p>Card content goes here...</p>
              </div>
              <div className="bg-red-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Card 5</h3>
                <p>Card content goes here...</p>
              </div>
            </div>
            {/* 3cards */}
            <div className="flex flex-row space-x-5">
              <div className="bg-red-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Card 1</h3>
                <p>Card content goes here...</p>
              </div>
              <div className="bg-red-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Card 2</h3>
                <p>Card content goes here...</p>
              </div>
              <div className="bg-red-200 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Card 3</h3>
                <p>Card content goes here...</p>
              </div>
            </div>
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="grid flex-grow h-96 card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row mt-5 bg-slate-950">
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
