import React from 'react'
import "./Counter.scss"

function Counter() {
  return (
    <div className='counter'>
        <button>-</button>
        <p>0</p>
        <button>+</button>
    </div>
  )
}

export default Counter