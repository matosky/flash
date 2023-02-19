import axios from "axios";
import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { MemoryContext } from "../contexts/memoryContext";
import { UserContext } from "../contexts/userContext";
import { StyledEditForm } from "../styles/editForm.styled"

const EditMemory = ({ onCloseEdit }) => {
    const { userState } = useContext(UserContext);
    const { dispatch } = useContext(MemoryContext);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const { id } = useParams()
    const navigate = useNavigate();

    const updateMemory = async (e) => {
        console.log(userState.user.token)
        e.preventDefault();
        try {
            const response = await axios
                .patch(`/api/memories/${id}`, {
                    title: title,
                    description: description
                }, {
                    headers: { 'Content-type': 'application/json; charset=UTF-8' },
                    authorization: `Bearer ${userState?.user?.token}`
                });
            if (response) {
                navigate(`/home/ownMemory/user/${userState?.user?.username}`)
                console.log(response)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <StyledEditForm>
            <FaTimes className="close2" onClick={onCloseEdit} />
            <form onSubmit={updateMemory}>
                <div className="title field">
                    <label>title</label>
                    <input
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="description field">
                    <label>Description</label>
                    <textarea
                        rows="4"
                        cols="50"
                        placeholder="Your description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </textarea>
                </div>
                <button>Update</button>
            </form>
        </StyledEditForm>
    );
}

export default EditMemory;