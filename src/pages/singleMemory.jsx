import { FaTimes } from "react-icons/fa";
import { Actions } from "../components/actions";
import EditAndDelete from "../components/editAndDeleteModal";
import { StyledSingleMemoryPage } from "../styles/singlememory.style";
import EditMemory from "../components/editForm";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/userContext";

const SingleMemoryPage = () => {
    const { userState } = useContext(UserContext)
    const [editModal, setEditModal] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [memory, setMemory] = useState(null)
    const navigate = useNavigate();
    const { id } = useParams()
    const handleNavigate = () => {
        navigate(`/home/ownMemory/user/${memory.user_id}`)
    }

    const handleClick = () => {
        setEditModal(true)
    }

    const handleClose = () => {
        setEditModal(false)
    }

    const handleEdit = () => {
        setEditForm(true)
        setEditModal(false)
    }

    const handleCloseEdit = () => {
        setEditForm(false)
    }

    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get(`/api/memories/${id}`, {
                headers: {
                    authorization: `Bearer ${userState.user.token}`
                }
            })

            if (res) {
                console.log(res.data.data.memory.photo)
                setMemory(res.data.data.memory)
            }
        } catch (err) {
            console.log(err)
        }
    }, [userState, id])



    useEffect(() => {
        fetchData()
    }, [fetchData])
    return (
        <StyledSingleMemoryPage>
            {editModal && <EditAndDelete onClick={handleClose} onEdit={handleEdit} id={memory._id} />}
            {editForm && <EditMemory onCloseEdit={handleCloseEdit} />}
            <div onClick={handleNavigate} className="shadow"><FaTimes className="close" onClick={handleNavigate} /></div>
            {(editModal === true || editForm === true) && <div className="shadow2"></div>}
            <div className="container">
                <div className="left">
                    <div className="img-box">
                        {memory && <img src={memory.photo.url} alt="..." />}
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <div>
                            <h3>{userState?.user?.username}</h3>
                        </div>
                        <Actions onClick={handleClick} />
                    </div>
                    <section className="comment-scroll">
                        {memory && <p className="desc">{memory.description}</p>}
                        <ul className="comments">
                            <li>These are some comments....</li>
                        </ul>
                        <div className="commentBox">
                            {/* <div className="icons">
                                <FaHeart className="one" />
                                <FaComment className="two" />
                            </div> */}
                            {/* <div className="likes">12k likes</div> */}
                            <div className="input-field">
                                <input type="text" placeholder="Add a comment..." />
                                <span className="postBtn">Post</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </StyledSingleMemoryPage>
    );
}

export default SingleMemoryPage;