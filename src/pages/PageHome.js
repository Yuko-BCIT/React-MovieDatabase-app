import { useEffect, useState } from "react";
import { API_KEY, BASE_URL, IMAGE_BASE_URL, LANGUAGE } from "../globals/globals";
import { Link } from "react-router-dom";
import film from "../images/film.jpg";

const PageHome = () => {
  useEffect(() => {
      document.title = "Home";
    }, []);
    // display movies
     const [movies, setMovies] = useState(false);
    //  set initial filter as Now Playing, then change state by user's choice
     const [filter, setFilter] = useState('now_playing');

    useEffect(() => {
      const fetchMovies = async () => {
        // this gives you details of movies by the chosen filter(default Now Playing), take the returned result and use that info to show title etc.
          const res = await fetch(`${BASE_URL}${filter}?api_key=${API_KEY}${LANGUAGE}`);

          let data = await res.json();
          setMovies(data);
        }
        fetchMovies();
    },[filter]);
// [] fetches data only once, so put [filter] in order to fetch data everytime user changes the filter(onClick)

return (
    <section>
      <h1 id="home">Home</h1>
      <img id="hero-image" src={film} alt="movie film roll" />
      <h2>Show movies by</h2>

      <div id="selections">
        {/* onClick changes the filter and fetches new data from API */}
        {/* if filter is set and active, you can set background color on className="category by .category.active {background-color: purple;}" */}
        <p className={`category ${filter === 'now_playing' && 'active'}`} onClick={ () => {setFilter('now_playing')}}>Now Playing</p>
        <p className={`category ${filter === 'popular' && 'active'}`} onClick={ () => {setFilter('popular')}}>Popular</p>
        <p className={`category ${filter === 'upcoming' && 'active'}`} onClick={ () => {setFilter('upcoming')}}>Upcoming</p>
        <p className={`category ${filter === 'top_rated' && 'active'}`} onClick={ () => {setFilter('top_rated')}}>Top Rated</p>

      </div>
      {/* display movies from API fetch */}
      <div className="grid-wrapper">
        {/* limits movies to 12 */}
          {movies && movies.results.slice(0,12).map((movie, i) => 
                  <div>
                    <div className="poster">
                      <img key={i} src={`${IMAGE_BASE_URL}w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`} />
                            {/* overlay hover effect */}
                          <div className="overlay">
                            <div className="info">
                              <span className="rating">{movie.vote_average}</span>
                              <p className="overview">{movie.overview.slice(0, 200)}...</p> {/* limit overviews to 200 letters  */}
                              <Link to="/details" state={{from: movie}}><p className="button">More Info</p></Link>
                            </div>
                          </div>
                    </div>

                    <p className="title">{movie.title}</p>
                    <p className="release-date"><em>{movie.release_date}</em></p>
                  </div>
          )}

      </div> 
      <Link to="/"><p className="button">Top</p></Link>
    </section>
);
  
};

export default PageHome;
