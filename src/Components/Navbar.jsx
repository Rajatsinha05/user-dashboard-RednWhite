import React, { useState } from "react";
import "../Pages/pages.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Logout } from "../Redux/Reducer";
function Navbar() {
  const [auth, setAuht] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((store) => store.data);

  const handle = () => {
    dispatch(Logout(data.length - 1));
    nav("/login");
  };

  useEffect(() => {
    return () => {
      if (data.length > 0 && data[data.length - 1].details.auth === true) {
        
        setAuht(true);
      }
    };
  }, []);

  return (
    <div id="nav">
      <Link to="/dashbord">
        <p>Dashborad</p>
      </Link>

      {auth ? (
        <p onClick={handle} style={{ cursor: "pointer" }}>
          {" "}
          Logout
        </p>
      ) : (
        <Link to="/login">
          <p>Login</p>
        </Link>
      )}

      {auth ? (
        <p style={{ cursor: "pointer" }}>
          {" "}
          {data[data.length - 1].details.name}
        </p>
      ) : (
        <Link to="/">
          <p>Register</p>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
