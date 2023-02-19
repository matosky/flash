import { StyledOwnMemoryPage } from "../styles/ownMemory.styled";
import OwnMemoryImageCard from "../components/ownMemoryCard";
import { Link, useParams,  useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { UserContext } from "../contexts/userContext";
import { ThemeConText } from "../contexts/themeContext";
import HashLoader from "react-spinners/ClipLoader"
import pic from "../images/stories/avatar-male.png"
import { FaBars, FaCog, FaMoon,FaTimes } from "react-icons/fa";
import { ModalContext } from "../contexts/modalContext";
import CreateMemory from "../components/addMemoryForm";

const OwnMemoryPage = () => {
    const {modals, setModals} = useContext(ModalContext)
    const {theme, setTheme} = useContext(ThemeConText)
    const { userState, userDispatch } = useContext(UserContext)
    const [ownState, setOwnSate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [settings, setSettings] = useState(false)
    const [errorText, setErrorText] = useState("You have not created any memories")
    const { username } = useParams()
    

    const navigate = useNavigate()
     const handleLogout = () => {
        localStorage.removeItem("user")
        userDispatch({ type: "LOGOUT" })
        navigate("/")
    }
    const fetchData = useCallback(async () => {
        setIsLoading(true)
        try {
            const res = await axios.get(`/api/memories/user/${username}`, {
                headers: {
                    authorization: `Bearer ${userState.user?.token}`
                }
            })
            if (res.status === 200 && res.data.data.memory.length === 0) {
                console.log(res)
                setIsLoading(false)
                return;
            }
            if (res.status === 200 && res.data.data.memory.length > 0) {
                setIsLoading(false)
                setErrorText('')
                setOwnSate(res.data.data.memory)
            }
        } catch (err) {
            console.log(err)
        }
    }, [userState, username]);

    useEffect(() => {
        fetchData()
    }, [fetchData])
    return (
        <StyledOwnMemoryPage>
            {modals.createModal && <div onClick={() => setModals({ ...modals, createModal: false })} className="shadow"><FaTimes className="times" onClick={() => setModals({ ...modals, createModal: false })} /></div>}
           {modals.createModal && <CreateMemory />}
            {settings && <ul className={theme===false ? "settings light" : "settings dark"}>
                <li>
                    <span>Settings</span>
                    <FaCog className="setting-icon" />
                </li>
                <li onClick={() => setTheme(!theme)}>
                    <span>Switch Appearance</span>
                    <FaMoon className="setting-icon" />
                </li>
                <li onClick={handleLogout}>
                    <span>Log out</span>
                </li>
            </ul>}
            <div className="container">
                <header>
                    <div className="img">
                        <img src={pic} alt="..." />
                    </div>
                    <div>
                        <div className="flex2">
                            <h3>{username}</h3>
                            <FaBars onClick={()=>setSettings(!settings)} className="cog" />
                        </div>
                        {ownState && <div>{ownState.length} {ownState.length===1 ? "Post" : "Posts"}</div>}
                    </div>
                </header>
                {isLoading ? <div className='centerLoader'><HashLoader color="#e6683c" /></div> : <h3>{errorText}</h3>}
                <section className="grid grid-fill">
                    {ownState && ownState.map(mem => {
                        return (
                            <Link className="card" key={mem._id} to={`/home/singleMemoryPage/${mem._id}`}>
                                <OwnMemoryImageCard image={mem.photo.url} />
                            </Link>
                        )
                    })
                    }
                </section>
            </div>
        </StyledOwnMemoryPage>
    );
}

export default OwnMemoryPage;