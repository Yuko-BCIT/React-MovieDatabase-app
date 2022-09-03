import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    // style by onClick={} ??
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/subscribe">Subscribe</NavLink>
        </li>
        <li>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;