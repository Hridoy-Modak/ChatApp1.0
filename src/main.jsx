import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import Sidebar from "./Sidebar";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/sidebar",
    element: <Sidebar/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
