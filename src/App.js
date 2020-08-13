import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";

function App() {
  //Write Javascript code here
  const [counter, setCounter] = useState(0); //useState return a data and a update function
  const [toggle, setToggle] = useState(false);

  const incrementCounter = () => {
    setCounter(counter + 1); //we use update function here
    console.log(counter);
  };

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <h1 className={toggle ? "active" : ""}>Hello React</h1>
      <h2>counter = {counter}</h2>
      <button onClick={incrementCounter}>Click</button>
      <button onClick={toggler}>Toggle</button>
      <div className="home">
        <Nav toggle={toggle} />
        <Tweets num={counter} setToggle={toggler} />
      </div>
    </div>
  );
}

export default App;
