import { useContext, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PublicMemoryCard from "../components/publicMemoryCard"
import { UserContext } from "../contexts/userContext";
const PublicMemoriesPage = () => {
    const { userState } = useContext(UserContext)
    const [drop, setDrop] = useState(false)
    const navigate = useNavigate()
    const navigateToProf = () => {
        navigate(`/home/ownMemory/user/${userState?.user?.username || "backup"}`)
    }
    return (
        <div className="card-roll">
            <div onClick={() => setDrop(!drop)} className="headline">
                {userState?.user?.username}
                <FaCaretDown />
                {drop && <span onClick={navigateToProf}>Profile</span>}
            </div>
            {/* <Navbar /> */}
            <PublicMemoryCard />
        </div>
    );
}

export default PublicMemoriesPage;