import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieForm.module.css';

function MovieForm() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [year, setYear] = useState('');
  const [userId, setUserId] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:9292/newmovie/1`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        genre,
        rating,
        year,
        user_id: userId,
        image_url: imageUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div classname="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="genre">Genre:</label>
        <input type="text" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />

        <label htmlFor="rating">Rating:</label>
        <input type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} />

        <label htmlFor="year">Year:</label>
        <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} />

        <label htmlFor="userId">User ID:</label>
        <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />

        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
      <Link to="/movie-list" className="btn btn-main"
      >View My Movies
      </Link>
    </div>
  );
}

export default MovieForm;