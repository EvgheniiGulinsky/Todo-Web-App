import React, {useState, useEffect} from 'react'
import TodoList from './components/TodoList/TodoList';
import NewTodoForm from './components/NewTodoForm/NewTodoForm'
import {getTodos, createTodoItem} from './components/utils/utils';
import styles from './App.module.scss';

function App() {
  const [todos, setsTodos] = useState([])

  useEffect(() => {
    const initialTodos = getTodos()
    setsTodos(initialTodos)
  }, [])

  const onTaskDelete = (id) => {
    const index = todos.findIndex((el) => el.id === id);
    const newTasks = [...todos.slice(0, index), ...todos.slice(index + 1)];
    setsTodos(newTasks)
  };

  const onTaskAdd = (title) => {
    const newTasks = [...todos, createTodoItem(title)]
    setsTodos(newTasks)
  }


  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Todo list for today</h1>
      <NewTodoForm onTaskAdd={onTaskAdd} />
      <TodoList todos={todos} onTaskDelete={onTaskDelete}/>
    </div>
  );
}

export default App;
