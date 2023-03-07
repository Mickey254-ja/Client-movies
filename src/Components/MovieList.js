import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://mikki-movies-production.up.railway.app/1')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>My Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
            <p>Year: {movie.year}</p>
            <p>User ID: {movie.user_id}</p>
            <img src={movie.image_url} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
