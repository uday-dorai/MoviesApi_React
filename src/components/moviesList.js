import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import MoviesList from './moviesList.js';


class Movies extends Component {
    render(){
        return this.props.movies.map((name) =>(
            <div className='moviesBlock' position={name.Rank}>
                <div className= 'moviesDiv'>
                    {/* <p>Rank: {name.Rank}</p> */}
                    <p>Title : {name.Title}</p>
                    <p>Description : {name.Description}</p>
                    <p>Director : {name.Director}</p>
                    <p>Genre : {name.Genre}</p>
                    <p>Year : {name.Year}</p>   
                    <p>Gross_Earning_in_Mil : {name.Gross_Earning_in_Mil}</p>
                    <p>Metascore : {name.Metascore}</p>
                    <p>Rating : {name.Rating}</p>
                    <p>Runtime : {name.Runtime}</p>
                    <p>Votes : {name.Votes}</p>
                    <p>Actor : {name.Actor}</p>
                    <Link to={'/movies/'+(name.Rank)+'/update'}>
                        <button onClick={this.props.editDirector}>Update</button>
                    </Link>
                    <button onClick={this.props.delete}>Delete</button>
                         
                </div>
            </div>
            // <MoviesList list={name} delete={this.props.delete}/>
        ));
    }
}

export default Movies;