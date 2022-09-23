import React from 'react'
import '../css/Navbar.css'
import Button from './Button'

const Navbar = ({toggle, toggleForm}) => {
  return (
    <nav>
      <div className="main-nav">
        <h1>GB Todo-App</h1>
        <h1>V.1.0.0</h1>
      </div>
      <div className="sub-nav">
        <h3>Toggle Todo</h3>
        <Button text={toggleForm ? "close" : "open"} bgcolor={toggleForm ? "red" : "green" } color='white' toggle={toggle}/>
      </div>
    </nav>
  )
}

export default Navbar