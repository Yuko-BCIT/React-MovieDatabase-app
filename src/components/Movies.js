import { useState, useEffect } from "react";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    	const fetchMovie = async () => {
            // fetch "now playing" movie data from API
            const res = await fetch(`${BASE_URL}now_playing?api_key=${API_KEY}&language=en-US&page=1`
            );

  		let data = await res.json();
  		console.log(data);
  		setMovies(data);
  	  }

  	  fetchMovie();

  


    return(
        <div>
            {movies.map((movie, i) => {
                return <img key={i} />
            })}
        </div>
    );
};

export default Movies;