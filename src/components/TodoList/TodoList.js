import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import styles from './TodoList.module.scss'

const TodoList = ({todos, onTaskDelete}) => {

    const renderTodos = () => {
        const sortedTodos = todos.sort((a, b) => b.title.localeCompare(a.title))
        return sortedTodos.map(todo => <TodoListItem title={todo.title} id={todo.id} onTaskDelete={onTaskDelete} key={todo.id}/>)
    }

    return (
        <div className={styles.list}>
            <ul>
                {renderTodos()}
            </ul>
        </div>
    )
}

export default TodoList