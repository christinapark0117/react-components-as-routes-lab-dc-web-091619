import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>

      {movies.map(movie =>
        <div>
          <h2>Title: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          {movie.genres.map(genre =>
            <ul>
              <li>{genre}</li>
            </ul>
          )}
          <p>Metascore: {movie.metascore}</p>
        </div>

      )}

    </div>
  );
};

export default Movies;
