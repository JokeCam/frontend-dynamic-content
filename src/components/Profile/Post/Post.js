import "./Post.less";

function Post(props) {
    return (
        <div className="post">
            <img className="post__image" src={props.data.image}/>
        </div>
    );
};

export default Post;
