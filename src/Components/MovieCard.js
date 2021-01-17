import React from "react";
import "../Styles/MovieCard.css";

const MovieCard = ({image, title}) => {
  return (
    <div className="movieCard">
      <img
        src={image}
        alt={title}
      />

      <div className="movieCard__info">
        <p className="movieCard_title">
          <strong>{title}</strong>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
