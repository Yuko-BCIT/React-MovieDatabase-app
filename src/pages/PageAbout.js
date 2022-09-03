import { useEffect } from "react";
import { Link } from "react-router-dom";

const PageAbout = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <section>
      <h1>About</h1>
      <p>
        PREVIEW is a movie database created for movie lovers. Browse movies, add
        them to favorites and check them out in the cinema or watch from the
        comfort of your own home. Enjoy!
      </p>

      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
      <Link to="/">
          <p className="button">Back</p>
      </Link>
    </section>
  );
};

export default PageAbout;
