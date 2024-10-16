import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Groups from "./Templates/Groups";
import Message from "./Pages/Message";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/message" element={<Message />} />
      </Route>
    </>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
