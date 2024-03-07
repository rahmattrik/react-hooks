import React, { useRef, useState } from 'react'

const UseRefPage = () => {
    const inputRef = useRef();
    const [email, setEmail] = useState("");

    console.log(email);
    const handleSave = () => {
        console.log(inputRef.current.value);
    };

    /**
     * Useing to access element DOM from a element
     */

  return (
    <div>
        UseRefPage : 
        <input type="text" ref={ inputRef } />
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={ handleSave }>Save</button>
    </div>
  );
}

export default UseRefPage