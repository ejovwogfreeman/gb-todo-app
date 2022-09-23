import React from 'react'
import Todo from './Todo'

const Todos = ({todos, deleteTodo}) => {
  return (
    <div style={{marginTop: '20px'}}>
        <h3  style={{textAlign: 'center', marginBottom: '10px'}}>Your Todos</h3>
        {todos.length < 1 ? 'You have no todos' :
        <>{todos.map((todo)=> <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo}/> )}</>}
    </div>
  )
}

export default Todos