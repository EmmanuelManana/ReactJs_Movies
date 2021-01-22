import React from "react";
import { useStateValue } from "../State/StateProvider";
import { Link } from "react-router-dom";
import "../Styles/MovieCard.css";
import { StyledRibbon } from "../Styles/StyledMovieCardRibbon";

const MovieCard = ({ image, title, id, rating }) => {
  const [movieId, dispatch] = useStateValue();

  console.log("this is the movieID in the state:", movieId.movieId);

  const fetchMovieId = () => {
    //dispatch movie id ito the data layer.
    console.log(`${title} is clicked, the ID is ${id}`);

    dispatch({
      // trigger the FETCH_MOVIE_ID action
      type: "FETCH_MOVIE_ID",
      movieId: id,
    });
  };
  console.log("the ID", id);

  return (
    // onClick={fetchMovieId}
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
