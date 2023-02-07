import React from 'react'
import "./Counter.scss"

function Counter() {



  return (
    <div className='counter'>
        <button className='counter__add-btn'>-</button>
        <p className='counter__count'>0</p>
        <button className='counter__remove-btn'>+</button>
    </div>
  )
}

export default Counter