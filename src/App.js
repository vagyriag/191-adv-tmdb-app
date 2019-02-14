import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import api from './api';

const defaultImage = 'https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Gato-Azul-Ruso-2.jpg';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      results: [],
    };
  }

  searchByTitle(search){
    if(search.length < 3) {
      this.setState({ results: [] });
      return;
    }

    api.searchByTitle(search, (info) => {
      this.setState({
        results: info.results ? info.results : []
      });
    });
  }

  render() {
    return (
      <div className="App container">

        <div className="row">
          <div className="col">

            <SearchBar
              //value="hola"
              onSearch={(value) => {
                console.log(value);
                this.searchByTitle(value);
              }}
              />

          </div>
        </div>

        <div className="row">
          {this.state.results.map((movie) => {
            let image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            return <div className="col-4">
              <MovieCard 
                key={movie.id}
                image={movie.poster_path != null ? image : defaultImage}
                title={movie.title}
                description={movie.overview}
                />
            </div>
          })}
        </div>


      </div>
    );
  }
}

export default App;
