import { useEffect, useState } from "react"
import { deleteUserFromUI, updateUserList } from "../service";
import Counter from './Counter'

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [flag, setFlag] = useState(true);

    function updateList() {
        console.log("Updating user list ............")
        updateUserList((response) =>
            setUsers(response.data));
    }

    useEffect(function () {
        if (users.length !== 0) {
            return;
        }
        updateList();
    })

    function deleteUser(id, index) {
        deleteUserFromUI(id,
            function (response) {
                console.log("deleted");
                //updateList();
                users.splice(index, 1);
                const newUsers = [...users];
                setUsers(newUsers);
            }
        )
    }

    const sortByAge = () => {
        setFlag(!flag);
        users.sort((user1, user2) => flag ? user1.age - user2.age : user2.age - user1.age);
        const sortedByAgeUsers = [...users];
        setUsers(sortedByAgeUsers);
    }

    return (

        <div><Counter count={users.length}></Counter>
            <br />
            <table className="table table-bordered table-hover table-responsive table-striped">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th onClick={sortByAge}>Age</th>
                        <th>Joining Date</th>
                        <th>Skill</th>
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
                                    {user.skill}
                                </td>
                                <td align="center">
                                    <button className="btn btn-danger" onClick={() => {
                                        deleteUser(user.id, index);
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