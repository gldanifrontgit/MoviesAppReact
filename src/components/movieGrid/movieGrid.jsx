import { useState } from "react";
import { movies } from "../../data/movies";
import { MovieCard } from "../movieCard/movieCard";

export const MovieGrid = ({
  movieList = movies,
  title = "View All Movies",
}) => {
  const [searchWord, setSearchWord] = useState("");
  // const [rating, setRating] = useState(0);
  // const [releaseYear, setReleaseYear] = useState(0);
  function searchItem(e) {
    setSearchWord(e.target.value);
  }

  const normalizedSearch = searchWord.trim().toLowerCase();
  const filteredMovies = movieList.filter((item) => {
    const title = String(item?.title ?? "").toLowerCase();
    return title.includes(normalizedSearch);
  });

  return (
    <section className="movie-library">
      <div className="movie-top">
        <h1 className="movie-library-title">{title}</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            value={searchWord}
            onChange={searchItem}
            type="text"
            placeholder="Search movies..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="movie-grid">
        {filteredMovies.map((item) => (
          <MovieCard key={item.id} singleMovie={item} />
        ))}
      </div>
    </section>
  );
};
