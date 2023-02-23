import React, { useState } from "react";
import "./pages.css";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Loginset } from "../Redux/Reducer";
import { useNavigate } from "react-router-dom";

function Login() {
  const data = useSelector((store) => store.data);

  const nav = useNavigate();
  // if(data.length>0) {

  //   (data[data.length - 1].details);
  // }

  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      data.length > 0 &&
      data[data.length - 1].details.email === email &&
      data[data.length - 1].details.password === password
    ) {
      dispatch(Loginset(data.length - 1));

      nav("/");
    } else {
      alert("Please select correct details");
    }

    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div id="outer_div">
        <div id="img" style={{ paddingLeft: "60px" }}>
          <img
            src="https://img.freepik.com/premium-vector/isometric-3d-online-exam-course-concept_82472-58.jpg"
            alt="img"
          />
        </div>

        <div id="registerForm">
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <br />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit" id="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
