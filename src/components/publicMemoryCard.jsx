import { useContext, useEffect, useState, useMemo } from 'react';
import Memory from './memory';
import HashLoader from "react-spinners/ClipLoader"
import { MemoryContext } from '../contexts/memoryContext';
import NavbarMobile from './navbarMobile';
import axios from 'axios';
import BASE_URL from '../helpers/axios';

function PublicMemoryCard() {
    const { state, dispatch } = useContext(MemoryContext)
    const [loading, setIsloading] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            setIsloading(true)
           const user = JSON.parse(localStorage.getItem("user"))
        await axios.get(`${BASE_URL}/api/memories`, {
            headers: {
                authorization: `Bearer ${user?.token || "backup"}`,
            }
        })
            .then(results => {
                setIsloading(false)
                dispatch({ type: "GET_ALL_MEMORIES", payload: results.data.data.memories })
            })
            .catch(err => {
                console.log({ error: err.message })
            })
    }
    
        fetchData()
    }, [dispatch])
    const cachedData = useMemo(() => state, [state]);
    return (
        <div >
          <NavbarMobile />
            {
                loading ?
                    <div className='centerLoader'><HashLoader color="#e6683c" /> </div> :
                    < div className="public" >
                        <div className="public__header">
                            {
                                cachedData.memories && cachedData.memories.map((post) => (
                                    <div key={post._id}>
                                        <Memory
                                            image={post.photo.url}
                                            name={post.user_name}
                                            title={post.title}
                                            location={post.location}
                                            description={post.description}
                                            date={post.createdAt}
                                            user={post.user_id}
                                            id={post._id}
                                            likes={post.likes}
                                            comments={post.comments}
                                            liked={post.liked}
                                        />
                                    </div>
                                ))
                            }

                        </div>
                    </div >
            }
        </div>
    )

}

export default PublicMemoryCard;