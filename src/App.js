import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import api from './api';
import Results from './Results';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      page: 0,
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

        {this.state.page === 0 && <Results onMovieClick={(id) => this.setState({ page: 1 })} movies={this.state.results} />}
              
        {this.state.page === 1 && <h1>Página 1</h1>}

      </div>
    );
  }
}

export default App;
