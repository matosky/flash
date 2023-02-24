import { forwardRef } from "react";
import picky from "../images/stories/avatar-male.png";
import { Actions } from "../components/actions";
import axios from "axios";
import BASE_URL from "../helpers/axios";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Comments = forwardRef((props, ref) => {
    const {userState} = useContext(UserContext)
    const [text, setText] = useState("")

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!text) return false;
        const comment = {
            name: userState?.user?.username,
            text: text
        }
        try {
            const res = await axios.post(`${BASE_URL}/api/memory/comments/${props?.id}`, {
                body: JSON.stringify(comment)
            })
            console.log(res)
        } catch (err) {
            console.log(err)
        }

        setText("")
    }

  return (
    <div ref={props.commentRef} className="mainBox">
      <div className="commentBox">
              <input
                  type="text"
                  placeholder="Your comments..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  autoCorrect="off"
              />
        <span onClick={handleAddComment} className="comBtn">Post</span>
      </div>
      <div className="persons">
        {props.comments &&
          props.comments.map((com) => {
            return (
              <div key={com._id}>
                <div className="individual">
                  <img src={picky} alt="..." className="commenterAvatar" />
                  <div className="realCom">
                    <div>
                      <h6>{com.name}</h6>
                      <small>{com.text}</small>
                    </div>
                    <Actions />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
});

export default Comments;
