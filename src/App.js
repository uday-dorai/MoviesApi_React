import React, { Component } from 'react';
import './App.css';
import HeaderTag from './components/header.js';
import DirectorsPage from './components/directorsPage.js';
import MoviesPage from './components/moviesPage.js';
import About from './components/about.js'

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
            <Route path ="/directors" component ={DirectorsPage}/>
            <Route path ="/movies" component ={MoviesPage}/>
          </Switch>
          
          
          {/* <Directors director={this.state.director}/> */}
        </div>
      </Router>
    );
  }

}


export default App;
