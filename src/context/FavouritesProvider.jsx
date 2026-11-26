import { useEffect, useState } from "react";
import { FavouritesContext } from "./FavouritesContext";

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("my_favs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("my_favs", JSON.stringify(favourites));
  }, [favourites]);

  const isFavourite = (movie) => {
    return favourites.includes(movie.id);
  };

  const toggleFavourite = (movie) => {
    setFavourites((prev) => {
      if (prev.includes(movie.id)) {
        return prev.filter((id) => id !== movie.id);
      } else {
        return [...prev, movie.id];
      }
    });
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, isFavourite, toggleFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
