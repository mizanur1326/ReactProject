import { useState } from "react";


function UseState(){
    const [user, setUser] = useState({name: "", email : "", age : ""});

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser((values)=>({...values, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your Data Submitted");
        console.log(user);
    }
    
    return(
        <div className="container">
            <h2>This is UseState Page</h2>
             {user.name} <br />
             {user.email} <br />
             {user.age} <br /><br />            

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={user.name} onChange={handleChange}/><br /><br />
                <input type="text" name="email" value={user.email} onChange={handleChange}/><br /><br />
                <input type="text" name="age" value={user.age} onChange={handleChange}/><br /><br />
                <input type="submit" value="Update" className="btn btn-outline-warning"/>
            </form>
        </div>
    )
}
export default UseState;