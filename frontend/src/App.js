import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import TodoPage from "./components/todo/TodoPage";
import Login from "./components/login/Login";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <div className="main-display">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <div className="navbar-div">
                <Nav />
              </div>
              <Dashboard />
            </Route>
            <Route path="/todo">
              <div className="navbar-div">
                <Nav />
              </div>
              <TodoPage />
            </Route>

            <Route path="/timetable">
              <div className="navbar-div">
                <Nav />
              </div>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
