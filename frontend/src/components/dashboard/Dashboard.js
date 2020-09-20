import React from "react";
import { useEffect, useState } from "react";
import Weather from "./Weather";
import "./Dashboard.css";
import Card from "./Card";

const Dashboard = () => {
  const [user, setUser] = useState("");

  const getUser = async () => {
    const request = await fetch("http://localhost:9000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    const result = await request.json();
    // console.log(result.user);
    setUser(result.user.displayName);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="dashboard">
      {/* <div className="dashboard-subnav">
        <SubNav name="dashboard" />
      </div> */}

      <div className="dashboard-main-display">
        <h2>Welcome, {user}</h2>
        <Card content={Weather} />
      </div>
    </div>
  );
};

export default Dashboard;
