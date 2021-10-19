import React, {useState, useEffect} from 'react'
import './App.css';
import TodoList from './components/TodoList/TodoList';
import getTodos from './components/utils/utils';


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
  return (
    <div className="App">
    <TodoList todos={todos} onTaskDelete={onTaskDelete}/>
    </div>
  );
}

export default App;
