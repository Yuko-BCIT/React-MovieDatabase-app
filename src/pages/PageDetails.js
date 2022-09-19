import { useLocation, Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../globals/globals";
import { useEffect } from "react";
import star from "../images/star.svg";
import poster from "../images/poster.jpg";

const Details = () => {
  useEffect(() => {
    document.title = "Movie Details";
  }, []);

  const location = useLocation();
  const { from } = location.state;

  return (
    <section className="page-wrapper" id="page-details">
      <h1>Movie Details</h1>
      <div id="individual-wrapper">
        <div id="details-img">
          {from.poster_path === null ? (
            <img src={poster} alt="french bulldog" />
          ) : (
            <img
              src={`${IMAGE_BASE_URL}w500${from.poster_path}`}
              alt={`movie poster of ${from.title}`}
            />
          )}
        </div>
        <div id="details">
          <p className="title">{from.title}</p>
          <p className="release-date">{from.release_date}</p>
          
          {/* rating in star icon */}
          <div className="rating-container">
            <img src={star} alt="star icon" className="star-icon" />
            <p className="rating">{from.vote_average}</p>
          </div>

          <p>Overview</p>
          <p className="overview">{from.overview}</p>
        </div>
      </div>
      <Link to="/">
        <p className="button button-special">Back</p>
      </Link>
    </section>
  );
};

export default Details;
