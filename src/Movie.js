import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from './api';

class Movie extends Component{

    constructor(props){
        super(props);

        this.state = {
            info: null,
        };
    }

    traerInfo(){
        const id = this.props.match.params.movieId;
        api.getById(id, (infoRecibida) => {
            console.log(infoRecibida);
            this.setState({ info: infoRecibida });
        });
    }

    render(){
        const id = this.props.match.params.movieId;
        if(this.state.info === null || this.state.info.id != id){
            this.traerInfo();
        }

        if(this.state.info == null){
            return <p>Cargando...</p>
        }

        return <div>
            <h1>{this.state.info.title}</h1>

            <Link to="/pelicula/13">Ir a otra</Link>
        </div>;
    }
}

export default Movie;