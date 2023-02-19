import { useContext, useState } from "react";
import { StyledCreateMemory } from "../styles/createMemory.styled";
import axios from "axios";
import { ModalContext } from "../contexts/modalContext";
import { UserContext } from "../contexts/userContext";
import { MemoryContext } from "../contexts/memoryContext";

const CreateMemory = () => {
    const { userState } = useContext(UserContext)
    const { dispatch } = useContext(MemoryContext)
    const { modals, setModals } = useContext(ModalContext)
    const [creator, setCreator] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [file, setFile] = useState('')
    const [loading, setIloading] = useState(false);
    const [refresh, setFresh] = useState(false)


    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        setIloading(true)
        const formData = new FormData();
        formData.append("user_name", creator)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("location", location)
        formData.append("image", file)

        const URL = "/api/memories";
        await axios.post(URL, formData, {
            headers: {
                authorization: `Bearer ${userState.user.token}`
            }
        })
            .then(result => {
                setIloading(false)
                setModals({ ...modals, createModal: false })
                dispatch({ type: "ADD_MEMORY", payload: result.data.data.memory })
                setFresh(true);
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
            <form onSubmit={handleCreate} encType="multipart/form-data">
                <div className="user field">
                    <label>creator</label>
                    <input
                        type="text"
                        value={creator}
                        placeholder="creator"
                        onChange={(e) => setCreator(e.target.value)}
                    />
                </div>
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
                        value={description}
                        rows="4"
                        cols="50"
                        placeholder="Your description..."
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className="location field">
                    <label>Location</label>
                    <input
                        type="text"
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
                        onChange={handleFile}
                        filename="image"
                    />
                </div>
                {loading ? <button className="loadingBtn">Just a Sec...</button> : <button>Create</button>}
            </form>
        </StyledCreateMemory>
    );
}

export default CreateMemory;