import React from "react";
import "./Todo.css";

import { ReactComponent as Delete } from "../../images/trash.svg";

import { ReactComponent as Edit } from "../../images/edit.svg";

import { ReactComponent as Check } from "../../images/check.svg";
const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div className="todo-menu">
        <button className="complete-btn" onClick={completeHandler}>
          <Check className="check" />
        </button>
        <button className="delete-btn" onClick={deleteHandler}>
          <Delete className="trash" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
