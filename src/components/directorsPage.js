import React, { Component } from 'react';
import Directors from './directorsList.js';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import AddNewDirector from './addNewDirector'
// import UpdateDirector from './updateDirector'



class DirectorsPage extends Component {
    state = {
        director: [],
        status: false,
    };
    async componentDidMount() {
        await fetch('http://localhost:8000/api/directors')
            .then(response => response.json())
            .then(data => (this.setState({ director: data })))
    }


    // Delete Single Director
    delete = async (e) => {
        console.log('are u sure');
        const id = e.target.parentElement.parentElement.getAttribute('position');
        // console.log(id);
        const url = `http://localhost:8000/api/directors/${id}`;
        await fetch(url, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            }).catch(error => {
                console.log('error')
            })
        await this.componentDidMount();
    }
    editDirector =()=>{
        
    }
    


    render() {
        return (
                <div>
                <h1>Directors List</h1>
                <Link to='/directors/new'>
                    <button className='addBtnDirector'>+ add</button>
                </Link>
                <Directors director={this.state.director} delete={this.delete} editDirector={this.editDirector}/>
            </div> 
        );
    }
}

export default DirectorsPage;
