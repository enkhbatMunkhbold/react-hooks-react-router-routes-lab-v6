import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [ directors, setDirectors ] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => res.json())
    .then(directorsData => setDirectors(directorsData))
    .catch(error => console.error(error))
  }, [])

  const renderDirectors = directors.map(director => {
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {renderDirectors}
      </main>
    </>
  );
};

export default Directors;
