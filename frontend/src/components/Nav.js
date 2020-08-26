import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-item">
        <div className="logo-text">
          <h4>Website</h4>
        </div>
      </div>
      <div className="nav-item">
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
          </ul>
        </div>
      </div>
      <div className="nav-item">
        <div className="nav-right">
          <div className="right-link">
            <a href="">Github</a>
          </div>

          <div className="right-link">
            <a href="#About me">About me</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;