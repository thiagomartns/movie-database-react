import React from 'react'

const MovieCard = ({ topMovies, url }) => {
  return (
    <>
      {topMovies &&
          topMovies.map((movie, index) => {
            return (
              <div className="movie-card" key={index}>
                <div className="img-container">
                  <img src={url + movie.poster_path} alt="" />
                </div>
                <div className="info">
                  <h1 className="title">{movie.title}</h1>
                  <h2 className="rating">{movie.vote_average}</h2>
                </div>
              </div>
            )
          })
        }
    </>
  )
}

export default MovieCard