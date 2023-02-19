import axios from "axios";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MemoryContext } from "../contexts/memoryContext";
import { UserContext } from "../contexts/userContext";
import { StyledEditAndDeleteModal } from "../styles/editAndDelete.styled";

const EditAndDelete = ({ onClick, onEdit, id }) => {
    const { dispatch } = useContext(MemoryContext)
    const { userState } = useContext(UserContext)
    const navigate = useNavigate()
    const deleteMemory = useCallback(async () => {
        try {
            const res = await axios.delete(`/api/memories/${id}`, {
                headers: {
                    authorization: `Bearer ${userState.user.token}`
                }
            })
            if (res) {
                console.log(res)
                dispatch({ type: "DELETE", payload: res.data.data.memory._id })
                navigate("/home/public")
            }
        } catch (err) {
            console.log(err)
        }

    }, [userState, id, navigate])
    return (
        <StyledEditAndDeleteModal>
            <ul>
                <li onClick={deleteMemory}>Delete</li>
                <li onClick={onEdit}>Edit</li>
            </ul>
            <span onClick={onClick}>Cancel</span>
        </StyledEditAndDeleteModal>
    );
}

export default EditAndDelete;