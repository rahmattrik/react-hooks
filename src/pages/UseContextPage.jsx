import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();
const UseContextPage = () => {
    //Parent of Children1
    const [user, setUser] = useState("Hello World");

  return (
    <UserContext.Provider value={ user }>
        <div>
            <UseContextChildren1 />
        </div>
    </UserContext.Provider>
  );
}

export default UseContextPage;

function UseContextChildren1({ user }) {
    //Parent of Children2
    return (
        <>
            <h3>Children from UseContextPage</h3>
            <UseContextChildren2 />;
        </>
    );
}

function UseContextChildren2() {
    const user = useContext(UserContext);
    return user;
}
