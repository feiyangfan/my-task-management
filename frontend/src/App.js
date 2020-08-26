import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import SubNav from "./components/SubNav";

function App() {
  //Write Javascript code here

  return (
    <div className="App">
      <div className="navbar-div">
        <Nav></Nav>
      </div>
      <div className="sub-nav">
        <SubNav></SubNav>
      </div>
      <div className="main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        amet accusamus, nisi iure voluptatibus quasi illum libero doloremque
        voluptates sint soluta perferendis maiores sit! Expedita unde placeat
        nemo deleniti itaque.
      </div>
    </div>
  );
}

export default App;
