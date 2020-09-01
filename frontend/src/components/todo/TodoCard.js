import React, { useState } from "react";
import Form from "./Form";
import "./TodoCard.css";
import { ReactComponent as Plus } from "../../images/plus.svg";
import TodoList from "./TodoList";

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
            <Plus className="plus" />
          </button>
          <button className="card-delete" onClick={deleteCardHandler}>
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
