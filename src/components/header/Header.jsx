import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="header-logo">
        <div className="header-logo">MoviesApp</div>
      </NavLink>
      <nav className="header-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};
