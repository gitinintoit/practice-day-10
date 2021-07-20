import { useState } from "react"

export default function UserList() {
    const [users, setUsers] = useState([]);
    return (

        <div>
            <table className="table table-bordered table-hover table-responsive">
                <thead>
                    <tr>
                        <td> FirstName</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ravi </td>
                        <td>23</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}