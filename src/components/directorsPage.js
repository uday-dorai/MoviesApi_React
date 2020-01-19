import React, { Component } from 'react';
import Directors from './directors.js'

class DirectorsPage extends Component {
    state = {
        director: [],
        status: false,
    };
    componentDidMount() {
        fetch('http://localhost:8000/api/directors')
            .then(response => response.json())
            .then(data => (this.setState({ status: true, director: data })))
    }

    // Delete Single Director
    delete=(e)=>{
        console.log('are u sure');
        const id = e.target.parentElement.parentElement.getAttribute('position');
        // console.log(id);
        const url = `http://localhost:8000/api/directors/${id}`;
        fetch(url)
        return fetch(url,{
            method:'DELETE'
            // headers: {
            //     Accept: "application/json",
            //     "Content-Type": "application/json",
            // }
        })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        // }).catch(error =>{
        //     console.log('error')
        // })
        this.componentDidMount();
    }


    render() {
        return (
            <div>
                <Directors director={this.state.director} delete={this.delete}/> 
            </div>
             
        );
    }
}

export default DirectorsPage;
