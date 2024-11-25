import React from "react";
import "./NewRelease.css";

const NewRelease = ({ animeList, onSelectMovie, currentMovieId }) => {
  // Lọc ra những bộ phim không phải là phim hiện tại (id trùng với currentMovieId)
  const filteredAnimeList = animeList.filter(
    (anime) => anime.id !== currentMovieId
  );

  return (
    <section className="new-release">
      <h2 className="new-release-title">New Release</h2>
      <div className="new-release-grid">
        {filteredAnimeList.map((anime) => (
          <div
            key={anime.id}
            className="anime-card"
            onClick={() => onSelectMovie(anime)} // Gọi hàm khi nhấn vào bộ phim
            style={{ cursor: "pointer" }}
          >
            <img
              src={anime.image || "./placeholder.png"} // Hiển thị ảnh hoặc placeholder
              alt={anime.movieName}
              className="anime-image"
            />
            <div className="anime-info">
              <p className="anime-episode">Episode: {anime.episode}</p>
              <h3 className="anime-title">{anime.movieName}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewRelease;
