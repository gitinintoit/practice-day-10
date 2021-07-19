import { useState }
    from 'react'
export default function UserForm() {

    const [userForm, setUserform] = useState({ 
        firstname: "Ravi", 
        age: "23" }) //hook function

    const handleEventName = function (event) {
        setUserform({ ...userForm, firstname: event.target.value });
    }
    const handleEventAge = function (event) {
        setUserform({ ...userForm, age: event.target.value });
    }

    const save = function (event) {
        console.log("User first name: "+userForm.firstname);
        console.log("User age: "+userForm.age);

    }
    return (
        <div>
            <h3>Create User form</h3>
            <input value={userForm.firstname} onChange={handleEventName}>
            </input>
            <input value={userForm.age} onChange={handleEventAge}></input>
            <button onClick={save}>Save</button>
        </div>
    );
}