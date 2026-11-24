import { useState, useEffect } from "react";
import { MovieGrid } from "../components/movieGrid/movieGrid";

export const Favorites = () => {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("my_favs");
    if (saved) {
      setFavMovies(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <MovieGrid movieList={favMovies} title="My Favourite Movies" />
    </div>
  );
};
