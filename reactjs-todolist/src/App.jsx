import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(["Go to Gym"]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo) {
    const newList = [...todos, newTodo];
    setTodos(newList);
    persistData(newList);
  }

  function handleDeleteTodos(index) {
    const newList = todos.filter((todo, i) => {
      return i != index;
    });
    setTodos(newList);
    persistData(newList);
  }

  function handleEditTodos(index) {
    const editTodo = todos[index];
    setTodoValue(editTodo);
    handleDeleteTodos(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return;
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        todos={todos}
        handleEditTodos={handleEditTodos}
        handleDeleteTodos={handleDeleteTodos}
      />
    </>
  );
}

export default App;
