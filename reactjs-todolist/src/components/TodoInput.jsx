/* eslint-disable react/prop-types */
import React from "react";

function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input value={todoValue} type="text" placeholder="Enter todo......" onChange={(e) => {setTodoValue(e.target.value)}} />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("")
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
