import React from "react";
import "./Todo.css";

import { ReactComponent as Plus } from "../../images/plus.svg";
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
          <Plus className="plus" />
        </button>
        <button className="delete-btn" onClick={deleteHandler}>
          <Plus className="plus" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
