import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import TodoPage from "./components/todo/TodoPage";

function App() {
  //Write Javascript code here

  return (
    <div className="App">
      <div className="navbar-div">
        <Nav></Nav>
      </div>
      {/* <div className="main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        amet accusamus, nisi iure voluptatibus quasi illum libero doloremque
        voluptates sint soluta perferendis maiores sit! Expedita unde placeat
        nemo deleniti itaque.
      </div>
      <Home></Home> */}
      <TodoPage></TodoPage>
    </div>
  );
}

export default App;
