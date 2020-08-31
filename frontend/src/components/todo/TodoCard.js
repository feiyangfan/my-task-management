import React, { useState } from "react";
import Form from "./Form";
import "./TodoCard.css";
import { ReactComponent as Plus } from "../../images/plus.svg";
import TodoList from "./TodoList";

const TodoCard = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [listname, setListname] = useState("");

  return (
    <div className="list-card">
      <div className="card-top">
        <div className="card-name">List Name</div>
        <div className="card-menu">
          {/* <button className="card-add">
            <Plus className="plus" />
          </button> */}
          <button className="card-edit" onClick={setListname}>
            <Plus className="plus" />
          </button>
          <button className="card-delete">
            <Plus className="plus" />
          </button>
        </div>
      </div>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <div className="list-content">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default TodoCard;
