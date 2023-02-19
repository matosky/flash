import {  useState } from "react";
import { Outlet } from "react-router-dom"
import SideBar from "../components/sidebar";
import { ModalContext } from "../contexts/modalContext";
import { ThemeConText } from "../contexts/themeContext";
import { StyledHome } from "../styles/home.styled";
import SideBarMobile from "../components/sideBarMobile";

const HomePage = () => {
    const [theme, setTheme] = useState(true);
    const [modals, setModals] = useState({
        createModal: false,
        searchModal: false,
        editAndDelete: false,
    })

    
    

    return (
        <ModalContext.Provider value={{ modals, setModals }}>
            <ThemeConText.Provider value={{ theme, setTheme }}>
                <StyledHome  dark={theme === true ? "light" : "dark"}>
                    <SideBar dark={theme === true ? "dark" : "light"} />
                    <SideBarMobile />
                    <Outlet />
                </StyledHome>
            </ThemeConText.Provider>
        </ModalContext.Provider>
    );
}

export default HomePage;