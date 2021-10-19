import React, { useState } from 'react';
import styles from './NewTodoForm.module.scss'

const NewTodoForm = ({ onTaskAdd }) =>{
  
  const [input, setInput] = useState('')


  return(
    <input
      className={styles.input}
      placeholder='What needs to be done?'
      value={input}
      autoComplete="off"
      onChange={
        (event) => {
        const {value} = event.target
        setInput(value)
        if(event.key === 'Enter'){
          onTaskAdd(value)
          setInput('')
        }
      }
      }
      onKeyDown={(event) => {    
        if(event.key === 'Enter' && input){
          onTaskAdd(input)
          setInput('')
        }
      }}
    />
  )
}

export default NewTodoForm