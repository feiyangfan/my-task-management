import React from "react";
import "./SubNav.css";
import { ReactComponent as Plus } from "../images/plus.svg";

const SubNav = ({ name }) => {
  return (
    <div className="subnav">
      <div className="subnav-right">
        <button className="subnav-add-button">
          <Plus className="plus"></Plus>
          <span className="button-text">Add {name}</span>
        </button>
      </div>
    </div>
  );
};

export default SubNav;
