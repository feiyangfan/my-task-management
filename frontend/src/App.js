import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import TodoPage from "./components/todo/TodoPage";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  //Write Javascript code here

  return (
    <div className="App">
      <Router>
        <div className="navbar-div">
          <Nav />
        </div>
        <div className="main-display">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <TodoPage />
            </Route>
            <Route path="/timetable">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
