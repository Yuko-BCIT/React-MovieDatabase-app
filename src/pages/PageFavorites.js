import { useEffect } from "react";
import { Link } from "react-router-dom";

const PageFavorites = () => {
  useEffect(() => {
    document.title = "Favorites";
  }, []);

  return (
    <section className="page-wrapper">
      <h1>Favorites</h1>
      <p>
      Add movies to favorites by clicking heart   
and create your own watch list.
      </p>
      <Link to="/">
          <p className="button">Back</p>
      </Link>
    </section>
  );
};

export default PageFavorites;
