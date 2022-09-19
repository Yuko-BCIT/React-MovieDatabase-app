import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  API_KEY,
  BASE_URL,
  IMAGE_BASE_URL,
  LANGUAGE,
} from "../globals/globals";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../slice/favoritesSlice";
import film from "../images/film.jpg";
import poster from "../images/poster.jpg";
import camera from "../images/camera.jpg";

const PageHome = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  // display movies
  const [movies, setMovies] = useState(false);

  //  set initial filter as Now Playing, then change state by user's choice
  const [filter, setFilter] = useState("popular");

  useEffect(() => {
    const fetchMovies = async () => {
      // this gives you details of movies by the chosen filter(default Now Playing), take the returned result and use that info to show title etc.
      const res = await fetch(
        `${BASE_URL}${filter}?api_key=${API_KEY}${LANGUAGE}`
      );

      let data = await res.json();

      setMovies(data);
    };
    fetchMovies();
  }, [filter]);
  // [] fetches data only once, so put [filter] in order to fetch data everytime user changes the filter(onClick)

  // access store
  const faveItems = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  function inCart(id, arr) {
    return arr.some((item) => item.id === id);
  }

  // tried to add class to fill the heart, but failed. leave it just for the record
  // function fillHeart() {
  //   const element = document.getElementsByClassName("heart-icon");
  //   element.classList.add("heart-active");
  // }
  // function emptyHeart() {
  //   const element = document.getElementsByClassName("heart-icon");
  //   element.classList.remove("heart-active");
  // }

  return (
    <section>
      <h1 id="home">Home</h1>

      <picture>
        <source srcSet={camera} media="(max-width: 700px)" />
        <img className="hero-image" src={film} alt="movie film roll" />
      </picture>

      <h2 id="top">Show movies by</h2>

      <div id="selections">
        {/* onClick changes the filter and fetches new data from API */}
        {/* if filter is set and active, you can set background color on className="category by .category.active {background-color: purple;}" */}
        <p
          className={`category ${filter === "popular" && "active"}`}
          onClick={() => {
            setFilter("popular");
          }}
        >
          Popular
        </p>
        <p
          className={`category ${filter === "now_playing" && "active"}`}
          onClick={() => {
            setFilter("now_playing");
          }}
        >
          Now Playing
        </p>
        <p
          className={`category ${filter === "upcoming" && "active"}`}
          onClick={() => {
            setFilter("upcoming");
          }}
        >
          Upcoming
        </p>
        <p
          className={`category ${filter === "top_rated" && "active"}`}
          onClick={() => {
            setFilter("top_rated");
          }}
        >
          Top Rated
        </p>
      </div>

      {/* display movies from API fetch */}
      <div className="grid-wrapper">
        {/* limits movies to 12 */}
        {movies &&
          movies.results.slice(0, 12).map((movie, i) => (
            <div>
              {/* if poster is not available, show the placeholder img, else, show the poster */}
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
                    if (inCart(movie.id, faveItems)) {
                      dispatch(deleteItem(movie));
                      e.target.classList.add("heart-active");
                      // this will add movies to favorites & unfill the heart icons
                    } else {
                      dispatch(addItem(movie));
                      e.target.classList.remove("heart-active");
                    }
                  }}
                  state={{ from: movie }}
                  className={
                    inCart(movie.id, faveItems)
                      ? "heart-icon heart-active"
                      : "heart-icon"
                  }
                  viewBox="0 0 32 29.6"
                  strokeWidth="1.8"
                >
                  <path
                    d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	                  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                  />
                </svg>

                {/* overlay hover effect */}
                <div className="overlay">
                    <p className="rating">{movie.vote_average}</p>
                  <div className="info">
                    <p className="overview">
                      {/* limits overviews to 150 letters  */}
                      {movie.overview.slice(0, 150)}...
                    </p>
                  </div>
                  <Link to="/details" state={{ from: movie }}>
                    {/* test */}
                    {/* <Link to={`/details/${movie.id}`} state={{ from: movie }}> */}

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
      <a href="#top">
        <p className="button button-special">Top</p>
      </a>
    </section>
  );
};

export default PageHome;
