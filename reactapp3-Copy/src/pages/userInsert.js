import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


function UserInsert(){
    const [userInfo, setUseInfo] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        // alert("Submitted");
        userInsert(userInfo);
    }
    
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUseInfo((val)=>({...val, [name]:value}));
    }

    const userInsert = (d) =>{
        axios.post("http://localhost/React/reactapp3/api/userInsert.php", {data:d}).then(res=>{
            //alert("Inserted");
            alert(res.data.msg);
            return navigate('/users');
        })
    }
    console.log(userInfo);
    return(
        <div className="container">
            <h1>Add User</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" value={userInfo.name} onChange={handleChange} placeholder="Enter your Name"/><br />
                <input type="email" name="email" value={userInfo.email} onChange={handleChange} placeholder="Enter your email" /><br />
                <input type="submit" name="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default UserInsert;