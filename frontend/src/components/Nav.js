import React from "react";
import "../Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="logo-text">
        <h4>Website</h4>
      </div>
      <div className="nav-mid">
        <ul>
          <li>
            <a href="#Home" onClick={console.log(1)}>
              Home
            </a>
          </li>
          <li>
            <a href="#Todo">Todo</a>
          </li>
          <li>
            <a href="#Time">Time</a>
          </li>
          <li>
            <a href="#Go">Go</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <a href="#About me">About me</a>
      </div>
    </nav>
  );
};

export default Nav;
