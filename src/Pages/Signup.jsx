import React, { useState } from "react";
import Signupimg from "../assets/images/signup.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaRegEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { LineWave } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [passwordShow, setPasswordShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [loader, setLoader] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setNameErr("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  const handleSubmit = () => {
    let valid = true;

    if (!name) {
      setNameErr("Full Name is Required");
      valid = false;
    }
    if (!email) {
      setEmailErr("Email is Required");
      valid = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr("Invalid email");
      valid = false;
    }
    if (!password) {
      setPasswordErr("Password is Required");
      valid = false;
    }

    if (valid) {
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setTimeout(() => {
            setLoader(false);
            navigate("/");
            console.log(userCredential);
          }, 200);
        })
        .catch((error) => {
          setLoader(false);
          error.code.includes("auth/email-already-in-use") &&
            setEmailErr("Email already in use");

          console.log(error.code);
        });
    }
  };

  return (
    <div className="flex relative bg-[rgb(236,222,228)] bg-[radial-gradient(circle,_rgba(236,222,228,1)_0%,_rgba(167,225,233,1)_24%,_rgba(245,254,249,1)_67%,_rgba(115,179,255,1)_100%)]">
      <img
        className="z-10 absolute w-[70px] top-[7%] left-[15%] drop-shadow-lg rounded-3xl"
        src="./logo.png"
        alt="Logo"
      />
      <h2 className="absolute top-[16%] left-[14.5%] text-2xl font-bold z-10">
        Chatapp
      </h2>
      <div className="w-1/2 h-screen flex items-center">
        <img
          className="bg-cover drop-shadow-2xl"
          src={Signupimg}
          alt="Signup"
        />
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="mr-10 w-[70%] h-[75%] border-opacity-70 border rounded-xl z-10 bg-blue-200 bg-opacity-50 flex justify-center flex-col items-center shadow-2xl">
          <h2 className="text-[25px] mb-5">Registration</h2>
          <div className="flex flex-col gap-5 w-[55%]">
            <div>
              <input
                onChange={handleName}
                type="text"
                placeholder="Enter your Full Name"
                className={`border placeholder:text-[13px] px-[20px] py-3 rounded-lg w-full shadow-md ${
                  nameErr ? "border-red-500" : ""
                }`}
                aria-label="Full Name"
              />
              {nameErr && (
                <p className="text-red-600 text-[10px] ml-1">{nameErr}</p>
              )}
            </div>
            <div>
              <input
                onChange={handleEmail}
                className={`border placeholder:text-[13px] px-[20px] py-3 rounded-lg w-full shadow-md ${
                  emailErr ? "border-red-500" : ""
                }`}
                type="email"
                placeholder="Enter your Email"
                aria-label="Email"
              />
              {emailErr && (
                <p className="text-red-600 text-[10px] ml-1">{emailErr}</p>
              )}
            </div>
            <div className="relative">
              <input
                onChange={handlePassword}
                className={`border placeholder:text-[13px] px-[20px] py-3 rounded-lg w-full shadow-md ${
                  passwordErr ? "border-red-500" : ""
                }`}
                type={passwordShow ? "text" : "password"}
                placeholder="Enter your password"
                aria-label="Password"
              />
              {passwordShow ? (
                <FaRegEye
                  onClick={() => setPasswordShow(false)}
                  className="absolute top-[50%] translate-y-[-50%] right-3 text-[20px]"
                />
              ) : (
                <IoIosEyeOff
                  onClick={() => setPasswordShow(true)}
                  className="absolute top-[50%] translate-y-[-50%] right-3 text-[20px]"
                />
              )}
              {passwordErr && (
                <p className="text-red-600 text-[10px] ml-1">{passwordErr}</p>
              )}
            </div>
            {loader ? (
              <div className="max-w-[200px] mx-auto">
                <LineWave
                  visible={true}
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="line-wave-loading"
                />
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-blue-300 px-5 py-1 rounded-md shadow-md"
              >
                Signup
              </button>
            )}
          </div>
          <p className="text-[12px] mt-3">
            I already have an account!
            <span className="text-blue-800 font-semibold"><Link to="/signin"> Login</Link></span>
          </p>
          <p className="text-[15px] mt-3 mb-3">OR</p>
          <div className="social_login flex gap-3 mt-2 justify-center">
            <div className="bg-white h-[60px] items-center gap-2 px-1 w-[150px] rounded-lg flex cursor-pointer justify-center">
              <FcGoogle className="text-[50px] w-[40%] px-1 border-r-2" />
              <p className="text-[15px] text-center mr-1">Signup with Google</p>
            </div>
            <div className="bg-white h-[60px] items-center gap-2 px-1 w-[150px] rounded-lg flex cursor-pointer justify-center">
              <FaFacebook className="text-[50px] w-[40%] px-1 border-r-2 text-blue-800" />
              <p className="text-[15px] text-center mr-1">
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
