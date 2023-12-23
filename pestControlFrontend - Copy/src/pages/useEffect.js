import { useState, useEffect } from "react";


function UseEffect(){
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState(5);
    useEffect(()=>{
        setPerson(()=>count*2)
    },[count]);
    return(
        <div className="container">
            <h1>This is useEffect Page</h1>
            Count : {count} <br />
            Person : {person} <br />
            <button onClick={()=>setCount(count + 1)}>Click Me</button>

        </div>
    )
}
export default UseEffect;