import React from "react";
import { Link } from "react-router-dom";
import MovieForm from "./MovieForm";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          {/* <div className="brand">
            <Link to="/">ack</Link>
          </div> */}

          <ul className="nav-links">
            {/* <li>
              <Link to="/">Back</Link>
            </li> */}

            {/* <li>
              <Link to="/watched">Watched</Link>
            </li> */}
         
            <li>
              <Link to="/movie-form" className="btn btn-main">
                AddMovie
              </Link>
            </li>
            {/* <li>
              <Link to="/search" className="btn btn-main">
                Search
              </Link>
              </li> */} 
          </ul>
        </div>
      </div>
    </header>
  );
};