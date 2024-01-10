import React, { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { GrLinkPrevious } from "react-icons/gr";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className=" bg-slate-950">
        <nav className="flex justify-between items-center px-6 py-4 ">
          <p className="text-white text-2xl flex items-center">
            <button><span className="text-white">
              <GrLinkPrevious />
            </span>
            </button>
            
            Branch Name
          </p>
          <div className="md:flex hidden items-center space-x-20">
            <ul className="flex space-x-4  gap-8   font-Poppins">
              <li
                className="text-white rounded-lg hover:bg-white hover:text-black hover:rounded-lg"
                style={{ padding: "5px 10px" }}
              >
                Dashboard
              </li>

              <li
                className="text-white hover:bg-white hover:text-black hover:rounded-lg"
                style={{ padding: "5px 10px" }}
              >
                Sales
              </li>
              <li
                className="text-white hover:bg-white hover:text-black  hover:rounded-lg"
                style={{ padding: "5px 10px" }}
              >
                Payment
              </li>
              <li
                className="text-white hover:bg-white hover:text-black hover:rounded-lg"
                style={{ padding: "5px 10px" }}
              >
                Tax
              </li>
              <li
                className="text-white hover:bg-white hover:text-black hover:rounded-lg"
                style={{ padding: "5px 10px" }}
              >
                MIS
              </li>
              <li
                className="text-white hover:bg-white hover:text-black hover:rounded-lg"
                style={{ padding: "5px 10px" }}
              >
                Purchase Entry
              </li>
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
    </>
  );
};

export default Dashboard;
