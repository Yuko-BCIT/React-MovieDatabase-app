import { useEffect, useState } from "react";
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../globals/globals";
import { Link } from "react-router-dom";
import PageIndividual from "./PageIndividual";


const PageHome = () => {
  
    useEffect(() => {
      document.title = "Home";
    }, []);

    const [nowPlaying, setNowPlaying] = useState(false);

    useEffect(() => {

      const fetchNowPlaying = async () => {
        // this gives you details of moview now playing, take the returned result and use that info to show title and stuff
          const res = await fetch(`${BASE_URL}now_playing?api_key=${API_KEY}&language=en-US&page=1`
          );

        let data = await res.json();
        setNowPlaying(data);
        }
        fetchNowPlaying();
    },[]);
  
return (
    <section>
      <h2>Page Home</h2>
      <p>Select a movie to see details.</p>
      {nowPlaying && nowPlaying.results.map((movie, i) => 
              <div>
                <img key={i} src={`${IMAGE_BASE_URL}w500${movie.poster_path}`} alt={`poster of ${movie.original_title}`} />
                <span className="rating">{movie.vote_average}</span>

                  {/* this is going to be overlay hover effect */}
                <div>
                  <p>{movie.overview.slice(0, 150)}...</p> {/* limit overviews to 100 letters  */}
                  <Link to="/movie.id" conponent={PageIndividual} state={{from: movie.id}}><p className="button">More Info</p></Link>
                </div>

                <p>{movie.original_title}<br />
                   {movie.release_date}
                </p>
              </div>
            )}
    </section>
);
  
};

export default PageHome;
