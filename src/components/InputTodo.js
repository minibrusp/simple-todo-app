import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

const InputTodo = props => {

   const [inputText, setInputText] = useState({
      title: '',
   })

   const changeHandlerInputText = event => {
      setInputText({
         ...inputText,
         [event.target.name]: event.target.value
      })
   }

   const handleOnSubmit = event => {
      event.preventDefault()
      if(inputText.title.trim()) {
         props.addTodoProps(inputText.title)
         setInputText({
            title: '',
         })
      } else {
         alert('Please write an item . . . ')
      }
   }

   return (
      <form onSubmit={handleOnSubmit} className='form-container'>
         <input 
            type="text"
            placeholder="Add todo..."
            className='input-text'
            value={inputText.title}
            onChange={changeHandlerInputText}
            name='title'
         />
         <button className='input-submit'>
            <FaPlusCircle />
         </button>
      </form>
   )
}

export default InputTodo