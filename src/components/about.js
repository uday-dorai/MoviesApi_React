import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class About extends Component {
    render() {
        return (
            <div className='about' >
                <Link to='/movies'>
                    <div className='homeMovies'>movies</div>
                </Link>
                <Link to='/directors'>
                    <div className='homeMovies'>directors</div>
                </Link>

            </div>
        );
    }
}

export default About;