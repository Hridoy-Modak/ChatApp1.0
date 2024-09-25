import React from "react";
import Signinimg from "../assets/images/signin.png";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="flex relative bg-[rgb(236,222,228)] bg-[radial-gradient(circle,_rgba(236,222,228,1)_0%,_rgba(167,225,233,1)_24%,_rgba(245,254,249,1)_67%,_rgba(115,179,255,1)_100%)]">
      <img
        className=" z-10 absolute w-[70px] top-[7%] left-[15%] drop-shadow-lg  rounded-3xl"
        src="./logo.png"
        alt=""
      />
      <h2 className="absolute top-[16%] left-[14.5%] text-2xl font-bold z-10">
        Chatapp
      </h2>
      <div className="w-1/2 h-screen flex items-center">
        <img className=" bg-cover drop-shadow-2xl" src={Signinimg} alt="" />
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="w-[70%] h-[90%] border-opacity-70 border rounded-xl z-10 bg-blue-200 bg-opacity-50 flex flex-col items-center py-7 shadow-2xl">
          <div className="h-[100px] w-[100px] my-12">
            <FaUserCircle className=" bg-white h-full w-full text-blue-500 rounded-full shadow-md" />
          </div>
          {/* <h1 className="mb-5">Signin</h1> */}
          <div className="flex flex-col gap-8 w-[55%]">
            <div className="relative">
              <input
                className="border placeholder:text-[13px] px-[20px] py-3 rounded-lg placeholder:opacity-40 w-full shadow-md"
                type="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="relative">
              <input
                className="border placeholder:text-[13px] px-[20px] py-3 rounded-lg placeholder:opacity-40 w-full shadow-md"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button className=" bg-blue-300 px-5 py-1 rounded-md shadow-md">
              Login
            </button>
          </div>
          <p className="text-[12px] mt-3">
            I don't have already an accoount?
            <span className="text-blue-800 font-semibold hover:text-[13px]"><Link to="/signup"> Signup</Link></span>
          </p>
          <p className="text-[12px] mt-3">Forgot Password ?</p>
          <p className="text-[15px] mt-3">OR</p>
          <div className="social_login flex gap-3 mt-2 justify-center">
            <div className="bg-white h-[60px] items-center gap-2 px-1 w-[150px] rounded-lg flex cursor-pointer justify-center">
              <FcGoogle className="text-[50px] w-[40%] px-1 border-r-2" />
              <p className=" text-[15px] text-center mr-1">Login with Google</p>
            </div>
            <div className="bg-white h-[60px] items-center gap-2 px-1 w-[150px] rounded-lg flex cursor-pointer justify-center">
              <FaFacebook className="text-[50px] w-[40%] px-1 border-r-2 text-blue-800" />
              <p className=" text-[15px] text-center mr-1">
                Login with Facebook
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
