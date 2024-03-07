import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default: 
            return state;

    }
}

const UseReducerPage = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    console.log(state.count);

    const handleIncrement = () => {
        dispatch({ type: "increment" });
    };

    const handleDecrement = () => {
        dispatch({ type: "decrement" })
    };


  return (
    <div>
        <button onClick={ handleDecrement }>Minus</button>
        <span>{ state.count }</span>
        <button onClick={ handleIncrement }>Plus</button>
    </div>
  )
}

export default UseReducerPage