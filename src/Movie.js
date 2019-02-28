import React, { Component } from 'react';

class Movie extends Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.match.params.movieId);
        return <h1>Movie</h1>;
    }
}

export default Movie;