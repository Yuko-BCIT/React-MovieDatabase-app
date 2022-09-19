import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../slice/favoritesSlice";
import { IMAGE_BASE_URL } from "../globals/globals";
import poster from "../images/poster.jpg";

const PageFavorites = () => {
  useEffect(() => {
    document.title = "Favorites";
  }, []);

  // access store to get favorites array
  const faveItems = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <section className="favorite-wrapper">
      <h1>Favorites</h1>
      {/* if faveItems exists, this renders. iterate over faveItems array to display movies */}
      {/* to check if array isn't empty, "not" faveItems >= 1, but faveItems.length >= 1 */}
      {faveItems.length >= 1 ? (
        <div className="grid-wrapper">
          {faveItems.map((movie, i) => (
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

                {/* heart icon */}
                <svg
                  onClick={(e) => {
                    // this will remove movies from favorites & fill in the heart icons
                    dispatch(deleteItem(movie));
                    e.target.classList.add("heart-active");
                  }}
                  className={"heart-icon heart-active"}
                  viewBox="0 0 32 29.6"
                  strokeWidth="1.8"
                >
                  <path
                    d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	                  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                  />
                </svg>

                <div className="overlay">
                  <div className="info">
                    <span className="rating">{movie.vote_average}</span>
                    <p className="overview">
                      {movie.overview.slice(0, 150)}...
                    </p>
                  </div>
                  <Link to="/details" state={{ from: movie }}>
                    <p className="button button-info">More Info</p>
                  </Link>
                </div>
              </div>

              <p className="title">{movie.title}</p>
              <p className="release-date">
                <em>{movie.release_date}</em>
              </p>
            </div>
          ))}
        </div>
      ) : (
        // if favorite array is empty, render this
        <p id="no-favorites">
          Add movies to favorites by clicking &#9825; and create your own watch
          list!
        </p>
      )}

      <Link to="/">
        <p className="button button-special">Back</p>
      </Link>
    </section>
  );
};

export default PageFavorites;
