import { useState } from "react";

function RegForm(){
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        //setInputs(values => ({...values, [name]:value}));
        setInputs((values)=>({...values, [name]:value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(inputs.fname + "\n" + inputs.lname + "\n" + inputs.number + "\n" + inputs.email + "\n" + inputs.gender + "\n" + inputs.district + "\n" + inputs.message);
    }

    console.log(inputs);


    return(
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="fname" value={inputs.fname} onChange={handleChange}/> <br/> <br/>                
                <label>Last Name</label>
                <input type="text" name="lname" value={inputs.lname} onChange={handleChange}/> <br/> <br/>                
                <label>Contact No</label>
                <input type="number" name="number" value={inputs.number} onChange={handleChange}/><br/> <br/> 
                <label>Email</label>
                <input type="email" name="email" value={inputs.email} onChange={handleChange}/><br/> <br/>
                <label>Gender : </label>
                <input type="radio" name="gender" value="Male" onChange={handleChange} />Male
                <input type="radio" name="gender" value="Female" onChange={handleChange}/>Female <br/> <br/>
                <label>Hobbies : </label>
                <input type="checkbox" value="Cricket" onChange={handleChange} />Cricket
                <input type="checkbox" value="Football" onChange={handleChange} />Football
                <input type="checkbox" value="Badminton" onChange={handleChange} />Badminton <br/> <br/>
                <label>Select District</label>
                <select name="district" onChange={handleChange}>
                    <option value="">Select One</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Chitagong">Chitagong</option>
                </select><br/> <br/>
                <label>Message</label><br/> <br/>
                <textarea name="message" value={inputs.message} onChange={handleChange} cols="30" rows="5"></textarea><br/> <br/>
                <input type="submit" value="Submit" name="submit"/>
            </form>

        </div>
    )
}
export default RegForm;