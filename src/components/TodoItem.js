import React, { useState, useEffect } from 'react'
import styles from './TodoItem.module.css'
import { FaTrash } from 'react-icons/fa'

const TodoItem = props => {

   const [editing, setEditing] = useState(false)

   const {title, id, completed} = props.todo

   const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
   }

   const handleDoubleClick = () => {
      setEditing(true)
   }

   const handleEditDone = event => {
      if(event.key === 'Enter') {
         setEditing(false)
      }
   }

   const viewMode = {}
   const editMode = {}

   if(editing) {
      viewMode.display = 'none'
   } else {
      editMode.display = 'none'
   }

   useEffect(() => {
      return () => {
         console.log('Cleaning Up....')
      }
   }, [])

   return(
      <li className={styles.item}>
         <div style={viewMode} onDoubleClick={handleDoubleClick}>
            <input 
               type="checkbox" 
               className={styles.checkbox}
               checked={completed} 
               onChange={() => props.handleChangeCheckboxProps(id)}
            />
            <button onClick={() => props.delTodoProps(id)}>
               <FaTrash />
            </button>
            <span style={ completed ? completedStyle : null }>
               {title}
            </span>
         </div>
         <input 
            type="text"
            className={styles.textInput}
            style={editMode}
            value={title}
            onChange={event => props.editTodoProps(event.target.value, id)}
            onKeyDown={handleEditDone} 
         />
      </li>
   )
}

export default TodoItem