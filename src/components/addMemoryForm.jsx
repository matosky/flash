import { useContext, useState } from "react";
import { StyledCreateMemory } from "../styles/createMemory.styled";
import axios from "axios";
import { ModalContext } from "../contexts/modalContext";
import { UserContext } from "../contexts/userContext";
import { MemoryContext } from "../contexts/memoryContext";
import BASE_URL from "../helpers/axios";

const CreateMemory = () => {
    const { userState } = useContext(UserContext)
    const { dispatch } = useContext(MemoryContext)
    const { modals, setModals } = useContext(ModalContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [file, setFile] = useState('')
    const [loading, setIloading] = useState(false);


    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        if (!title || !description || !file) {
            return;
        }
        setIloading(true)
        const formData = new FormData();
        formData.append("title", title)
        formData.append("description", description)
        formData.append("location", location)
        formData.append("image", file)

        const URL = `${BASE_URL}/api/memories`;
        await axios.post(URL, formData, {
            headers: {
                authorization: `Bearer ${userState.user.token}`
            }
        })
            .then(result => {
                setIloading(false)
                console.log(result)
                setModals({ ...modals, createModal: false })
                dispatch({ type: "ADD_MEMORY", payload: result.data.data.memory })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <StyledCreateMemory>
            <h4>
                Create new memory
            </h4>
            <form onSubmit={handleCreate} encType="multipart/form-data" autoComplete="on">
                <div className="title field">
                    <label>title</label>
                    <input
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        autoCorrect="off"
                    />
                </div>
                <div className="description field">
                    <label>Description</label>
                    <textarea
                        autoCorrect="off"
                        value={description}
                        rows="4"
                        cols="50"
                        placeholder="Your description..."
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    >
                    </textarea>
                </div>
                <div className="location field">
                    <label>Location</label>
                    <input
                        type="text"
                        autoCorrect="off"
                        placeholder="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="file field">
                    <label htmlFor="file">Drag Photos here</label>
                    <input
                        className="file"
                        type="file"
                        autoCorrect="off"
                        onChange={handleFile}
                        filename="image"
                        required
                    />
                </div>
                {loading ? <button className="loadingBtn" disabled>Just a Sec...</button> : <button>Create</button>}
            </form>
        </StyledCreateMemory>
    );
}

export default CreateMemory;