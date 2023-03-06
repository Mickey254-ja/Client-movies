// import React, { useState } from 'react';
// const MovieForm = () => {
//   const [title, setTitle] = useState('');
//   const [year, setYear] = useState('');
//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };
//   const handleYearChange = (e) => {
//     setYear(e.target.value);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&type=movie&t=${title}&y=${year}`);
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         // Handle successful response
//         // ...
//       } else {
//         // Handle failed response
//         // ...
//       }
//     } catch (error) {
//       console.error(error);
//       // Handle error
//       // ...
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" value={title} onChange={handleTitleChange} />
//       </label>
//       <label>
//         Year:
//         <input type="number" value={year} onChange={handleYearChange} />
//       </label>
//       <button type="submit">Add Movie</button>
//     </form>
//   );
// };
// export default MovieForm;

import React, { useState, useEffect } from 'react';
import './MovieForm.module.css'

function MovieForm() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [userId, setUserId] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:9292/newmovie/1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        genre,
        year,
        rating,
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="genre">Genre:</label>
      <input type="text" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />

      <label htmlFor="year">Year:</label>
      <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} />

      <label htmlFor="rating">Rating:</label>
      <input type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} />

      <label htmlFor="userId">User ID:</label>
      <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />

      <label htmlFor="imageUrl">Image URL:</label>
      <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}
export default MovieForm;