import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

function Dashborad() {
  const data = useSelector((store) => store.data);
  
  return (
    <div>
      <Navbar />

      <div id="user">
        <div>
          <img
            src="https://www.valamis.com/wp-content/uploads/2022/09/continious-learning.png"
            alt="img"
          />
        </div>
        <div
          style={{
            marginLeft: "20%",
            marginTop: "20px",
            paddingTop: "20px",
            marginBottom: "40px",
            paddingBottom: "40px",
          }}
        >
          <h1 style={{ fontSize: "40px", marginBottom: "40px" }}>
            User Details
          </h1>

          <h1 style={{ fontSize: "20px" }}>
            User Name:{" "}
            <span>{data.length > 0 && data[data.length - 1].details.name}</span>
          </h1>

          <h1 style={{ fontSize: "20px" }}>
            User Email:{" "}
            <span>
              {data.length > 0 && data[data.length - 1].details.email}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Dashborad;
