import { useState } from "react";
import { movies } from "../../data/movies";
import { MovieCard } from "../movieCard/movieCard";

export const MovieGrid = () => {
  const [searchWord, setSearchWord] = useState("");
  function searchItem(e) {
    console.log(e.target.value);
    setSearchWord(e.target.value);
  }

  const filteredMovies = movies.filter((item) =>
    item.title.toLowerCase().startsWith(searchWord.toLowerCase()),
  );

  return (
    <section className="movie-library">
      <div className="movie-top">
        <h1 className="movie-library-title">View All Movies</h1>
        <form action="">
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
