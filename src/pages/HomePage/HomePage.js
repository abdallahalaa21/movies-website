import React from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../../helpers/FetchData';
import styles from './HomePage.module.scss';
import noPoster from '../../images/sorry_poster.png';

const HomePage = () => {
  const movies = fetchData(
    ' https://api.themoviedb.org/3/discover/movie?api_key=035a59139d59fed01d09f51bd2dfa98b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.lte=2020',
    []
  );
  return (
    <div className={styles.posters}>
      {movies &&
        movies.results &&
        movies.results.map(movie => (
          <Link key={movie.id} to={`/${movie.id}`} href={`/${movie.id}`}>
            <img
              className={styles.poster}
              src={
                movie.poster_path
                  ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : noPoster
              }
              alt={movie.title}
            />
          </Link>
        ))}
    </div>
  );
};

export default HomePage;
