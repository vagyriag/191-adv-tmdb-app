import * as React from 'react';
import MovieCard from './MovieCard';

const defaultImage = 'https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Gato-Azul-Ruso-2.jpg';

const Results = function(props){
    return <div className="row">
    {props.movies.map((movie) => {
      let image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      return <div onClick={() => props.onMovieClick(movie.id)} className="col-3" key={movie.id}>
        <MovieCard
          image={movie.poster_path != null ? image : defaultImage}
          title={movie.title}
          description={movie.overview}
          id={movie.id}
          />
      </div>
    })}
  </div>;
}

export default Results;