import { useContext } from "react";
import { ModalContext } from "../contexts/modalContext";
import { StyledActions } from "../styles/actions.styled";

export const Actions = ({ onClick }) => {
    return (
        <StyledActions onClick={onClick}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </StyledActions>
    );
}
