import React from "react";
import "../Styles/Home.css";
import Row from "./Row";

const Movies = ({ fetchUrl }) => {
  return (
    <div className="home">
      <div className="home_container">
        <Row fetchUrl={fetchUrl} />
      </div>
    </div>
  );
};

export default Movies;
