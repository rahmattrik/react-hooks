import React, { useState } from 'react'

const UseStatePage = () => {
    const [number, setNumber] = useState(0); //This is state
    //    [value, ]

    const handleIncrement = () => {
        setNumber(number + 1);
    }
    const handleDecrement = () => {
        setNumber(number - 1);
    }

  return (
    <section>
        Use State Page
        <p>{ number }</p>

        <button onClick={ handleDecrement }>Minus</button>
        <button onClick={ handleIncrement }>Plus</button>
    </section>
  )
}

export default UseStatePage
