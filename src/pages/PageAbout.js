import { useEffect } from "react";
import { Link } from "react-router-dom";
import tmdb from "../images/tmdb.svg";

const PageAbout = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <section className="page-wrapper">
      <h1>About</h1>
      <p>
       <span>Preview</span> is a movie database <strong>React</strong> app created for movie lovers. Browse movies, add
        them to favorites and check them out in the cinema or watch from the
        comfort of your own home. Enjoy!
      </p>
      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
      <img src={tmdb} alt="heart icon" className="tmdb-logo" />

      <Link to="/">
          <p className="button">Back</p>
      </Link>
    </section>
  );
};

export default PageAbout;
