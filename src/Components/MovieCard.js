import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ info, imgPath }) => {
  return (
    <div className={`${styles.movieCard} w-1/3 p-4`}>
      <img
        src={imgPath + info.poster_path}
        className={`${styles.poster} w-full`}
      />
      <div className={`${styles.movieDetails} p-4`}>
        <div className={`${styles.box} flex items-center justify-between mb-4`}>
          <h4 className={`${styles.title} font-bold text-lg`}>{info.title}</h4>
          <p className={`${styles.rating} font-bold text-lg`}>
            {info.vote_average}
          </p>
        </div>
        <div className={`${styles.overview}`}>
          <h1 className="font-bold text-lg mb-2">Overview</h1>
          <p className="text-gray-700">{info.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
