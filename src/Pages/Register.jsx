import React, { useState } from "react";
import "./pages.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Adduser } from "../Redux/Reducer";
import Navbar from "../Components/Navbar";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const nav = useNavigate();

  const Data = useSelector((store) => store.data);
  console.log("Data: ", Data);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("password not same !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("successfully register!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      dispatch(
        Adduser({
          name: username,
          email: email,
          password: password,
          auth: false,
        })
      );

      setTimeout(() => {
        nav("/login");
      }, 3000);
    }
  };
  return (
    <div>
        <Navbar/>
      <div id="outer_div">
        <div id="img">
          <img
            src="https://document360.com/wp-content/uploads/2022/01/Ultimate-guide-to-writing-instructions-for-a-user-manual-Document360.png"
            alt="img"
          />
        </div>
        <div id="registerForm">
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <br />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                pattern="[A-Za-z]+"
              />
              <br />
            </label>
            <label>
              Email:
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
            </label>
            <label>
              Password:
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                pattern="[A-Za-z0-9@$!%*?&]+"
              />
              <br />
            </label>
            <label>
              Confirm Password:
              <br />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                pattern="[A-Za-z0-9@$!%*?&]+"
              />
              <br />
            </label>
            <ToastContainer />
            <button type="submit" id="submit">
              Register
            </button>{" "}
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
