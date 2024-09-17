import React, { useState } from "react";
import Signupimg from "../assets/images/signup.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const auth = getAuth();

  let [passwordshow, setPasswordshow] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [nameerr, setNameerr] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");

  let handlename = (e) => {
    setName(e.target.value);
    setNameerr("");
  };
  let handleemail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handlepassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  let handlesubmit = () => {
    if (!name) {
      setNameerr("Full Name is Required");
    }
    if (!email) {
      setEmailerr("Email is Required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("Invalid email");
    }
    if (!password) {
      setPassworderr("Password is Required");
    }
    if (name && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
          
        });
    }
  };

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
        <div className="mr-10 w-[70%] h-[75%] border-opacity-70 border rounded-xl z-10 bg-blue-200 bg-opacity-50 flex justify-center flex-col items-center shadow-2xl">
          <h2 className="text-[25px] mb-5">Registration</h2>
          <div className="flex flex-col gap-5 w-[55%]">
            <div>
              <input
                onChange={handlename}
                type="text"
                placeholder="Enter your Full Name"
                className={`border placeholder:text-[13px] px-[20px] py-3 rounded-lg  w-full shadow-md ${
                  nameerr ? "border-red-500" : ""
                } `}
              />
              {nameerr && (
                <p className="text-red-600 text-[10px] ml-1">{nameerr}</p>
              )}
            </div>
            <div>
              <input
                onChange={handleemail}
                className={`border placeholder:text-[13px] px-[20px] py-3 rounded-lg  w-full shadow-md ${
                  emailerr ? "border-red-500" : ""
                } `}
                type="email"
                placeholder="Enter your Email"
              />
              {emailerr && (
                <p className="text-red-600 text-[10px] ml-1">{emailerr}</p>
              )}
            </div>
            <div className="relative">
              <input
                onChange={handlepassword}
                className={`border placeholder:text-[13px] px-[20px] py-3 rounded-lg  w-full shadow-md ${
                  passworderr ? "border-red-500" : ""
                } `}
                type={passwordshow ? "text" : "password"}
                placeholder="Enter your password"
              />
              {passwordshow ? (
                <FaRegEye
                  placeholder="Enter your password"
                  onClick={() => setPasswordshow(false)}
                  className="absolute top-[50%] translate-y-[-50%] right-3 text-[20px]"
                />
              ) : (
                <IoIosEyeOff
                  onClick={() => setPasswordshow(true)}
                  className="absolute top-[50%] translate-y-[-50%] right-3 text-[20px]"
                />
              )}

              {passworderr && (
                <p className="text-red-600 text-[10px] ml-1">{passworderr}</p>
              )}
            </div>
            <button
              onClick={handlesubmit}
              className=" bg-blue-300 px-5 py-1 rounded-md shadow-md"
            >
              Signup
            </button>
          </div>
          <p className="text-[12px] mt-3">
            I have already an accoount !
            <span className="text-blue-800 font-semibold"> Login</span>
          </p>
          <p className="text-[15px] mt-3 mb-3">OR</p>
          <div className="social_login flex gap-3 mt-2 justify-center">
            <div className="bg-white h-[60px] items-center gap-2 px-1 w-[150px] rounded-lg flex cursor-pointer justify-center">
              <FcGoogle className="text-[50px] w-[40%] px-1 border-r-2" />
              <p className=" text-[15px] text-center mr-1">
                Signup with Google
              </p>
            </div>
            <div className="bg-white h-[60px] items-center gap-2 px-1 w-[150px] rounded-lg flex cursor-pointer justify-center">
              <FaFacebook className="text-[50px] w-[40%] px-1 border-r-2 text-blue-800" />
              <p className=" text-[15px] text-center mr-1">
                Signup with Facebook
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
