// import { useParams } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../globals/globals";
import { addItem, deleteItem } from "../slice/favoritesSlice";
import { useEffect } from "react";
import star from "../images/star.svg";
import heart from "../images/heart.svg"
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  //   const { id } = useParams();
  useEffect(() => {
    document.title = "Movie Details";
  }, []);

  const location = useLocation();
  const { from } = location.state;

  const faveItems = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();
  function inCart(id, arr) {
    return arr.some((item) => item.id === id);
  }
  
  return (
    <section className="page-wrapper">
      <h1>Movie Details</h1>
      <div id="individual-wrapper">
        <div id="details-img">
          <img
            src={`${IMAGE_BASE_URL}w500${from.poster_path}`}
            alt={`movie poster of ${from.title}`}
          />
          <img onClick={() => {
                        inCart(from.id, faveItems) ? dispatch(deleteItem(from)):
                        dispatch(addItem(from));
                      }
                      }
                      src={heart} alt="heart icon" className="heart-icon" id="heart-details"
                      />
        </div>
        <div id="details">
          <p className="title">{from.title}</p>
          <p>Release Date</p>
          <p className="release-date">{from.release_date}</p>
          {/* rating in star icon */}
          <div className="rating-container">
            <img src={star} alt="star icon" className="star-icon" />
            <p className="rating">{from.vote_average}</p>
          </div>

            

          {/* convert id to letters. how? */}
          <p>Genres</p>
          <p className="genres">{from.genre_ids}</p>
          <p>Overview</p>
          <p className="tagline">{from.tagline}</p>
          <p className="overview">{from.overview}</p>
          
        </div>
      </div>
        <Link to="/">
            <p className="button">Back</p>
          </Link>
    </section>
  );
};

export default Details;
