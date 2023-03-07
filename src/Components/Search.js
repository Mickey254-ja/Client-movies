import React, { useState } from 'react';
import './Search.css'

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchMovies = () => {
    const url = `https://mikki-movies-production.up.railway.app/search/${query}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setResults(data.results))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={searchMovies}>Search</button>

      <ul>
        {results.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
