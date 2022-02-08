import classnames from "classnames";
import { useState } from "react";

import "./Post.less";

function Post(props) {
    const [ isMouseOverPost, setIsMouseOverPost ] = useState(false);

    const postImageClass = classnames(
        "post__image",
        {
            "post__image_murk": isMouseOverPost
        }
    );

    const postOverlayClass = classnames(
        "post__overlay",
        {
            "post__overlay_displayed": isMouseOverPost
        }
    );

    function handleMouseOver() {
        setIsMouseOverPost(true);
    };

    function handleMouseLeave() {
        setIsMouseOverPost(false);
    };
    
    return (
        <div className="post" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <div className={postOverlayClass}>
                <div className="post__overlay-container">
                    <div className="post__overlay-like-icon"/>
                    <p className="post__overlay-like-span">{props.data.likes.length}</p>
                </div>
                <div className="post__overlay-container">
                    <div className="post__overlay-comment-icon"/>
                    <p className="post__overlay-comment-span">{props.data.comments.length}</p>
                </div>
            </div>
            <img className={postImageClass} src={props.data.image}/>
        </div>
    );
};

export default Post;
