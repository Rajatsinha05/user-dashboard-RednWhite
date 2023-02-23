import React, { useState } from "react";
import "../Pages/pages.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const [auth, setAuht] = useState(false);

  const data = useSelector((store) => store.data);
// if(data.length>0) {

//   console.log(data[data.length - 1].details.auth);
//   setAuht(data[data.length - 1].details.auth);
// }

  return (
    <div id="nav">
      <Link to="/">
        <p>Dashborad</p>
      </Link>
{/* 
     {auth ?  <p onClick={()=>{}}> Logout</p> :<Link to="/login">
        <p>Login</p>
      </Link>



  } */}
 <p>Login</p>

      <Link to="/register">
        <p>Register</p>
      </Link>
    </div>
  );
}

export default Navbar;
