import React, { useState } from "react";
import TodoCard from "./TodoCard";
import "./TodoPage.css";
import SubNav from "./SubNav";
import { v4 as uuidv4 } from "uuid";

// !TODO
const Todo = () => {
  const [listName, setListName] = useState("");
  const [todoCards, setTodoCards] = useState([]);
  const listNameHandler = (e) => {
    console.log(e.target.value);
    setListName(e.target.value);
  };

  const addCardHandler = (e) => {
    e.preventDefault();
    setTodoCards([...todoCards, { listName: listName, id: uuidv4() }]);
    setListName("");
  };
  return (
    <div className="todo-page">
      <div className="todo-nav">
        <SubNav
          name="todo"
          addCardHandler={addCardHandler}
          listName={listName}
          todoCards={todoCards}
          listNameHandler={listNameHandler}
        />
      </div>

      <ul className="todo-card-list">
        {todoCards.map((todoCard) => (
          <TodoCard
            cardName={todoCard.listName}
            key={todoCard.id}
            todoCard={todoCard}
            setTodoCards={setTodoCards}
            todoCards={todoCards}
            setListName={setListName}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
