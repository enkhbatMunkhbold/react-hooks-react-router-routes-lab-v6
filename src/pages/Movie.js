import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const initialData = {
    title: '',
    time: 0,
    genres: []
  }

  const [ movie, setMovie ] = useState(initialData);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(movieData => setMovie(movieData))
    .catch(error => console.error(error))
  }, [movieId])

  const renderGenres = movie.genres.map(genre => <span key={genre}>{genre}</span>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Movie time: {movie.time}</p>
        {renderGenres}
      </main>
    </>
  );
};

export default Movie;
