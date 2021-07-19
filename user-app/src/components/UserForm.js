import { useState }
from 'react'
export default function UserForm(){

    const [userForm,setUserform]=useState({firstname:"Ravi"}) //hook function

    const handleEvent=function(event){
        console.log(event);
        setUserform({...userForm,firstname:event.target.value});
    }
    return(
        <div>
            <h3>Create User form</h3>
            <input value={userForm.firstname} onChange={handleEvent}>

            </input>
        </div>
    );
}