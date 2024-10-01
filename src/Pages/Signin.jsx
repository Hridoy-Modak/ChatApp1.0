import React, { useState } from "react";
import Signinimg from "../assets/images/signin.png";
import { FaRegEye, FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { IoIosEyeOff } from "react-icons/io";

const Signin = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [passShow, setPassShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");

  let handleemail = (e) => {
    setEmail(e.target.value);
  };
  let handlepassword = (e) => {
    setPassword(e.target.value);
  };

  let handlesubumit = () => {
    if (!email) {
      setEmailerr("Email is required");
    } else if (!/[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/.test(email)) {
      setEmailerr("Email is invalid");
      valid = false;
    }
    if (!password) {
      setPassworderr("Password is required");
      valid = false;
    }
    if (email && password){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(error.code.includes("auth/invalid-credential")){
          setEmailerr("invalid-credential")
          
        }
      });
    }

  };

  let hanglegoogle=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    // // IdP data available using getAdditionalUserInfo(result)
    // // ...
    console.log(result)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorCode)
  });
  }


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
                onChange={handleemail}
                className={`border ${
                  emailerr ? "border-red-500" : ""
                } placeholder:text-[13px] px-[20px] py-3 rounded-lg placeholder:opacity-40 w-full shadow-md `}
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
                type={passShow ? "text" : "password"}
                className={`border ${
                  passworderr ? "border-red-500" : ""
                } placeholder:text-[13px] px-[20px] py-3 rounded-lg placeholder:opacity-40 w-full shadow-md `}
                placeholder="Enter your password"
              />
              {passShow ? (
                <FaRegEye
                  onClick={() => setPassShow(false)}
                  className="absolute top-[50%] translate-y-[-50%] right-3 text-[20px]"
                />
              ) : (
                <IoIosEyeOff
                  onClick={() => setPassShow(true)}
                  className="absolute top-[50%] translate-y-[-50%] right-3 text-[20px]"
                />
              )}
              {passworderr && (
                <p className="text-red-600 text-[10px] ml-1">{passworderr}</p>
              )}
            </div>
            <button
              onClick={handlesubumit}
              className=" bg-blue-300 px-5 py-1 rounded-md shadow-md"
            >
              Login
            </button>
          </div>
          <p className="text-[12px] mt-3">
            I don't have already an accoount?
            <span className="text-blue-800 font-semibold hover:text-[13px]">
              <Link to="/signup"> Signup</Link>
            </span>
          </p>
          <p className="text-[12px] mt-3">Forgot Password ?</p>
          <p className="text-[15px] mt-3">OR</p>
          <div className="social_login flex gap-3 mt-2 justify-center">
            <div
            onClick={hanglegoogle}
             className="bg-white h-[60px] items-center gap-2 px-1 w-[150px] rounded-lg flex cursor-pointer justify-center">
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
