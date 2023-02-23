import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Register";
import Dashborad from "../Pages/Dashborad";
import Login from "../Pages/Login";

function AllRouters() {
  return (
    <Routes>
        <Route path="/register" element={<Register />}/>
      <Route path="/" element={<Dashborad />}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default AllRouters;
