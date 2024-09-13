import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)






// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
// import "./index.css";
// import App from "./App";
// import Home from "./Pages/Home";
// import Sidebar from "./Layouts/Sidebar";
// import Signin from "./Pages/Signin";
// import Signup from "./Pages/Signup";
// import Root from "./Root";


// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <Root/>,
//     children:[
//       {
//         path: "home",
//         element: <Home/>
//       }
//     ]
//   },
  
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
