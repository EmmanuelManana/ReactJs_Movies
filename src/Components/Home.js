import React from "react";
import "../Styles/Home.css";
import MovieCard from "./MovieCard";
import Row from "./Row";
import requests from "../Request/request";

const Home = ({ title, fetchUrl }) => {
  return (
    <div className="home">
      <div className="home_container">
        <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      </div>
    </div>
  );
};

export default Home;
