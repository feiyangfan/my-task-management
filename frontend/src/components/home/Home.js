import React from "react";
import Weather from "./Weather";
import "./Home.css";
import Card from "./Card";
import SubNav from "../SubNav";

const Home = () => {
  return (
    <div className="homepage">
      <div className="home-subnav">
        <SubNav name="home" />
      </div>

      <div className="home-main-display">
        <Card content={Weather} />
      </div>
    </div>
  );
};

export default Home;
