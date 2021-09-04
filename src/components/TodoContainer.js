import React, { useState, useEffect } from 'react'
import Header from './Header'
import InputTodo from './InputTodo'
import TodosList from './TodosList'
import { v4 as uuidv4 } from 'uuid'

const TodoContainer = () => {

   const [todos, setTodos] = useState(getInitialTodos())

   const handleChangeCheckbox = id => {
      setTodos(prevState => 
         prevState.map(todo => {
            if(todo.id === id) {
               return {
                  ...todo,
                  completed: !todo.completed,
               }
            }
            return todo
         })
      )
   }

   const delTodo = id => {
      setTodos([
         ...todos.filter(todo => {
            return todo.id !== id
         })
      ])
   }

   const addTodo = title => {
      let newTodo = {
         id: uuidv4(),
         title: title,
         completed: false,
      }
      setTodos([...todos, newTodo])
   }

   const editTodo = (editedTitle, id) => {
      setTodos(
         todos.map(todo => {
            if(todo.id === id) {
               todo.title = editedTitle
            }
            return todo
         })
      )
   }

   function getInitialTodos() {
      const temp = localStorage.getItem('todos')
      const savedTodos = JSON.parse(temp)
      return savedTodos || []
   }

   useEffect(() => {
      const temp = JSON.stringify(todos)
      localStorage.setItem('todos', temp)
   }, [todos])

   return(
      <div className="container">
         <div className="inner">
            <Header />
            <InputTodo 
               addTodoProps={addTodo}
            />
            <TodosList 
               todos={todos}
               handleChangeCheckboxProps={handleChangeCheckbox}
               delTodoProps={delTodo}
               editTodoProps={editTodo}
            />
         </div>
      </div>
   )
}

export default TodoContainer 