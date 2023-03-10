// import React, { useState } from 'react'

// export default function AddMovie() {
//   const [title, setTitle] = useState('')
//   const [year, setYear] = useState('')
//   const [director, setDirector] = useState('')
//   const [description, setDescription] = useState('')

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     // TODO: Submit the form data to the server to add a new movie
//     console.log('New movie submitted:', { title, year, director, description })
//   }

//   return (
//     <div>
//       <h2>Add a New Movie</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </div>
//         <div>
//           <label>Year:</label>
//           <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
//         </div>
//         <div>
//           <label>Director:</label>
//           <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

const addMovie = async (title, genre, year, rating, userId, imageUrl) => {
  const url = `https://mikki-movies-production.up.railway.app/newmovie/${userId}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      genre,
      year,
      rating,
      user_id: userId,
      image_url: imageUrl,
    }),
  });
  const data = await response.json();
  if (response.ok) {
    console.log('Movie added successfully:', data);
  } else {
    console.error('Failed to add movie:', data);
  }
};
