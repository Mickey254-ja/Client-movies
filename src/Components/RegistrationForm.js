import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:9292/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      });
      if (response.ok) {
        // Success! User was created.
        console.log('User was created successfully');
      } else {
        // Oops! Something went wrong. Handle the error.
        console.log('Failed to create user');
      }
    } catch (error) {
      console.log('Error occurred while creating user', error);
    }
  };

  return (
    <div className="reg">
      <div className="text-center m-5-auto">
        <h2 className="join">Sign-In here!</h2>
        <h5 className="create">Create your personal account</h5>
        <form className="form-f" onSubmit={handleSubmit} action="/home">
          <p>
            <label>Username</label><br/>
            <input type="text" name="username" required value={username} onChange={(event) => setUsername(event.target.value)} />
          </p>
          <p>
            <label>Email address</label><br/>
            <input type="email" name="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
          </p>
          <p>
            <label>Password</label><br/>
            <input type="password" name="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
          </p>
          <p>
            <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
          </p>
          <p>
            <button id="sub_btn" type="submit">Register
            <p>Click Once!</p>
            </button>
            <p>Click below to log in!</p>
            
          </p>
        </form>
        <footer>
          <p className="footer"><Link to="/">Back to Homepage</Link>.</p>
        </footer>
      </div>
    </div>
  );
};






