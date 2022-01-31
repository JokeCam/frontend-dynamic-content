import PropTypes from "prop-types";

import "./Story.less";

function Story(props) {
    return (
        <div className="story">
            <div className="story__image-container">
                <img className="story__image" src={props.data.avatar} />
            </div>
            <p className="story__name">{props.data.name}</p>
        </div>
    );
};

Story.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired
};

export default Story;
