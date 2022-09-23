import React from 'react'
import '../css/Todo.css'
import { FaTimes } from 'react-icons/fa'

const Todo = ({todo, deleteTodo}) => {
  return (
    <div className='todo'>
        <div><h3>{todo.title}</h3> <FaTimes className='icon' onClick={()=>deleteTodo(todo.id)}/></div>
        <p>{todo.content}</p>
        <small>To be completed on {todo.day}</small> <br />
        <small>Posted on {todo.date}</small>
    </div>
  )
}

export default Todo