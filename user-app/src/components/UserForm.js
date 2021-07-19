import { useState }
    from 'react'
export default function UserForm() {

    const [userForm, setUserform] = useState({ 
        firstname: "Ravi", 
        age: "23" }) //hook function

    const handleEvent = function (event) {
        setUserform({ ...userForm,[event.target.name]: event.target.value });
    }
    const save = function (event) {
        console.log("User first name: "+userForm.firstname);
        console.log("User age: "+userForm.age);

    }
    return (
        <div>
            <h3>Create User form</h3>
            <input name='firstname' value={userForm.firstname} onChange={handleEvent}>
            </input>
            <input name='age'value={userForm.age} onChange={handleEvent}></input>
            <button onClick={save}>Save</button>
        </div>
    );
}