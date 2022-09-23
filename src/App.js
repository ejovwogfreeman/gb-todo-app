import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form'
import Todos from './components/Todos'
import { useState, useEffect } from 'react'

function App() {

  // const initialState = [
  //   {
  //     id: 1,
  //     title: 'first todo',
  //     content: 'Read all day from morining till evening',
  //     day: 'monday',
  //     date: '24th sept 2022',
  //   },
  //   {
  //     id: 2,
  //     title: 'second todo',
  //     content: 'Read all day from morining till evening',
  //     day: 'monday',
  //     date: '24th sept 2022',
  //   },
  //   {
  //     id: 3,
  //     title: 'third todo',
  //     content: 'Read all day from morining till evening',
  //     day: 'monday',
  //     date: '24th sept 2022',
  //   },
  // ]

  // const [todos, setTodos] = useState(initialState)


  const [todos, setTodos] = useState(()=> {
    const localData = localStorage.getItem('todos')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(()=> {
      localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
      const id = Math.random()
      const date = new Date().toDateString() + ' | ' + new Date().toLocaleTimeString()
      const newTodo = {...todo, id, date}
      const newTodos = [newTodo, ...todos]
      setTodos(newTodos)
  }

  const deleteTodo = (id) => {
      const newTodo = todos.filter(todo=> todo.id !== id)
      setTodos(newTodo)
  }

  const [toggleForm, setToggleForm] = useState(false)
  
  const toggle = () => {
    setToggleForm(!toggleForm)
  }

    return (
      <div className="App">
        <Navbar toggle={toggle} toggleForm={toggleForm}/>
        {toggleForm ? <Form addTodo={addTodo}/> : ''}
        <Todos todos={todos} deleteTodo={deleteTodo}/>
      </div>
  );
}

export default App;
