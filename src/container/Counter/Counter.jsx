import React from 'react'
import "./Counter.scss"
import { useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter+1)
  }

  const handleDecrement = () => {
    if (counter == 0) {
      setCounter(counter)
    } else {
    setCounter(counter-1)
    }
  }

  return (
    <div className='counter'>
        <button className='counter__button counter__button--remove' onClick={handleDecrement}>-</button>
        <p className='counter__count'>{counter}</p>
        <button className='counter__button counter__button--add' onClick={handleIncrement}>+</button>
    </div>
  )

}

export default Counter