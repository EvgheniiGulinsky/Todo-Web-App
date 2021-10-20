import { v4 } from 'uuid';

const createTodoItem = (title, done = false) => {
    return {
      title,
      id: v4(),
      done
    };
  }

const getTodos = () => {
    const json = localStorage.getItem('todos')
    if(json){
        return JSON.parse(json)
    }
    return [createTodoItem('Example 1'), createTodoItem('Example 2'), createTodoItem('Example 3', true)]
}

const storeTodos = (todos) =>{
    const json = JSON.stringify(todos)
    localStorage.setItem('todos', json)
}

export {getTodos, createTodoItem, storeTodos}