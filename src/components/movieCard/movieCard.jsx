import { Link } from "react-router-dom";
import { useState } from "react";
export const MovieCard = ({ singleMovie }) => {
  let [isInFavorites, setIsInFavorites] = useState("Add to Favorites");

  function handleFavorites() {
    const saved = localStorage.getItem("my_favs");
    let favMovies = saved ? JSON.parse(saved) : [];

    const isIncuded = favMovies.some((movie) => movie.id === singleMovie.id);

    if (!isIncuded) {
      const updatedFavs = [...favMovies, singleMovie];
      localStorage.setItem("my_favs", JSON.stringify(updatedFavs));
      alert("Movie added to favorites!");
    } else {
      setIsInFavorites("Remove from Favorites");
      alert("Movie is already in favorites!");
    }
  }

  return (
    <article className="movie-card">
      <button
        className="movie-card-favorite"
        type="button"
        onClick={handleFavorites}
      >
        {isInFavorites}
      </button>
      <Link to={`/movie/${singleMovie.id}`} className="movie-card-poster-link">
        <img
          className="movie-card-poster"
          src={singleMovie.poster_path}
          alt={`Poster for ${singleMovie.title}`}
        />
      </Link>
      <Link to={`/movie/${singleMovie.id}`} className="movie-card-info-link">
        <div className="movie-card-info">
          <h2 className="movie-card-title">{singleMovie.title}</h2>
          <div className="movie-card-meta">
            <time dateTime={singleMovie.release_date}>
              {singleMovie.release_date}
            </time>
            <span className="movie-card-rating">
              Rating {singleMovie.vote_average}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};
