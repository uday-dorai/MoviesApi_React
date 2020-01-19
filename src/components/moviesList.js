import React, { Component } from 'react';

class Movieslist extends Component {
    
    render() {
        return (
            <div className='moviesBlock' position={this.props.list.Rank}>
                <div className= 'moviesDiv'>
                    <p>Rank: {this.props.list.Rank}</p>
                    <p>Title : {this.props.list.Title}</p>
                    <p>Description : {this.props.list.Description}</p>
                    <p>Director : {this.props.list.Director}</p>
                    <p>Genre : {this.props.list.Genre}</p>
                    <p>Year : {this.props.list.Year}</p>   
                    <p>Gross_Earning_in_Mil : {this.props.list.Gross_Earning_in_Mil}</p>
                    <p>Metascore : {this.props.list.Metascore}</p>
                    <p>Rating : {this.props.list.Rating}</p>
                    <p>Runtime : {this.props.list.Runtime}</p>
                    <p>Votes : {this.props.list.Votes}</p>
                    <button onClick={this.delete}>Update</button>
                    <button onClick={this.props.delete}>Delete</button>
                         
                </div>
            </div>

        );

    }
}

export default Movieslist