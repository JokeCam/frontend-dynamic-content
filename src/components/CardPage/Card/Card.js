import React from 'react';
import PropTypes from 'prop-types';

import './Card.less';

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
        <div className="card__tags-container">
          {
            props.data.tags.map((tag, index) => {
              return <p className="card__tag" key={index}>#{tag}</p>;
            })
          }
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
