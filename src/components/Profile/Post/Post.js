import "./Post.less";

function Post(props) {
    return (
        <div className="post">
            <div className="post__overlay">
                <div className="post__overlay-container">
                    <div className="post__overlay-like-icon"/>
                    <p className="post__overlay-like-span">{props.likes}</p>
                </div>
                <div className="post__overlay-container">
                    <div className="post__overlay-comment-icon"/>
                    <p className="post__overlay-comment-span">{props.comments}</p>
                </div>
            </div>
            <img className="post__image" src={props.image}/>
        </div>
    );
};

export default Post;
