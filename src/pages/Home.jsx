import React from 'react'
import MovieCard from '../components/MovieCard'

const Home = ({ topMovies, url }) => {
  return (
    <>
      <div className="app-container">
        <nav className="menu-nav">
          <div className="searchbar">
            <input type="text" placeholder="Search" />
          </div>
        </nav>
        <main className="feed">
          <h1 className="feed-container-title">
            TMDB's Favourite Movies
          </h1>
          <div className="feed-container">
            <MovieCard topMovies={topMovies} url={url}/>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home