import React from 'react'
import TodoItem from './TodoItem'

const TodosList = props => {
   return(
      <div>
         {props.todos.map(todo => (
            <TodoItem 
               key={todo.id} 
               todo={todo}
               handleChangeCheckboxProps={props.handleChangeCheckboxProps}
               delTodoProps={props.delTodoProps}
               editTodoProps={props.editTodoProps} 
            />
         ))}
      </div>
   )
}

export default TodosList