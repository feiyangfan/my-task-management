import React from "react";
import "./Card.css";

const Card = (props) => {
  console.log("props is ===>");
  console.log(props);
  return (
    <div className="card">
      <props.content></props.content>
    </div>
  );
};

export default Card;
