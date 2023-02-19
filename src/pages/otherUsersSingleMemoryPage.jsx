import { FaTimes } from "react-icons/fa";
import { StyledSingleMemoryPage } from "../styles/singlememory.style";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/userContext";


const OtherUserSingleMemoryPage = () => {
    const { userState } = useContext(UserContext)
    const [memory, setMemory] = useState(null)
    const navigate = useNavigate();
    const { id } = useParams()
    const handleNavigate = () => {
        navigate(`/home/ownMemory/public/${memory?.user_id}`)
    }

    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get(`/api/memories/${id}`, {
                headers: {
                    authorization: `Bearer ${userState?.user?.token}`
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
            <div onClick={handleNavigate} className="shadow"><FaTimes className="close" onClick={handleNavigate} /></div>
            <div className="container">
                <div className="left">
                    <div className="img-box">
                        {memory && <img src={memory.photo.url} alt="..." />}
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <div>
                            <h3>{memory?.user_id}</h3>
                        </div>
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

export default OtherUserSingleMemoryPage;