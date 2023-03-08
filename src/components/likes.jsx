import { FaHeart, FaRegHeart } from "react-icons/fa";
import { forwardRef } from "react";

const Likes = forwardRef((props,ref) => {

    return ( 
        <div className="like-holder">
            <span onClick={props.handleLike} ref={props.likeRef} className="off-heart" >
                <FaRegHeart />
            </span>
            <span onClick={props.handleUnlike} className="on-heart"  >
              <FaHeart className={props.liked===true ? `showLike` : undefined}/>
            </span>
        </div>
     );
})
 
export default Likes;