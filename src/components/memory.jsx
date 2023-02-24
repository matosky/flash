import { useEffect, useState, useContext } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import Likes from "./likes";
import { FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import pic from "../images/stories/avatar-male.png";
import { StyledMemory } from "../styles/memory.styled";
import Comments from "./comments";
import { useRef } from "react";
import axios from "axios";
import BASE_URL from "../helpers/axios";

function Memory(props) {
  const [date, setDate] = useState("");
  const { userState } = useContext(UserContext);
  const [likes, setLikes] = useState(props.likes);

  let commentRef = useRef();
  let likeRef = useRef();

  const handleComments = () => {
    console.log(123);
    commentRef.current.classList.add("showComment");
  };
  const handleLike = async () => {
    try {
      const res = await axios.put(`${BASE_URL}/api/likes/like/${props.id}`);
      if (res) {
        likeRef.current.classList.add("hideLike");
        setLikes((prev) => prev + 1);
        localStorage.setItem("liked", true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      const res = await axios.put(`${BASE_URL}/api/likes/unlike/${props.id}`);
      if (res) {
        setLikes((prev) => prev - 1);
        localStorage.removeItem("liked");
        likeRef.current.classList.remove("hideLike");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const navigateToOwnMemory = () => {
    let path = "";
    if (props?.user === userState?.user?.username) {
      path += `/home/ownMemory/user/${userState?.user?.username}`;
    } else {
      path += `/home/ownMemory/public/${props?.user}`;
    }
    navigate(path);
  };

  useEffect(() => {
    if (localStorage.getItem("liked")) {
      likeRef.current.classList.add("hideLike");
    }
    const handleDate = () => {
      const timestamp = props.date;
      const newDate = new Date(timestamp).getTime();
      const currentTime = Date.now();
      const difference = (currentTime - newDate) / 60000;
      if (difference >= 60) {
        setDate(Math.floor(difference / 60) + " h");
      } else if (difference < 60) {
        setDate(Math.floor(difference) + " m");
      }
    };
    handleDate();
  }, [props.date]);
  return (
    <StyledMemory>
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
        <div className="sectin-div">
          <h1 className="white">#{props.title}</h1>
          <p className="white">{props.description}</p>
        </div>
        <div
          className="content-div"
          style={{
            backgroundImage: `url("${props.image}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="row">
          <div className="liked">
            <FaThumbsUp className="small-thumb" />
            <span> {likes} likes</span>
          </div>
          <div className="icon-bar">
            <Likes
              likeRef={likeRef}
              handleLike={handleLike}
              handleUnlike={handleUnlike}
            />
            <span onClick={handleComments} className="com-icon">
              <FaRegCommentAlt />
              Comments
            </span>
            <span>{props.comments.length > 0 ? `${props.comments.length} comments` : `${props.comments.length} comment`}</span>
          </div>
          <Comments
            id={props.id}
            comments={props.comments}
            commentRef={commentRef}
          />
        </div>
      </div>
    </StyledMemory>
  );
}

export default Memory;
