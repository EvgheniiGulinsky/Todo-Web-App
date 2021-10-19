import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import styles from './TodoList.module.scss'

const TodoList = ({todos, onTaskDelete}) => {

    const renderTodos = () => {
        return todos.map(todo => <TodoListItem title={todo.title} id={todo.id} onTaskDelete={onTaskDelete} key={todo.id}/>)
    }

    return (
        <div className={styles.list}>
            <h1>Todo list for today</h1>
            <ul>
                {renderTodos()}
            </ul>
        </div>
    )
}

export default TodoList