import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "../Pages/Register";
import Dashborad from "../Pages/Dashborad";
import Login from "../Pages/Login";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AllRouters() {
  const [auth, setAuht] = useState(false);
const dispatch = useDispatch()
const nav=useNavigate()
  const data = useSelector((store) => store.data);
  useEffect(() => {
    return () => {
      if (data.length > 0 && data[data.length - 1].details.auth === true) {

        console.log(data[data.length - 1].details.auth)
        setAuht(true);
      }
    };
  }, [])

  return (
    <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/" element={auth? <Dashborad/>:<Register/>}/> 



      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default AllRouters;
