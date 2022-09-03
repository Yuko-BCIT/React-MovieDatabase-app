// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IMAGE_BASE_URL } from "../globals/globals";
import { Link } from "react-router-dom";


const Individual = () => {
//   const { id } = useParams();

  const location = useLocation();
  const {from} = location.state;
  return (
    <section>
      <h1>Movie Details</h1>
      <div id="individual-wrapper">
        <img src={`${IMAGE_BASE_URL}w500${from.poster_path}`} alt={`movie poster of ${from.title}`} />
        <div id="details">
          <p className="title">{from.title}</p>
          <p className="release-date">{from.release_date}</p>
          <p className="rating">{from.vote_average}</p>
          <p>{from.genre_ids}</p>
          <p className="overview">{from.overview}</p>
        </div>
      </div>
      <Link to="/"><p className="button">Back</p></Link>

      {/* <p>{id}</p> */}
    </section>
  );
};

export default Individual;
