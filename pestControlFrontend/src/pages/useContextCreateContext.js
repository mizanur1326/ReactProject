import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function UseContextCreateContext(){
    const [user, setUser] = useState(["Mizanur", "Rahman", "Rana"]);

    return(
        <div className="container">
            <UserContext.Provider value={user}>
                <h1>This is UseContext & CreateContext Page</h1>
                <h2>{`${user[0]}, This is End`}</h2>
                <Component2/>                
            </UserContext.Provider>
        </div>
    )
}
export default UseContextCreateContext;

function Component2(){
    return(
        <>
            <h2>Component 2 </h2>
            <Component3/>
        </>
    )
}

function Component3(){
    const user = useContext(UserContext);
    return(
        <>
            <h3>Component 3 : {user[0]}  {user[1]}</h3>
            
        </>
    )
}
