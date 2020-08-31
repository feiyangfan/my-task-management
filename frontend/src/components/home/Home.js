import React from "react";
import Weather from "./Weather";
import "./Home.css";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Card content={Weather}></Card>
      {/* <Card content={Weather}></Card>
      <Card content={Weather}></Card> */}
    </div>
  );
};

export default Home;
