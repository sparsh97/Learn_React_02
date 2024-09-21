import React from "react";
import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo, indedx) => {
        return (
          <TodoCard { ...props } key={indedx} index={indedx}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

export default TodoList;
