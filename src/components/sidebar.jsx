import { useState, useContext, useEffect } from "react";
import { FaBars, FaBell, FaCog, FaHome, FaMoon, FaPlus, FaSearch, FaUser } from "react-icons/fa"
import { StyledSidebar } from "../styles/sidebar.styled";
import { Link, useNavigate } from "react-router-dom";
import CreateMemory from "./addMemoryForm";
import SearchBarDestop from "./searchBarDesktop";
import { ThemeConText } from "../contexts/themeContext";
import { ModalContext } from "../contexts/modalContext";
import { UserContext } from "../contexts/userContext";

const SideBar = () => {
    const { userState, userDispatch } = useContext(UserContext)
    const { modals, setModals } = useContext(ModalContext)
    const { theme, setTheme } = useContext(ThemeConText)
    const [more, setMore] = useState(false)
    const navigate = useNavigate()

    const handleCreateModal = () => {
        setModals({ ...modals, createModal: true })
    }
    const handleSearchModal = () => {
        setModals({ ...modals, searchModal: true })
    }

    const handleCloseSearchModal = () => {
        setModals({ ...modals, searchModal: false })
    }

    const handleMore = () => {
        setMore(!more)
    }

    const handleTheme = () => {
        setTheme(!theme)
    }

    const handleLogout = () => {
        localStorage.removeItem("user")
        userDispatch({ type: "LOGOUT" })
        navigate("/")
    }


    return (
        <StyledSidebar>
            {modals.createModal && <div onClick={() => setModals({ ...modals, createModal: false })} className="shadow"></div>}
            {modals.searchModal && <div onClick={() => setModals({ ...modals, searchModal: false })} className="shadow"></div>}
            {modals.searchModal && <SearchBarDestop handleClose={handleCloseSearchModal} />}
            {modals.createModal && <CreateMemory />}
            <div>
                <Link className="logo" to="/home/public">Flash</Link>
                <ul className="navLinks">
                    <Link className="home-link" to="/home/public">
                        <li>
                            <FaHome className="link-icon" />
                            <span>Home</span>
                        </li>
                    </Link>

                    <li onClick={handleSearchModal}>
                        <FaSearch className="link-icon" />
                        <span>Search</span>
                    </li>
                    {/* <li>
                        <FaBell className="link-icon" />
                        <span>Notifications</span>
                    </li> */}
                    <li onClick={handleCreateModal}>
                        <FaPlus className="link-icon" />
                        <span >Create</span>
                    </li>
                    {userState ? <Link to={`/home/ownMemory/user/${userState.user?.username || "backup"}`}>
                        <li>
                            <FaUser className="link-icon" />
                            <span>Profile</span>
                        </li>
                    </Link> : <span></span>}

                </ul>
            </div>
            <ul className={more ? "more" : "offMore"}>
                <li>
                    <span>Settings</span>
                    <FaCog className="setting-icon" />
                </li>
                <li onClick={handleTheme}>
                    <span>Switch Appearance</span>
                    <FaMoon className="setting-icon" />
                </li>
                <li onClick={handleLogout}>
                    <span>Log out</span>
                </li>
            </ul>
            <Link to="#" onClick={handleMore} className="moreBtn">
                <FaBars className="link-icon" />
                <span>More</span>
            </Link>
        </StyledSidebar>
    );
}

export default SideBar;