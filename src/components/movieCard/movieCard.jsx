import { Link } from "react-router-dom";
import { useFavourites } from "../../context/FavouritesContext.jsx";

export const MovieCard = ({ singleMovie }) => {
  const { isFavourite, toggleFavourite } = useFavourites();

  return (
    <article className="movie-card">
      <button
        className="movie-card-favorite"
        type="button"
        onClick={() => toggleFavourite(singleMovie)}
      >
        {isFavourite(singleMovie)
          ? "Remove from Favorites"
          : "Add to Favorites"}
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
