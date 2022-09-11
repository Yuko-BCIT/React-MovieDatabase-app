import { NavLink } from "react-router-dom";

const Nav = ({handleShowHideNav}) => {
  function closeNav(e) {
    if (window.innerWidth < 700) {
      handleShowHideNav();
    } else {
      e.target.blur();
    }
  }

  return (
    // style by onClick={} ??
    <nav className="nav" onClick={closeNav}>
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