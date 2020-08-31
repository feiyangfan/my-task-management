import React, { useState } from "react";
import TodoCard from "./TodoCard";
import "./TodoPage.css";
import SubNav from "../SubNav";

const Todo = () => {
  const [todoCards, setTodoCards] = useState([]);
  return (
    <div className="todo-page">
      <div className="todo-nav">
        <SubNav name="card" />
      </div>
      <TodoCard />
    </div>
  );
};

export default Todo;
