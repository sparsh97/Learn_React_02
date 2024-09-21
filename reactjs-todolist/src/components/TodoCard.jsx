/* eslint-disable react/prop-types */
import React from "react";

function TodoCard(props) {
  const { children, handleEditTodos, handleDeleteTodos, index } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodos(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodos(index)}>
          <i
            className="fa-solid fa-trash-can"
          ></i>
        </button>
      </div>
    </li>
  );
}

export default TodoCard;
