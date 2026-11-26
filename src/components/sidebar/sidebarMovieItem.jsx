import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";

export const SidebarMovieItem = ({ movie, progress }) => {
  function addTofavorite(e) {
    e.preventDefault();
    alert("added");
  }
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
          <span className="sidebar-item-favorite" type="button">
            <HeartOutlined onClick={addTofavorite} />
          </span>
        </div>
      </Link>
    </li>
  );
};
