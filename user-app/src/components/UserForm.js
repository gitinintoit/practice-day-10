import { useState }
from 'react'
export default function UserForm(){

    const [userForm,setUserform]=useState({firstname:"Ravi"}) //hook function
    return(
        <div>
            <h3>Create User form</h3>
            <input value={userForm.firstname}>

            </input>
        </div>
    );
}