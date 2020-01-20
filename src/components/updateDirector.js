import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'


class UpdateDirector extends Component{
    constructor(props){
        super(props);
        this.state={
            director:'',
        }
    }
    async componentDidMount() {
        await fetch(`http://localhost:8000/api/directors/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({director:data.director});
                console.log(this.state)
            })
    }
    
    
    changeHandler=(e) => {
        console.log(e.target.value);
        // console.log(this.props.match.params.id)
        this.setState({[e.target.name]:e.target.value})
    }
    
    onSubmit = async (e) =>{
        e.preventDefault();
        // console.log(this.state.director);
        const directorName=this.state;
        console.log(e.target.parentNode);
        const url = `http://localhost:8000/api/directors/${this.props.match.params.id}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(directorName),
        })
        .then(res =>{
            if(res.ok){
                alert('director has been added to the list')
            }
        })
        .then(backToDirectorsPage => {
            this.props.history.push("/directors/");
        })
        
            
    }
    

    render(){
        // const {director} = this.state
        return (
            <div className='addDirectorContainer'>
                <h3><u>update Director</u></h3>
                <form onSubmit={this.onSubmit}>
                    <input type='text' 
                    className='addNewDirector' 
                    placeholder ='Update director' 
                    name="director"
                    value={this.state.director}
                    onChange ={this.changeHandler}
                    defaultValue={this.state}
                    />
                    <button type='submit' className='addBtnDirectorAndMovies' >update</button>
                    
                </form>
                
            </div>
        );
    }
}

export default UpdateDirector;