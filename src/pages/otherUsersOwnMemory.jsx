import { StyledOwnMemoryPage } from "../styles/ownMemory.styled";
import OwnMemoryImageCard from "../components/ownMemoryCard";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { UserContext } from "../contexts/userContext";
import HashLoader from "react-spinners/ClipLoader"
import pic from "../images/stories/avatar-male.png"
import { ModalContext } from "../contexts/modalContext";
import CreateMemory from "../components/addMemoryForm";

const OtherUsersOwnMemory = () => {
    const {modals, setModals} = useContext(ModalContext)
    const { userState } = useContext(UserContext)
    const [ownState, setOwnSate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState("No memories created by user")
    const { user } = useParams()
    const fetchData = useCallback(async () => {
        setIsLoading(true)
        try {
            const res = await axios.get(`/api/memories/user/${user}`, {
                headers: {
                    authorization: `Bearer ${userState.user?.token}`
                }
            })
            if (res.status === 200 && res.data.data.memory.length === 0) {
                console.log(res)
                setIsLoading(false)
                return;
            }
            if (res.status === 200 && res.data.data.memory.length > 0) {
                setIsLoading(false)
                setErrorText('')
                setOwnSate(res.data.data.memory)
            }
        } catch (err) {
            console.log(err)
        }
    }, [userState, user]);

    useEffect(() => {
        fetchData()
    }, [fetchData])
    return (
        <StyledOwnMemoryPage>
            {modals.createModal && <div onClick={() => setModals({ ...modals, createModal: false })} className="shadow"><FaTimes className="times" onClick={() => setModals({ ...modals, createModal: false })} /></div>}
           {modals.createModal && <CreateMemory />}
            <div className="container">
                <header>
                    <div className="img">
                        <img src={pic} alt="..." />
                    </div>
                    <div>
                        <div className="flex2">
                            <h3>{user}</h3>
                        </div>
                        {ownState && <div>{ownState.length} posts</div>}
                    </div>
                </header>
                {isLoading ? <div className='centerLoader'><HashLoader color="#e6683c" /></div> : <h3>{errorText}</h3>}
                <section className="grid grid-fill">
                    {ownState && ownState.map(mem => {
                        return (
                            <Link className="card" key={mem._id} to={`/home/public/singleMemory/${mem?._id}`}>
                                <OwnMemoryImageCard image={mem.photo.url} />
                            </Link>
                        )
                    })
                    }
                </section>
            </div>
        </StyledOwnMemoryPage>
    );
}

export default OtherUsersOwnMemory;