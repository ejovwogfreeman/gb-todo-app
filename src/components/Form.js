import React from 'react'
import '../css/Form.css'
import Button from './Button'
import { useState } from 'react'

const Form = ({addTodo}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [day, setDay] = useState('Sunday')

    const handleSubmit = (e) => {
        e.preventDefault()

        addTodo({title, content, day})

        setTitle('')
        setContent('')
        setDay('Sunday')
    }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Add Todo</h3>
        <div>
            <input 
                type="text"
                placeholder='Enter todo title'
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
        </div>
        <div>
            <textarea 
                type="text"
                placeholder='Enter todo Detail'
                required
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />
        </div>
        <div>
            <select
                required
                value={day}
                onChange={(e)=>setDay(e.target.value)}
            >
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
            </select>
        </div>
        <Button text="submit"/>
    </form>
  )
}

export default Form