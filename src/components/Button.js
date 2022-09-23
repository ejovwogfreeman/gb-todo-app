import React from 'react'

const Button = ({text, bgcolor, color, toggle}) => {
  return (
    <button 
      onClick={toggle} 
      style={{backgroundColor: bgcolor, color: color, outline: 'none', border: 'none', padding: '5px 10px'}}
    >
      {text}
    </button>
  )
}

export default Button