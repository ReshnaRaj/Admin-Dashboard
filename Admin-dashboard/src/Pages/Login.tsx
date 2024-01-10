// import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { BiLogoSpringBoot } from "react-icons/bi";
 

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-slate-950">
        {/* navbar */}
        <nav className="flex justify-between items-center w-full fixed top-0 left-0 px-6 py-4 z-50 bg-transparent">
          <div className="flex items-center">
            <p className="text-white text-4xl"><BiLogoSpringBoot /></p>
          </div>
          <div className="flex items-center">
            <span className="text-white text-3xl pr-9">
              <IoSunnyOutline />
            </span>
          </div>
        </nav>
        {/* form and login page */}
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* image */}
          <div className="w-full md:w-[50%] h-[100%] bg-transparent flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1704868309/Screenshot_641_ayruvp.png"
              alt=""
              className="w-[60%] md:w-[80%] h-auto mt-8"
            />
          </div>
          {/* login form */}
          <div className="w-full md:w-[50%] h-[100%] bg-transparent p-8 flex flex-col justify-between items-center mt-20">
            <div className="w-full max-w-sm mt-6">
              <p className="text-center text-sm md:text-lg text-white">
                "Welcome to the future of restaurant reporting! We're serving up
                an approach to streamline your restaurant management, marketing
                data delicious easy to digest."
              </p>
              <form className="mt-8 bg-slate-300 bg-opacity-15  shadow-2xl rounded-md px-8 pt-6 pb-8">
                <div className="mb-4">
                  <input
                    type="text"
                    className="bg-slate-300 bg-opacity-20  rounded-xl w-full h-12 ps-4 text-sm focus:outline-none text-slate-400"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4 relative">
                  <div className="relative">
                    <input
                      type="password"
                      className="bg-slate-300 bg-opacity-20 rounded-xl w-full h-12 pl-4 pr-12 text-sm focus:outline-none text-slate-400"
                      placeholder="Password"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <IoMdEye className="cursor-pointer" />
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-black   rounded-xl w-full h-12 ps-4 text-sm focus:outline-none text-white font-bold"
                >
                  Login
                </button>
                <p className="bg-transparent text-slate-400 text-center text-xs mt-4">
                  By continuing, you agree to (name)'s{" "}
                  <b className="bg-transparent">terms of service</b> and{" "}
                  <b className="bg-transparent"> Privacy policy</b>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
