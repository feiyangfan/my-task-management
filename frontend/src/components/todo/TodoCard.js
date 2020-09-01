import React, { useState } from "react";
import Form from "./Form";
import "./TodoCard.css";
import TodoList from "./TodoList";

import { ReactComponent as Delete } from "../../images/trash.svg";

import { ReactComponent as Edit } from "../../images/edit.svg";

const TodoCard = ({
  cardName,
  todoCards,
  todoCard,
  setListName,
  setTodoCards,
}) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const deleteCardHandler = () => {
    setTodoCards(todoCards.filter((element) => element.id !== todoCard.id));
  };

  return (
    <div className="list-card">
      <div className="card-top">
        <div className="card-name">{cardName}</div>
        <div className="card-menu">
          <button className="card-edit" onClick={setListName}>
            <Edit className="edit" />
          </button>
          <button className="card-delete" onClick={deleteCardHandler}>
            <Delete className="trash" />
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
