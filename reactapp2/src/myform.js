import { useState } from "react";


function MyForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    console.log(name);
    console.log(email);  

    return (
      <div>
        <h2>Test form</h2>
      <form>
        <h3>Enter your name:</h3>
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
        <h3>Enter Your Email:</h3>
        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        
      </form>


    </div>
  )
}

export default MyForm;