import { Link } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Box from "./box";

function Navbar() {
    const [users, setUsers] = useState(null)
    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get("/api/users")
            if (res) {
                console.log(res)
                setUsers(res.data.data.users)
            }
        } catch (err) {
            console.log(err)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])
    return (
        <div className="navbar">
            <div className="app-header">
            </div>
            <div className="nave-bar-row">
                <div className="nave-bar-container">
                    {users &&
                        users.map((user) => (
                            <Link key={user._id} to={`/home/ownMemory/user/${user?.user_name || "backup"}`}>
                                <Box name={user?.first_name || "backup"} />
                            </Link>
                        ))}
                </div>
            </div>

        </div>
    )
}

export default Navbar;