import { useState }
    from 'react'
import axios from "axios"
export default function UserForm() {

    const [userForm, setUserform] = useState({
        firstname: "",
        age: "",
        joiningDate: ""
    }) //hook function

    const handleEvent = function (event) {
        setUserform({ ...userForm, [event.target.name]: event.target.value });
    }
    const save = function (event) {
        console.log("User first name: " + userForm.firstname);
        console.log("User age: " + userForm.age);
        const promise = axios.post("http://localhost:4200/users", userForm);
        promise.then(function (response) {
            console.log(response);
        })

    }
    return (
        <div>
            <h3>Create User form</h3>
            <div className='form-group'>
                <input placeholder='First Name' name='firstname' className='form-control' value={userForm.firstname} onChange={handleEvent}>
                </input>
            </div>
            <input placeholder='Age' type='number' name='age' value={userForm.age} className='form-control' onChange={handleEvent}></input>
            <label htmlFor='joiningDate'>Joining date:</label>
            <div className='form-group'>
                <input name='joiningDate' type="date" value={userForm.joiningDate} className='form-control' onChange={handleEvent}></input>
            </div>
            <div className='form-group'>
                <button onClick={save} className='form-control btn-primary'>Save</button>
            </div>

        </div>
    );
}