import React from "react";
import "./Explore.css";

const Explore = ({ movie }) => {
  return (
    <section className="explore">
      <h2 className="explore-title">Explore</h2>
      <p className="explore-subtitle">What are you gonna watch today?</p>
      <div className="explore-card">
        <img
          src={movie.image || "./placeholder.png"} // Hiển thị ảnh hoặc placeholder
          alt={movie.movieName}
          className="explore-image"
        />
        <div className="explore-content">
          <h3 className="explore-movie-title">{movie.movieName}</h3>
          <p className="explore-description">{movie.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Explore;
