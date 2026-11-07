import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">MoviesApp</div>
      <nav className="header-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};
