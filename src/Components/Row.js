import React, { useState, useEffect } from "react";
import axios from "../Request/axios"; // import renamed default export.
import "../Styles/Row.css";
import MovieCard from "./MovieCard";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ fetchUrl }) => {
  const [movies, setmovies] = useState([]);

  //pull the information right when row loads.
  useEffect(() => {
    //effect
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results); // populate the movies array
      return request;
    }
    fetchData();

    return () => {
      // cleanup
    };
  }, [fetchUrl]); // [] = run once when the row loads. [x] = run when x changes
  console.log("get movies for the id",movies)
  return (
    <div className="rows">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          rating={movie.vote_average*10}
          title={movie.original_title}
          image={`${base_url}${movie.poster_path}`}
        ></MovieCard>
      ))}
    </div>
  );
};

export default Row;
