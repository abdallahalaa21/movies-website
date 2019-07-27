import React from 'react';
import PropTypes from 'prop-types';
import fetchData from '../../helpers/FetchData';
import noPoster from '../../images/sorry_poster.png';
import noCover from '../../images/sorry_Cover.png';

import styles from './MovieInfo.module.scss';

const MovieInfo = ({ match }) => {
  const movie = fetchData(
    `https://api.themoviedb.org/3/movie/${match.params.movieID}?api_key=035a59139d59fed01d09f51bd2dfa98b&language=en-US`,
    []
  );
  return (
    <>
      {movie && movie.id && (
        <>
          <img
            className={styles.img}
            src={
              movie.backdrop_path
                ? `http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
                : noCover
            }
            alt={movie.title}
          />
          <div className={styles.info}>
            <div className={styles.posterImg}>
              <img
                src={
                  movie.poster_path
                    ? `http://image.tmdb.org/t/p/w185${movie.poster_path}`
                    : noPoster
                }
                alt={movie.title}
              />
            </div>
            <div className={styles.description}>
              <h2>{movie.title}</h2>
              <span>
                Released at: {movie.release_date}
                {movie.homepage && (
                  <a href={movie.homepage}>Official web site</a>
                )}
                {movie.imdb_id && (
                  <a href={`https://imdb.com/title/${movie.imdb_id}`}>
                    IMDB link
                  </a>
                )}
              </span>

              <p>{movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

MovieInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object
  }).isRequired
};

export default MovieInfo;
