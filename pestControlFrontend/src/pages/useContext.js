import { useState } from "react";

function UseContext(){
    const [welcome, setWelcome] = useState("Hello")
    return(
        <div className="container">
            <h1>This is UseContext Page</h1>
            <h2>{`${welcome}, This is End`}</h2>
            <Component2 msg={welcome}/>
        </div>
    )
}
export default UseContext;

function Component2({msg}){
    return(
        <>
            <h2>{msg} Component 2</h2>
            <Component3 msg1={msg}/>
        </>
    )
}

function Component3({msg1}){
    return(
        <>
            <h2>{msg1} Component 3</h2>
            <Component4 msg2={msg1}/>
        </>
    )
}

function Component4({msg2}){
    return(
        <>
            <h2>{msg2} Component 4</h2>
        </>
    )
}