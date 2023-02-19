import { useEffect, useState, useContext } from "react";
// import { FaThumbsUp, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import pic from "../images/stories/avatar-male.png"


function Memory(props) {
    const [date, setDate] = useState('');
    const { userState } = useContext(UserContext)

    const navigate = useNavigate();

    const navigateToOwnMemory = () => {
        let path = ""
        if (props?.user === userState?.user?.username) {
            path += `/home/ownMemory/user/${userState?.user?.username}`
        } else {
            path += `/home/ownMemory/public/${props?.user}`
        }
        navigate(path)
    }

    useEffect(() => {
        const handleDate = () => {
            const timestamp = props.date;
            const newDate = new Date(timestamp).getTime();
            const currentTime = Date.now();
            const difference = (currentTime - newDate) / 60000;
            if (difference >= 60) {
                setDate(Math.floor(difference / 60) + " h")
            } else if (difference < 60) {
                setDate(Math.floor(difference) + " m")
            }
        }
        handleDate()
    }, [props.date])
    return (

        <div className="rows1">
            <div onClick={navigateToOwnMemory} className="cardTop">
                <img className="imgT" src={pic} alt="..." />
                <div className="top-top">
                     <div className="small-flex">
                        <h4>{props.user}</h4>
                        <span>. {date}</span>
                    </div>
                    <p>{props.location}</p>
                </div>
            </div>
            <div className="content-div" style={{
                backgroundImage: `url("${props.image}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
            </div>
            <div className="sectin-div">
                <h1 className="white">{props.title}</h1>
                <p className="white">### {props.description}</p>

                {/* <div className="like-delete">
                    <div className="like">
                        <FaThumbsUp className="like-icon" />
                        <span className="like-icon">&nbsp;&nbsp;132,35435</span>

                    </div>
                    <div className="delete">
                        <FaComment className="like-icon" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default Memory;
