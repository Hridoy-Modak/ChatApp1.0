import React from "react";
import Signupimg from "../assets/images/signup.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
const Signup = () => {
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
        <img className=" bg-cover drop-shadow-2xl" src={Signupimg} alt="" />
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="mr-10 w-[70%] h-[80%] border-opacity-70 border rounded-xl z-10 bg-blue-200 bg-opacity-50 flex flex-col items-center py-7 shadow-2xl">
          <h2 className="text-[25px] mb-5">Registration</h2>
          <div className="flex flex-col gap-5 w-[55%]">
            <input
              className="border placeholder:text-[13px] px-[20px] py-3 rounded-lg  w-full shadow-md"
              type="text"
              placeholder="Enter your First Name"
            />
            <input
              className="border placeholder:text-[13px] px-[20px] py-3 rounded-lg  w-full shadow-md"
              type="text"
              placeholder="Enter your Last Name"
            />
            <input
              className="border placeholder:text-[13px] px-[20px] py-3 rounded-lg  w-full shadow-md"
              type="email"
              placeholder="Enter your Email"
            />

            <input
              className="border placeholder:text-[13px] px-[20px] py-3 rounded-lg  w-full shadow-md"
              type="password"
              placeholder="Enter your password"
            />

            <button className=" bg-blue-300 px-5 py-1 rounded-md shadow-md">
              Signup
            </button>
          </div>
          <p className="text-[12px] mt-3">
            I have already an accoount !
            <span className="text-blue-800 font-semibold"> Login</span>
          </p>
          <p className="text-[15px] mt-3">OR</p>
          <div className="social_login flex gap-3 mt-2 justify-center">
            <div className="bg-white h-[60px] items-center gap-2 px-1 w-[150px] rounded-lg flex cursor-pointer justify-center">
              <FcGoogle className="text-[50px] w-[40%] px-1 border-r-2" />
              <p className=" text-[15px] text-center mr-1">Signup with Google</p>
            </div>
            <div className="bg-white h-[60px] items-center gap-2 px-1 w-[150px] rounded-lg flex cursor-pointer justify-center">
              <FaFacebook className="text-[50px] w-[40%] px-1 border-r-2 text-blue-800" />
              <p className=" text-[15px] text-center mr-1">Signup with Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
