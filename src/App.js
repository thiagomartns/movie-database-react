import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './pages/Movie'
import Search from './pages/Search'

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
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Home topMovies={topRatedMovies} url={imgUrl}/>} />

        <Route path="movie/:id" element={<Movie />} />

        <Route path="search" element={<Search />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
