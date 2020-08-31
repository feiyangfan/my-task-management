import React from "react";
import "./Todo.css";

import { ReactComponent as Plus } from "../../images/plus.svg";
const Todo = ({ text }) => {
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <div className="todo-menu">
        <button className="complete-btn">
          <Plus className="plus" />
        </button>
        <button className="delete-btn">
          <Plus className="plus" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
