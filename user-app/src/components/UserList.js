import axios from "axios";
import { useEffect, useState } from "react"
import Counter from './Counter'

export default function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(function () {
        if(users.length!==0){
            return;
        }
        console.log("Updating user list ............")
        const promise = axios.get("http://localhost:4200/users");
        promise.then(function (response) {
            setUsers(response.data)
        })
    })

    function deleteUser(id){
        const promise=axios.delete("http://localhost:4200/users/"+id);
        promise.then(function (response) {
            console.log("deleted");
        })
         
    }
    return (

        <div><Counter count={users.length}></Counter>
            <br/>
            <table className="table table-bordered table-hover table-responsive table-striped">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>Age</th>
                        <th>Joining Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(function (user, index) {
                        return (
                            <tr key={index}>
                                <td>
                                    {user.firstname}
                                </td>
                                <td>
                                    {user.age}
                                </td>
                                <td>
                                    {user.joiningDate}
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>{
                                        deleteUser(user.id);
                                    }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}