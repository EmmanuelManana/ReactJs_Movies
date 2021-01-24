import React from "react";

import { Link } from "react-router-dom";
import "../Styles/MovieCard.css";
import { StyledRibbon } from "../Styles/StyledMovieCardRibbon";

const MovieCard = ({ image, title, id, rating }) => {
 
  return (
    <div className="movieCard">
      <div className="movieCard__ribbon__container">
        <StyledRibbon rating={rating}></StyledRibbon>
        <h3>{rating}</h3>
      </div>
      <Link to={"/aboutmovie/" + id}>
        <img className="image" src={image} alt={title} />
      </Link>

      <div className="movieCard__info">
        <p className="movieCard_title">
          <strong>{title}</strong>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
