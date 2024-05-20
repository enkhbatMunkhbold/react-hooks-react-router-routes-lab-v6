import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [ actors, setActors ] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(res => res.json())
    .then(actorsData => setActors(actorsData))
    .catch(error => console.error(error))
  }, [])

  const renderActors = actors.map(actor => {
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
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
        <h1>Actors Page</h1>
        {renderActors}
      </main>
    </>
  );
};

export default Actors;
