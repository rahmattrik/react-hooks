import React, { useCallback, useEffect, useState } from 'react'

const UseCallbackPage = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false)
    //useCallback memorizes a function, almost similar w/ useMemo

    const getItems = useCallback(() => {
        return [number, number+1, number + 2];
    }, [number]);

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333",
    };


  return (
    <div style={ theme }>
        <input 
            type="number"
            value={ number }
            onChange={ (e) => setNumber(Number(e.target.value)) }
        />
        <button onClick={ () => setDark(!dark) }>Dark</button>
        <List getItems={ getItems }/>
    </div>
  );
}

export default UseCallbackPage

function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log("Update items.");
    }, [getItems]);
    return items.map((item) => <div key={ item }>{ item }</div>)

}