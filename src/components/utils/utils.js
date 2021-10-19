import { v4 } from 'uuid';

const createTodoItem = (title, done = false) => {
    return {
      title,
      id: v4(),
      done
    };
  }

const getTodos = () => {
    const todos = localStorage.getItem('todos')
    if(todos){
        return todos.split(',')
    }
    return [createTodoItem('Example 1'), createTodoItem('Example 2'), createTodoItem('Example 3', true)]
}

export {getTodos, createTodoItem}