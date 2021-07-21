import { useState }
    from 'react'
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import Message from './Message';
import {getAllSkills} from '../service'
import { saveDataInDB } from '../service';
// import UserList from './UserList';
export default function UserForm() {

    const [userForm, setUserform] = useState({
        firstname: "",
        age: "",
        joiningDate: "",
        skill: ""
    }) //hook function
    const [skills, setSkills] = useState([]);
    const [message, setMessage] = useState();

    const handleEvent = function (event) {
        setUserform({ ...userForm, [event.target.name]: event.target.value });
    }

    const updateSkills = function (event) {
        setUserform({ ...userForm, "skill": event });
    }

    const getSkillsFromDB = function (event) {
       getAllSkills((response) => setSkills(response.data))
    }
    

    const save = function (event) {
        console.log("User first name: " + userForm.firstname);
        console.log("User age: " + userForm.age);
        saveDataInDB(userForm,
            (response)=>( setMessage({ ...message, type: 'Success', text: "Record was saved" })),
            (error)=>( setMessage({ ...message, type: { error }, text: "Record was not saved" }))
        );
    }
    return (
        <div>
            <h3>Create User form</h3>
            <Message message={message}></Message>
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
                onClick={getSkillsFromDB}
                onSelect={updateSkills}
                name='skill'
            >
                {skills.map(function (skill, index) {
                    return (
                        <Dropdown.Item key={index} eventKey={skill}>{skill}
                        </Dropdown.Item>
                    )
                })}
            </DropdownButton>
            <br />
            <div className='form-group'>
                <Button onClick={save} className='form-control'>Save</Button>
            </div>

        </div>
    );
}