import React, { useState, useEffect } from "react";
import { getMovies } from "../API/request";
import "../Styles/Row.css";
import MovieCard from "./MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useStateValue } from "../State/StateProvider";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPages] = useState(1);
  // const [stateMovies, dispatch] = useStateValue();

  useEffect(() => {
    async function fetchData() {
      const fetchMovies = await getMovies(fetchUrl, page);
      setMovies((prev) => [...prev, ...fetchMovies]);
      // setMovies(fetchMovies)
    }
    fetchData();
  }, [page, fetchUrl]);

  // const fetchMovieId = () => {

  //     dispatch({
  //       // trigger the FETCH_MOVIE_ID action
  //       type: "FETCH_MOVIE_ID",
  //       stateMovies: movies,
  //     });

  // };

  const fetchMoreData = (event) => {
    setPages((prev) => prev + 1);
  };

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="rows">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            rating={movie.vote_average * 10}
            title={movie.original_title}
            image={`${base_url}${movie.poster_path}`}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Row;
