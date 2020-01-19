import React, { Component } from 'react';
import Movies from './movies.js';
// mport { Link } from 'react-router-dom';

class MoviesPage extends Component{
    state = {
        movies: [],
        status: false,
    };
    componentDidMount() {
        this.getAllMoviesList();
    }

    getAllMoviesList = () => {
        const url = 'http://localhost:8000/api/movies';
        return fetch(url,{
            method:'GET'
        })
        .then(response => response.json())
        .then(data => (this.setState({ status: true, movies: data })))
    }


    delete=(e)=>{
        console.log('are u sure');
        const id = e.target.parentElement.parentElement.getAttribute('position');
        console.log(id);
        const url = `http://localhost:8000/api/movies/${id}`;
        return fetch(url,{
            method:'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.getAllMoviesList();
        })
    }

    render() {
        // console.log(this.state.movies)
        return (
            <div>
                {/* <Link to='/'>
                    <div >home</div>
                </Link> */}
                <Movies movies={this.state.movies} delete={this.delete}/> 
            </div>
             
        );
    }
}

export default MoviesPage;
