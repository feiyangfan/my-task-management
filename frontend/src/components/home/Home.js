import React, { Component } from "react";
import Card from "../Card";
import Weather from "./Weather";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-card">
        <Weather />
      </div>
    </div>
  );
};

export default Home;
