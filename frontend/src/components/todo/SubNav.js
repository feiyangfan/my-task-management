import React, { useState, useEffect } from "react";
import "./SubNav.css";
import { ReactComponent as Plus } from "../../images/plus.svg";

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

  const modalSelector = () => {
    switch (name) {
      case "todo":
        const todoModalWindow = (
          <div className="modal-window">
            <div className="modal-window-name">
              Add new card, maximum three cards
            </div>
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
        return todoModalWindow;
      case "dashboard":
        const dashboardModalWindow = (
          <div className="modal-window">
            <div className="modal-window-name">
              Add new card, maximum three cards
            </div>
            <div className="modal-body">
              <select className="select">
                <option value="0">
                  Select what new information to display:
                </option>
                <option value="1">Weather</option>
                <option value="2">Todo Card</option>
                <option value="3">Timetable</option>
              </select>
              <button
                className="modal-button"
                type="submit"
                onClick={console.log("onClick")}
              >
                <Plus className="plus" />
              </button>
            </div>
          </div>
        );
        return dashboardModalWindow;
    }
  };

  return (
    <div className="subnav">
      <div className="subnav-right">
        <button className="subnav-add-button" onClick={handleOpen}>
          <Plus className="plus"></Plus>
          <span className="button-text">Add card</span>
        </button>
        <Modal className="modal" open={open} onClose={handleClose}>
          {modalSelector()}
        </Modal>
      </div>
    </div>
  );
};

export default SubNav;
