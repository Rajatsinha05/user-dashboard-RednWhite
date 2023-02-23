import React, { useState } from "react";
import "../Pages/pages.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Logout } from "../Redux/Reducer";
function Navbar() {
  const [auth, setAuht] = useState(false);
const dispatch = useDispatch()
const nav=useNavigate()
  const data = useSelector((store) => store.data);
  // if(data.length>0) {

  //   console.log(data[data.length - 1].details.auth);
  //   setAuht(data[data.length - 1].details.auth);
  // }


  const handle=()=>{
   dispatch(Logout(data.length - 1))
   setTimeout(() => {
    nav('/login')
   }, 2000)
   
  

  }

  useEffect(() => {
    return () => {
      if (data.length > 0 && data[data.length - 1].details.auth === true) {

        console.log(data[data.length - 1].details.auth)
        setAuht(true);
      }
    };
  }, [])

  return (
    <div id="nav">
      <Link to="/">
        <p>Dashborad</p>
      </Link>
      
     {auth ?  <p onClick={handle}> Logout</p> :<Link to="/login">
        <p>Login</p>
      </Link>



  }


      <Link to="/register">
        <p>Register</p>
      </Link>
    </div>
  );
}

export default Navbar;
