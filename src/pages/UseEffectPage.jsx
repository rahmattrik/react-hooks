import React, { useEffect, useState } from 'react'

const UseEffectPage = () => {
    const [number, setNumber] = useState(0);

    /**
     * * Second Mode
     * useEffect akan tertrigger bila ada pemabahan pada dependency,
     * pada kasus dibawah ini dependencynya adalah [ number ]
     */

    useEffect(() => {
        console.log("Use-Effect is running.");
    }, [number]);


  return (
    <div>
        UseEffectPage
        <p>{ number }</p>
        <button onClick={ () => setNumber(number + 1) }>Plus</button>
        <button onClick={ () => setNumber(number * 2) }>Double</button>
        <button onClick={ () => setNumber(number - number) }>Reset</button>
    </div>
  );
};

export default UseEffectPage