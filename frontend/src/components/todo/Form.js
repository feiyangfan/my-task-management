import React from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

import { ReactComponent as Plus } from "../../images/plus.svg";

const Form = ({ inputText, setInputText, setTodos, todos }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
    setInputText("");
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="Enter your todos here"
        value={inputText}
      ></input>
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <Plus className="plus" />
      </button>
    </form>
  );
};

export default Form;
