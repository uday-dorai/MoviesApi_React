import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MoviesList from './moviesList.js';


class Movies extends Component {
    render(){
        return this.props.movies.map((name) =>(
            <MoviesList list={name} delete={this.props.delete}/>
        ));
    }
}

export default Movies;