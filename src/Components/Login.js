import React from 'react';
import { Link } from 'react-router-dom';
import './Login.module.css';

export default function Login() {
    // baseURL = https://mikki-movies-production.up.railway.app/
    return (
        <div className="text-center login-body m-5 auto">
        <div className="login-form onSubmit={handleSubmit}">
            <h2 className="title-sign">LogIn </h2>
            <form className="form" action="/home">
                <p className="paragraph">
                    <label className="labels"> email address</label><br/>
                    <input type="text" name="user_name" required />
                </p>
                <p className="paragraph">
                    <label ClassName="labels">Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p className="paragraph">
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer >
                <p className="paragraph">First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )
}
