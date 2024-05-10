import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Elements/HomePage";
import About from "../Elements/About";
import Services from "../Elements/Services";
import ApiTest from "../Elements/ApiTest";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"home"} />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/apitest" element={<ApiTest />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
