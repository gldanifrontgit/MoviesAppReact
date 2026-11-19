import { Link, useParams } from "react-router";
import { movies } from "../data/movies";
import { continueWatching } from "../data/continueWatching";

export const MoviesDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-details-empty">
        <h2>Movie not found</h2>
        <Link to="/" className="movie-details-back">
          ← Back to movies
        </Link>
      </div>
    );
  }

  const year = movie.release_date.slice(0, 4);
  const releaseDate = new Date(movie.release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const watching = continueWatching.find((item) => item.movieId === movie.id);

  return (
    <div className="movie-details">
      <Link to="/" className="movie-details-back">
        ← Back to movies
      </Link>

      <section className="movie-details-hero">
        <div
          className="movie-details-backdrop"
          style={{ backgroundImage: `url(${movie.poster_path})` }}
        />

        <div className="movie-details-content">
          <img
            className="movie-details-poster"
            src={movie.poster_path}
            alt={`Poster for ${movie.title}`}
          />

          <div className="movie-details-info">
            <h1 className="movie-details-title">
              {movie.title} <span className="movie-details-year">({year})</span>
            </h1>

            <div className="movie-details-stats">
              <span className="movie-details-rating">
                ⭐ {movie.vote_average}
                <small>/10</small>
              </span>
              <span className="movie-details-chip">📅 {releaseDate}</span>
              <span className="movie-details-chip">
                🔥 {movie.popularity} popularity
              </span>
            </div>

            <h3 className="movie-details-subtitle">Overview</h3>
            <p className="movie-details-overview">{movie.overview}</p>

            {watching && (
              <div className="movie-details-progress">
                <div className="movie-details-progress-label">
                  <span>Continue watching</span>
                  <span>{watching.progress}%</span>
                </div>
                <div className="sidebar-progress">
                  <div
                    className="sidebar-progress-bar"
                    style={{ width: `${watching.progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
