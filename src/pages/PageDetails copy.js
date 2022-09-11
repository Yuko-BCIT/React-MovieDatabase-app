// import { useParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { BASE_URL, IMAGE_BASE_URL, API_KEY, LANGUAGE } from "../globals/globals";
import { addItem, deleteItem } from "../slice/favoritesSlice";
import { useEffect, useState } from "react";
import star from "../images/star.svg";
import heart from "../images/heart.svg"
import { useDispatch, useSelector } from "react-redux";

const Details = () => {

  
    useEffect(() => {
    document.title = "Movie Details";
  }, []);

  // fetch details on a single movie from API using the useParams {id}
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `${BASE_URL}${id}?api_key=${API_KEY}${LANGUAGE}`
      );
      let data = await res.json();
      setMovie(data);
      console.log(movie);
    };
    fetchDetails();
  }, [movie.id]);

  // setting up favorites icons
  const faveItems = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();
  function inCart(id, arr) {
    return arr.some((item) => item.id === id);
  }
  
  return (
    <section className="page-wrapper">
      <h1>Movie Details</h1>
      <div id="individual-wrapper">
        {movie && movie.results.map((details, i) => (
        <><div id="details-img">
          <img
            src={`${IMAGE_BASE_URL}w500${details.poster_path}`}
            alt={`movie poster of ${details.title}`}
          />
          <img onClick={() => {
                        inCart(details.id, faveItems) ? dispatch(deleteItem(details)):
                        dispatch(addItem(details));
                      }
                      }
                      src={heart} alt="heart icon" className="heart-icon" id="heart-details"
                      />
        </div>
        <div id="details">
          <p className="title">{details.title}</p>
          <p>Release Date</p>
          <p className="release-date">{details.release_date}</p>
          {/* rating in star icon */}
          <div className="rating-container">
            <img src={star} alt="star icon" className="star-icon" />
            <p className="rating">{details.vote_average}</p>
          </div>

          {/* convert id to letters. how? */}
          <p>Genres</p>
          <p className="genres">{details.genres}</p>
          <p>Overview</p>
          <p className="tagline">{details.tagline}</p>
          <p className="overview">{details.overview}</p>
          
        </div></>
 ))}
      </div>
        <Link to="/">
            <p className="button">Back</p>
          </Link>
    </section>
  );
};

export default Details;
