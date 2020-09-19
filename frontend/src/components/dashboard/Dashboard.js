import React from "react";
import Weather from "./Weather";
import "./Dashboard.css";
import Card from "./Card";
import SubNav from "../SubNav";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-subnav">
        <SubNav name="dashboard" />
      </div>

      <div className="dashboard-main-display">
        <Card content={Weather} />
      </div>
    </div>
  );
};

export default Dashboard;
