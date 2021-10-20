import React, { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import styles from "./TodoListItem.module.scss";

const TodoListItem = ({ todo, onTaskDelete, onTaskComplete, onTaskChange }) => {

  const [editing, setEditing] = useState(false)
  const { title, id, done } = todo;
  return (
    <li className={styles.item}>
      <div className={done ? styles.checked : undefined}>
        <CheckCircleTwoTone
          className={styles.check}
          onClick={() => {
            onTaskComplete(id);
          }}
        />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.controls}>
        <EditOutlined className={styles.edit} onClick={() => {setEditing(true)}} />
        <DeleteOutlined
          className={styles.delete}
          onClick={() => onTaskDelete(id)}
        />
      </div>
      {editing ? (
        <input
          type="text"
          className={styles.input}
          defaultValue={title}
          onKeyDown={(el) => {
            if (el.key === 'Enter') {
              const newTask = el.target.value;
              onTaskChange(id, newTask);
              setEditing(false)
            }
          }}
        />
      ) : null}
    </li>
  );
};

export default TodoListItem;
