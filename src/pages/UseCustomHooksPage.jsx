import React from 'react'
import useCounter from '../hooks/useCounter'

const UseCustomHooksPage = () => {
    const { count, decrement, increment } = useCounter();
  return (
    <div>
        <button onClick={ decrement }> - </button>
        <h3>{ count }</h3>
        <button onClick={ increment }> + </button>
    </div>
  )
}

export default UseCustomHooksPage