import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Directors extends Component{
    
    render(){
        return this.props.director.map((directorsData) =>(
            // const ID={directorsData.id};
            <div className='DirectorsBlock' position={directorsData.id}>
                <div className= 'DirectorUL'>
                    <p>Director : {directorsData.director}</p>
                    
                    <Link to={'/directors/'+(directorsData.id)+'/update'}>
                        <button onClick={this.props.editDirector}>Update</button>
                    </Link>
                    <button onClick={this.props.delete}>Delete</button>
                </div>
            </div>
        ));
    }
}

export default Directors;
