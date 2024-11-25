import React, { useState } from "react";
import Headers from "./components/Header";
import Explore from "./components/Explore";
import NewRelease from "./components/NewRelease";
import animeData from "./data/animeData.json"; // Dữ liệu JSON
import "./App.css";

const App = () => {
  // State lưu trữ thông tin bộ phim hiện tại
  const [currentMovie, setCurrentMovie] = useState(animeData.data[0]); // Mặc định là bộ phim đầu tiên

  // Hàm xử lý khi chọn một bộ phim
  const handleSelectMovie = (movie) => {
    setCurrentMovie(movie); // Cập nhật state với bộ phim được chọn
  };

  return (
    <div>
      <Headers />
      {/* Truyền dữ liệu bộ phim hiện tại qua Props */}
      <Explore movie={currentMovie} />
      {/* Truyền danh sách anime, hàm xử lý, và id bộ phim hiện tại */}
      <NewRelease
        animeList={animeData.data}
        onSelectMovie={handleSelectMovie}
        currentMovieId={currentMovie.id} // Truyền id của bộ phim hiện tại
      />
    </div>
  );
};

export default App;
