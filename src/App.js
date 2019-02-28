import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import api from './api';
import Results from './Results';
import Movie from './Movie';


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
      <BrowserRouter>
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

          <Route path="/" exact 
            render={() => <Results movies={this.state.results} />} />
          {/*<Results movies={this.state.results} />*/}

          <Route path="/pelicula/:movieId" component={Movie} />
          

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
