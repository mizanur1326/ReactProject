import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users(){
    useEffect( () => {
        alluser();
      }, []); 
    
      const [isuser, setuser] = useState([]);

      const alluser = async (ids) => {
        
          axios.get(`http://localhost/React/reactapp3/api/user.php`)
          .then(res => {
            console.log(res.data.userlist)
            setuser(res.data.userlist);
          })
          
      }
      const delConfirm = (id) => {
        if (window.confirm("Are you sure?")) {
          deleteUser(id);
        }
      };
      const deleteUser = async (id) => {
       
          axios.post(`http://localhost/React/reactapp3/api/delete_user.php`, { 
            userids: id,
          })
          .then(res => {
            setuser([]);
            alluser();
            return;
           })
        }   
      

    
if (isuser) {
  return(
    <div className="container">
        <h1>This is Users Page</h1>
        <table className='table table-striped border'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
            </thead>
            {
            isuser.map((item) =>
                <tbody>
                    <tr>
                        <td>{item.user_id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.date}</td>
                        <td><button className='btn btn-danger' onClick={()=>delConfirm(item.user_id)}>Delete</button></td>
                    </tr>
                </tbody>
               
            )
        }
        </table>

        <Link to={"/newuser"}><button className='btn btn-primary'>Add New User</button></Link>

        
    </div>
)
}else{
  return(
    <div className='container'>
      <h1>There is no Data</h1>
      <Link to={"/newuser"}><button className='btn btn-primary'>Add New User</button></Link>
    </div>
  )
}
} 
export default Users;