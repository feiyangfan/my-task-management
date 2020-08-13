import React from "react";

const Nav = (props) => (
  <nav>
    {props.toggle ? (
      <>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">ME</a>
        </li>
        <li>
          <a href="">YOU</a>
        </li>
        <li>
          <a href="">TWEET</a>
        </li>
      </>
    ) : (
      ""
    )}
  </nav>
);

export default Nav;
