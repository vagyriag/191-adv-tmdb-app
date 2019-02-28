import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = function(props){
    return <div className="card">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Link to={`/pelicula/${props.id}`} className="btn btn-primary">Ver película</Link>
        </div>
    </div>;
}

export default MovieCard;