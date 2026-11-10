import { movies } from "../../data/movies";
import { MovieCard } from "../movieCard/movieCard";

export const MovieGrid = () => {
  return (
    <section className="movie-library">
      <h1 className="movie-library-title">View All Movies</h1>
      <div className="movie-grid">
        {movies.map((item) => (
          <MovieCard key={item.id} singleMovie={item} />
        ))}
      </div>
    </section>
  );
};
