import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { Error } from "./components/Error";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}
