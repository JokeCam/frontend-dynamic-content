import PropTypes from "prop-types";

import "./Card.less";

function Card(props) {
    return (
        <div className="card">
            <div className="card__info-container">
                <div className="card__avatar-container">
                    <img className="card__avatar" src={props.data.avatar} />
                </div>
                <p className="card__name">{props.data.name}</p>
            </div>
            <div className="card__image-container">
                <img className="card__image" src={props.data.image} />
            </div>
            <p className="card__likes">{props.data.likes} likes</p>
            <div className="card__caption-container">
                <p className="card__name">{props.data.name}</p>
                <p className="card__caption">{props.data.description}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.object.isRequired
};

export default Card;
