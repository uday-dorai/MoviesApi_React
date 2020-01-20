import React, { Component } from 'react';
import Movies from './moviesList.js';
// import AddNewMovie from './addNewMovie.js';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class MoviesPage extends Component{
    state = {
        movies: [],
    };

    async componentDidMount() {
        await fetch('http://localhost:8000/api/movies')
                .then(response => response.json())
                .then(data => (this.setState({ movies: data })))
    }


    delete = async (e)=>{
        console.log('are u sure');
        const id = e.target.parentElement.parentElement.getAttribute('position');
        console.log(id);
        const url = `http://localhost:8000/api/movies/${id}`;
        await fetch(url,{
            method:'DELETE'
            })
            .then(data => {
                // console.log(data);
                alert('movie has been deleted');
            });
            // .then(backToMoviesPage =>{
            //     this.props.history.push("/movies/");
            // })

        await this.componentDidMount();
    }

    render() {
        // console.log(this.state.movies)
        return (
            <div className='moviesAndDirectorPage'>
                {/* <Router> */}
                    <h1>Movies List</h1>
                    <Link to='/movies/new'>
                        <button className='addBtnForDirectorAndMovies'>+ add new movie to the list</button>
                    </Link>
                    <Movies movies={this.state.movies} delete={this.delete}/> 
                
            </div>
             
        );
    }
}

export default MoviesPage;
