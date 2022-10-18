import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import preview from "../images/preview.svg";
import { useState, useEffect } from "react";

const Header = ({ title }) => {
  const [navOpen, setNavOpen] = useState(false);

  const showHideNav = () => {
    setNavOpen(!navOpen);
  };

  const isDesktop = (e) => {
    if (e.matches) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia("min-width: 700px");
    mediaQuery.addEventListener("change", isDesktop);
    return () => mediaQuery.removeEventListener("change", isDesktop);
    // this is the cleanup function to remove the listener
  }, []);

  return (
    <header className={navOpen ? "show" : undefined}>
      <Link to="/">
        <img src={preview} alt="site logo" className="site-logo" />
        <p>
          <span id="site-title">{title}&nbsp;</span>
          <span className="subtitle">The Movie Database</span>
        </p>
      </Link>
      <button
        className="btn-main-nav"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={showHideNav}
      >
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
      </button>
      <Nav handleShowHideNav={showHideNav} />
    </header>
  );
};

export default Header;
