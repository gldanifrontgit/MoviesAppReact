import { Link } from "react-router-dom";

export const SidebarMovieItem = ({ movie, progress }) => {
  return (
    <li>
      <Link to={`/movie/${movie.id}`} className="sidebar-item">
        <img
          className="sidebar-item-poster"
          src={movie.poster_path}
          alt={movie.title}
        />
        <div className="sidebar-item-info">
          <p className="sidebar-item-title">{movie.title}</p>

          {progress === undefined ? (
            <p className="sidebar-item-meta">
              ⭐ {movie.vote_average} · {movie.release_date.slice(0, 4)}
            </p>
          ) : (
            <>
              <div className="sidebar-progress">
                <div
                  className="sidebar-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="sidebar-item-meta">{progress}% watched</p>
            </>
          )}
        </div>
      </Link>
    </li>
  );
};
