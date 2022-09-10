import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../slice/favoritesSlice";
import { BASE_URL, IMAGE_BASE_URL } from "../globals/globals";
import heart from "../images/heart.svg";

const PageFavorites = () => {
  useEffect(() => {
    document.title = "Favorites";
  }, []);

  // access store to get favorites array
  const faveItems = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Favorites</h1>
      <div className="grid-wrapper">
      {/* if faveItems exists, this renders. iterate over faveItems array to display movies */}
      {/* to check if array isn't empty, "not" faveItems >= 1 ? , but faveItems.length >= 1 ? */}
      {faveItems.length >= 1 ? (
        faveItems.map((movie, i) => (
          <div>
            <div className="poster">
              <img key={i}
                src={`${IMAGE_BASE_URL}w500${movie.poster_path}`}
                alt={`movie poster of ${movie.title}`}
              />
              <img
                onClick={() => dispatch(deleteItem(movie))}
                src={heart}
                alt="heart icon"
                className="heart-icon"
              />

              <div className="overlay">
                <div className="info">
                  <span className="rating">{movie.vote_average}</span>
                  <p className="overview">{movie.overview.slice(0, 200)}...</p>
                  <Link to="/details" state={{from: movie}}>
                    <p className="button">More Info</p>
                  </Link>
                </div>
              </div>
            </div>

            <p className="title">{movie.title}</p>
            <p className="release-date">
              <em>{movie.release_date}</em>
            </p>
          </div>
        ))
        ) : (
        // if array is empty, render this
        <p>
          Add movies to favorites by clicking ❤️ and create your own watch
          list.
        </p>
      )}
</div>
      <Link to="/">
        <p className="button">Back</p>
      </Link>
    </section>
  );
};

export default PageFavorites;
