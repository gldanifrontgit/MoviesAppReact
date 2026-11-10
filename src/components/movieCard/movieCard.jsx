import { Link } from "react-router-dom";

export const MovieCard = ({ singleMovie }) => {
  return (
    <Link to={`/movies/${singleMovie.id}`} className="movie-card-link">
      <article className="movie-card">
        <img
          className="movie-card-poster"
          src={singleMovie.poster_path}
          alt={`Poster for ${singleMovie.title}`}
        />
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
      </article>
    </Link>
  );
};
