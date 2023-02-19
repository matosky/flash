import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import { StyledNavbarMobile } from "../styles/navBarMobile.styled";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../contexts/modalContext";
import CreateMemory from "./addMemoryForm";
import { UserContext } from "../contexts/userContext";
import axios from "axios";
import { ThemeConText } from "../contexts/themeContext";

const NavbarMobile = () => {
    const { userState } = useContext(UserContext)
    const {theme} = useContext(ThemeConText)
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState("")
    const { modals, setModals } = useContext(ModalContext)
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
    
     function handleChange(event) {
         setInputValue(event.target.value);
        console.log(inputValue)
     }
    
    function handleBox() {
        setInputValue("")
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
  return (
      <StyledNavbarMobile dark={theme === true ? "light" : "dark"}>
           {modals.createModal && <div onClick={() => setModals({ ...modals, createModal: false })} className="shadow"><FaTimes className="times" onClick={() => setModals({ ...modals, createModal: false })} /></div>}
          {modals.createModal && <CreateMemory />}
          {inputValue && <div onClick={handleBox} className="searchShadow"></div>}
          {inputValue && <div className="display">
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
          </div>}
      <div className="container1">
        <Link className="home-link logo" to="/home/public">
          <li>Flash</li>
        </Link>
        <div className="search-box">
          <FaSearch className="smallSearchIcon" />
              <input
                    type="text"
                    placeholder="Search by username..."
                    value={inputValue}
                      onChange={handleChange}
                />
        </div>
      </div>
    </StyledNavbarMobile>
  );
};

export default NavbarMobile;
