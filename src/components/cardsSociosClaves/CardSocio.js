import React from "react";
import PropTypes from "prop-types";


function CardSocio({ imageSource, title, description, url }) {
  return (
    <div className="card text-center bg-dark ">
      <img src={imageSource} className="card-img-top" />
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}

CardSocio.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default CardSocio;