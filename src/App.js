import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";
import { getTodos, createTodoItem, storeTodos } from "./components/utils/utils";
import styles from "./App.module.scss";

function App() {
  const [todos, setsTodos] = useState([]);

  useEffect(() => {
    const initialTodos = getTodos();
    setsTodos(initialTodos);
  }, []);

  const onTaskDelete = (id) => {
    const index = todos.findIndex((el) => el.id === id);
    const newTasks = [...todos.slice(0, index), ...todos.slice(index + 1)];
    setsTodos(newTasks);
    storeTodos(newTasks)
  };

  const onTaskAdd = (title) => {
    const newTasks = [...todos, createTodoItem(title)];
    setsTodos(newTasks);
    storeTodos(newTasks)
  };

  const onTaskChange = (id, newTitle) => {
    const index = todos.findIndex((el) => el.id === id);
    const newTasks = [...todos];
    newTasks[index].title = newTitle
    setsTodos(newTasks)
    storeTodos(newTasks)
  }

  const onTaskComplete = (id) => {
    const index = todos.findIndex((el) => el.id === id);
    const newTasks = [...todos];
    newTasks[index].done = !newTasks[index].done;
    setsTodos(newTasks)
    storeTodos(newTasks)
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Todo list for today</h1>
      <NewTodoForm onTaskAdd={onTaskAdd} />
      <TodoList
        todos={todos}
        onTaskDelete={onTaskDelete}
        onTaskComplete={onTaskComplete}
        onTaskChange={onTaskChange}
      />
    </div>
  );
}

export default App;
