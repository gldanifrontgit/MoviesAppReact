import { MovieGrid } from "../components/movieGrid/movieGrid";
import { useFavourites } from "../context/FavouritesContext.jsx";
import { movies } from "../data/movies";

export const Favorites = () => {
  const { favourites } = useFavourites();
  const favouriteMovies = movies.filter((movie) =>
    favourites.includes(movie.id),
  );

  return (
    <div>
      <MovieGrid movieList={favouriteMovies} title="My Favourite Movies" />
    </div>
  );
};
