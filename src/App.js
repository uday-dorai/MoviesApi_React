import React, { Component } from 'react';
import './App.css';
import HeaderTag from './components/header.js';
import DirectorsPage from './components/directorsPage.js';
import About from './components/about.js';
import AddNewDirector from './components/addNewDirector';
import UpdateDirector from './components/updateDirector';
import GetSingleMovie from './components/getSingleMovie';
import GetSingleDirector from './components/getSingleDirector';

import MoviesPage from './components/moviesPage.js';
import AddNewMovie from './components/addNewMovie.js';
import UpdateSingleMovie from './components/updateSingleMovie.js';



// import Directors from './components/director.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {

  

  render() {
    return (
      <Router>
        <div className='App'>
        <HeaderTag />
          <Switch>
            
            <Route path ="/" exact component ={About} />
            <Route path ="/directors" exact component ={DirectorsPage}/>
            <Route path ="/movies" exact component ={MoviesPage}/>
            <Route path="/directors/new" component={AddNewDirector} />            
            <Route path="/directors/:id/update" component={UpdateDirector} />            
            <Route path="/movies/new" component={AddNewMovie} />
            <Route path="/movies/:id/update" component={UpdateSingleMovie} />            
            <Route path="/movies/:id" component={GetSingleMovie} />            
            <Route path="/directors/:id" component={GetSingleDirector} />            


          </Switch>
          
          
          {/* <Directors director={this.state.director}/> */}
        </div>
      </Router>
    );
  }

}


export default App;
