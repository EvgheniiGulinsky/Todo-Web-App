import React from 'react'
import styles from './TodoListItem.module.scss'

const TodoListItem = ({title, id, onTaskDelete}) => {
    return(
        <li className={styles.item}>
            <input type="checkbox"/>
            <span className={styles.title}>{title}</span>
            <button onClick={() => onTaskDelete(id)}>Delete</button>
        </li>
    )
}

export default TodoListItem