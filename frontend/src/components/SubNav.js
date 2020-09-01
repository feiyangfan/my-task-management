import React, { useState } from "react";
import "./SubNav.css";
import { ReactComponent as Plus } from "../images/plus.svg";

import { Modal } from "@material-ui/core";

const SubNav = ({
  name,
  addCardHandler,
  listName,
  listNameHandler,
  todoCards,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalWindow = (
    <div className="modal-window">
      <div className="modal-window-name">Add new {name}</div>
      <div className="modal-body">
        <input
          onChange={listNameHandler}
          type="text"
          className="modal-input"
          placeholder="Enter your todo list name here"
          value={listName}
        ></input>
        <button
          className="modal-button"
          type="submit"
          onClick={
            todoCards.length < 3 ? (listNameHandler, addCardHandler) : ""
          }
        >
          <Plus className="plus" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="subnav">
      <div className="subnav-right">
        <button className="subnav-add-button" onClick={handleOpen}>
          <Plus className="plus"></Plus>
          <span className="button-text">Add {name}</span>
        </button>
        <Modal className="modal" open={open} onClose={handleClose}>
          {modalWindow}
        </Modal>
      </div>
    </div>
  );
};

export default SubNav;
