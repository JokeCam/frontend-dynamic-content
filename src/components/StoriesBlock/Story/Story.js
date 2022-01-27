import "./Story.less"

function Story(props) {
    return (
        <div className="story">
            <div className="story__image-container">
                <img className="story__image" src={props.data.avatar} />
            </div>
            <p className="story__name">{props.data.name}</p>
        </div>
    );
}

export default Story;
