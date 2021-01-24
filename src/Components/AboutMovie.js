import "../Styles/AboutMovie.css";
import { StyledRating } from "../Styles/StyleAboutMovie";
import CircularProgress from "@material-ui/core/CircularProgress";
import { API_KEY } from "../API/request";
import React, { useEffect, useState } from "react";
// import { useStateValue } from "../State/StateProvider";
import Trello, { updateCard, customFieldsId } from "../API/trelloApi";

const base_url = "https://image.tmdb.org/t/p/original/";
const AboutMovie = (props) => {
  const [movie, setMovie] = useState({});
  // const [movieId, dispatch] = useStateValue();
  //get user input
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //when the component mounts
  useEffect(() => {
    async function fetchdata() {
      let getMovie = fetch(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}&language=en-US`,
        { method: "GET" }
      );

      try {
        await getMovie
          .then((res) => res.json())
          .then((resi) => {
            console.log("fetch", resi);
            setMovie(resi);
          });
      } catch (e) {
        console.error(e.message);
      }

    }
    fetchdata();
  }, [props.match.params.id]);

  const submitTicket = async (event) => {
    event.preventDefault();
    //create a trello board.then update it with info(custom fields)
    let result = fetch(
      `https://api.trello.com/1/cards?key=${Trello.key}&token=${Trello.token
      }&name=${name + ` ` + surname}&idList=${Trello.idList}&idBoard=${Trello.idBoard
      }&desc=${movie.original_title}`,
      { method: "POST" }
    );

    try {
      await result
        .then((res) => res.json())
        .then((data) => {

          try {
            //add name
            updateCard(data.id, Trello.key, Trello.token, customFieldsId.FirstName, surname)
            updateCard(data.id, Trello.key, Trello.token, customFieldsId.Surname, name)
            updateCard(data.id, Trello.key, Trello.token, customFieldsId.Email, email)
            updateCard(data.id, Trello.key, Trello.token, customFieldsId.PhoneNumber, phoneNumber)
            updateCard(data.id, Trello.key, Trello.token, customFieldsId.Movie, movie.original_title)
          } catch (error) {
            console.error(error.message)
          }
        });
    } catch (e) {
      console.error(e);
    }
    console.log("yey we have submitted");
  };

  const year = movie.release_date;
  const rating = movie.vote_average * 10;
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
              <h1 id="rating">
                {" "}
                <small>Rating:{"  " + rating}</small>
              </h1>
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
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="First Name"
            />
            <input
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
              type="text"
              placeholder="Surname"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email Address"
            />
            <input
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              type="number"
              placeholder="Phone Number" />
            <button onClick={submitTicket}>Get Movie</button>
          </form>
        </div>
      </div>
    );
  }
};

export default AboutMovie;
