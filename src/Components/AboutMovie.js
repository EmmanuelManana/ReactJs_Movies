import "../Styles/AboutMovie.css";
import {StyledRating} from "../Styles/StyleAboutMovie"
import CircularProgress from "@material-ui/core/CircularProgress";

import React, { useEffect, useState } from "react";
import { useStateValue } from "../State/StateProvider";


const base_url = "https://image.tmdb.org/t/p/original/";
const AboutMovie = (props) => {
  const [movie, setMovie] = useState({});
  const [movieId, dispatch] = useStateValue();

  //when the component mounts
  useEffect(() => {
    
    async function fetchdata() {

      try{
        await fetch(
          `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=65899616460fe8c9c4719bcbb2f646dd&language=en-US`
        )
          .then((res) => res.json())
          .then((resi) => {
            console.log("fetch", resi);
            setMovie(resi);
          });
        }catch(e){
          console.error(e.message)
        }
      
      // return result;
    }
    fetchdata();

    // return () => {
    //   //cleanup
    // };
  }, [props.match.params.id]); //run once only on mount 464052

  const year = movie.release_date;
  const rating = movie.vote_average * 10
  let yearArray = [];
  let genres = [];
  if (year) {
    yearArray = year.split("-");
    console.log("this is year", yearArray[0]);

    genres = movie.genres;
  }

  if (!movie.id) {
    return <CircularProgress disableShrink />;
  } else {
    return (
      <div className="aboutMovie">
        <div className="aboutMovie_container">
          <div className="aboutMovie__left">
            <img src={`${base_url}${movie.poster_path}`} alt="" />
          </div>

          <div className="aboutMovie__right">
            <h1>
              <u>{movie.original_title} </u>
              <p>
                (<small>{yearArray[0]}</small>)
              </p>
            </h1>
            <p>{movie.tagline}</p>
            <StyledRating rating={rating}>
                <h1 id="rating"> <small>Rating:{"  "+rating}</small></h1>
            </StyledRating>
           

            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h1>Genres</h1>
            <div className="aboutMovie__right_genres">
              {genres.map((i) => (
                <p key={i.id}>{i.name},</p>
              ))}
            </div>
          </div>
        </div>

        <div className="aboutMovie__bottom">
          <form className="aboutMovie__form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Surname" />
            <input
              type="mail"
              className="Email Address"
              placeholder="Email Address"
            />
            <input type="number" placeholder="Phone Number"></input>
            <button>Get Movie</button>
          </form>
        </div>
      </div>
    );
  }
};

export default AboutMovie;
