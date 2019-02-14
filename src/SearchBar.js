import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (<div className="form-group">
        <label htmlFor="mainInput">Buscar</label>
        <input
          onInput={(event) => {
            this.props.onSearch(event.target.value);
          }}
          //value={this.props.value}
          type="text" 
          className="form-control" 
          id="mainInput" 
          placeholder="Ingresa tu búsqueda..." />
    </div>);
  }
}

export default SearchBar;
