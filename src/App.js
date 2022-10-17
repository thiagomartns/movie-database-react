import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

const moviesURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'api_key=71059a79f76b6567e98ec1b3fce847c3'
const imgUrl = 'https://image.tmdb.org/t/p/w200/'

function App() {

  const [topRatedMovies, setTopRatedMovies] = useState([])

  const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    setTopRatedMovies(data.results);
  }

  useEffect(() => {
    
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    
    getMovies(topRatedUrl)

  }, [])

  return (
    <div className="app-container">
      <nav className="menu-nav">
        <div className="searchbar">
          <input type="text" placeholder="Search" />
        </div>
      </nav>
      <main className="feed">
        <div className="feed-container">
          <MovieCard topMovies={topRatedMovies} url={imgUrl}/>
        </div>
      </main>
    </div>
  );
}

export default App;
