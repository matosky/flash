import { FaSearch, FaTimes } from "react-icons/fa";
import { StyledSearchBarDestop } from "../styles/searchBar.Styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/userContext";
import { ModalContext } from "../contexts/modalContext";

const SearchBarDestop = ({ handleClose }) => {
    const { modals, setModals } = useContext(ModalContext)
    const { userState } = useContext(UserContext)
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleNavigate = () => {
        let path = ""
        if (data?.user_name === userState?.user?.user_name) {
            path += `/home/ownMemory/user/${userState?.user?.user_name}`
        } else {
            path += `/home/ownMemory/public/${data?.user_name}`
        }
        navigate(path)
        setModals({ ...modals, searchModal: false })
    }
    useEffect(() => {
        async function fetchData(event) {
            try {
                const response = await axios(`/api/users/${inputValue}`);
                const user = response.data.user;
                console.log(response)
                setData(user);
            } catch (err) {
                console.log(err)
                setError("No results found")
            }

        }
        if (inputValue.length > 2) {
            fetchData();
        }
    }, [inputValue]);

    function handleChange(event) {
        setInputValue(event.target.value);
        console.log(inputValue)
    }
    return (
        <StyledSearchBarDestop>
            <div className="top-flex">
                <h3>Search</h3>
                <FaTimes className="fa-close" onClick={handleClose} />
            </div>
            <div className="search-box">
                <FaSearch className="smallSearchIcon" />
                <input
                    type="text"
                    placeholder="Search by username..."
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
            <hr />
            <ul className="display-box">
                {data &&
                    <li className="search-link" onClick={handleNavigate}>
                        <div>
                            <span></span>
                            <div className="avatar-text">
                                <h6>{data.user_name}</h6>
                                <small>{`${data.first_name} ${data.last_name}`}</small>
                            </div>
                        </div>
                    </li>
                }
                {!data && <div>{error}</div>}
            </ul>
        </StyledSearchBarDestop>
    );
}

export default SearchBarDestop;