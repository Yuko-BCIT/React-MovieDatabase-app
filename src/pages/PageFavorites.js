import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../slice/favoritesSlice";
import { IMAGE_BASE_URL } from "../globals/globals";
import heart from "../images/heart.svg";
import poster from "../images/poster.jpg";

const PageFavorites = () => {
  useEffect(() => {
    document.title = "Favorites";
  }, []);

  // access store to get favorites array
  const faveItems = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <section className="page-wrapper">
      <h1>Favorites</h1>
      {/* if faveItems exists, this renders. iterate over faveItems array to display movies */}
      {/* to check if array isn't empty, "not" faveItems >= 1 ? , but faveItems.length >= 1 ? */}
      {faveItems.length >= 1 ? (
        faveItems.map((movie, i) => (
          <div className="grid-wrapper">
            <div>
              <div className="poster">
                {movie.poster_path === null ? (
                  <img src={poster} alt="french bulldog" />
                ) : (
                  <img
                    key={i}
                    src={`${IMAGE_BASE_URL}w500${movie.poster_path}`}
                    alt={`movie poster of ${movie.title}`}
                  />
                )}
                <img
                  onClick={() => dispatch(deleteItem(movie))}
                  src={heart}
                  alt="heart icon"
                  className="heart-icon"
                />

                <div className="overlay">
                  <div className="info">
                    <span className="rating">{movie.vote_average}</span>
                    <p className="overview">
                      {movie.overview.slice(0, 200)}...
                    </p>
                    <Link to="/details" state={{ from: movie }}>
                      <p className="button button-spceial">More Info</p>
                    </Link>
                  </div>
                </div>
              </div>

              <p className="title">{movie.title}</p>
              <p className="release-date">
                <em>{movie.release_date}</em>
              </p>
            </div>
          </div>
        ))
      ) : (
        // if array is empty, render this
        <p>
          Add movies to favorites and create your own watch list, by clicking &#9825; 
          to fill the empty hearts!
        </p>
      )}

      <Link to="/">
        <p className="button button-special">Back</p>
      </Link>
    </section>
  );
};

export default PageFavorites;
