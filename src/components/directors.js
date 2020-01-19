import React, {Component} from 'react';
// import DirectorsList from './components/directorsList'
import DirectorsList from './directorsList.js';



class Directors extends Component{
    
    render(){
        return this.props.director.map((name) =>(
            <DirectorsList list={name} delete={this.props.delete}/>
        ));
    }
}

export default Directors;
