import { useState }
    from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
export default function UserForm() {

    const [userForm, setUserform] = useState({
        firstname: "",
        age: "",
        joiningDate: "",
        skill: ""
    }) //hook function

    const handleEvent = function (event) {
        setUserform({ ...userForm, [event.target.name]: event.target.value });
    }
    const handleSkills = function (event) {
        setUserform({ ...userForm, "skill": event });

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
            <br />
            {/* <select name='skill' value={userForm.skill} onChange={handleEvent}>
                <option selected>Skill</option>
                <option>HTML</option>
                <option>JS</option>
                <option>CSS</option>
            </select> */}
            <DropdownButton
                alignRight
                title="Skill"
                id="dropdown-menu-align-right"
                onSelect={handleSkills}
                name='skill'
            >
                <Dropdown.Item eventKey="HTML">HTML</Dropdown.Item>
                <Dropdown.Item eventKey="CSS">CSS</Dropdown.Item>
                <Dropdown.Item eventKey="JS">JS</Dropdown.Item>
            </DropdownButton>
            <br />
            <div className='form-group'>
                <Button onClick={save} className='form-control'>Save</Button>
            </div>

        </div>
    );
}