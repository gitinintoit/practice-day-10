import axios from "axios";
import { useEffect, useState } from "react"

export default function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(function () {
        if(users.length!==0){
            return;
        }
        console.log("called................")
        const promise = axios.get("http://localhost:4200/users");
        promise.then(function (response) {
            setUsers(response.data)
        })
    })
    return (

        <div>
            <br/>
            <table className="table table-bordered table-hover table-responsive">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>Age</th>
                        <th>Joining Date</th>
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}