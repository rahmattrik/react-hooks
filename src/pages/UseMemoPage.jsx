import React, { useMemo, useState } from 'react'

const UseMemoPage = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    /**
     * useMemo memorizes values
     */

    const incrementNumber = () => setNumber(number + 1);
    const incrementCount = () => setCount(count + 1);

    const isNumberEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) {
            i++;
        }

        return number % 2 === 0;
    }, [number]);

  return (
    <div>
        UseMemoPage
        <div>
            <button onClick={ incrementNumber }>number : { number }</button>
            <p>{ isNumberEven ? "even" : "odd" }</p>
            <button onClick={ incrementCount}>count : { count }</button>
        </div>
    </div>
  )
}

export default UseMemoPage