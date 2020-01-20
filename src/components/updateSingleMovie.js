import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import  { withRouter  } from 'react-router-dom';


class UpdateSingleMovie extends Component{
    constructor(props){
        super(props);
        this.state={
            Rank:null,
            Title:'',
            Description:'',
            Runtime:null,
            Genre:'',
            Rating:null,
            Metascore:null,
            Votes:null,
            Gross_Earning_in_Mil:null,
            Director:'',
            Actor:'',
            Year:null,
        }
    }
    async componentDidMount() {
        await fetch(`http://localhost:8000/api/movies/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    Rank:data.Rank,
                    Title:data.Title,
                    Description:data.Description,
                    Runtime:data.Runtime,
                    Genre:data.Genre,
                    Rating:data.Rating,
                    Metascore:data.Metascore,
                    Votes:data.Votes,
                    Gross_Earning_in_Mil:data.Gross_Earning_in_Mil,
                    Director:data.Director,
                    Actor:data.Actor,
                    Year:data.Year,
                });
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
        console.log(directorName)
        console.log(e.target.parentNode);
        const url = `http://localhost:8000/api/movies/${this.props.match.params.id}`;
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
                alert('movie has been added to the list')
            }
        })
        .then(backToMovies =>{
            this.props.history.push("/movies/");
        })
        
            
    }
    

    render(){
        // const {director} = this.state
        return (
            <div className='addDirectorContainer'>
                <h1>update Director</h1>
                <form onSubmit={this.onSubmit}>

                    <label>Title: </label>
                    <input name="Title"
                    type="text"
                    value={this.state.Title}
                    onChange ={this.changeHandler}></input>
                    <br/>

                    <label>Description: </label>
                    <input name="Description"
                    type="text"
                    value={this.state.Description}
                    onChange ={this.changeHandler}></input>
                    <br/>

                    <label>Director: </label>
                    <input name="Director"
                    type="text"
                    value={this.state.Director}
                    onChange ={this.changeHandler}></input>
                    <br/>

                    <label>Genre: </label>
                    <input name="Genre"
                    value={this.state.Genre}
                    onChange ={this.changeHandler}></input>
                    <br/>

                    <label>Year: </label>
                    <input name="Year"
                    type="number"
                    value={this.state.Year}
                    onChange ={this.changeHandler}></input>
                    <br/>

                    <label>Gross_Earning_in_Mil: </label>
                    <input name="Gross_Earning_in_Mil"
                    type="float"
                    value={this.state.Gross_Earning_in_Mil}
                    onChange ={this.changeHandler}></input>
                    <br/>

                    <label>Metascore: </label>
                    <input name="Metascore"
                    type="number"
                    value={this.state.Metascore}
                    onChange ={this.changeHandler}></input>
                    <br/>

                    <label>Rating: </label>
                    <input name="Rating"
                    type="float"
                    value={this.state.Rating}
                    onChange ={this.changeHandler}></input>
                    <br/>

                    <label>Runtime: </label>
                    <input name="Runtime"
                    type="number"
                    value={this.state.Runtime}
                    onChange ={this.changeHandler}></input>
                    <br/>

                    <label>Votes: </label>
                    <input name="Votes"
                    type="number"
                    value={this.state.Votes}
                    onChange ={this.changeHandler}></input>
                    <br/>

                    <label>Actor: </label>
                    <input name="Actor"
                    type="text"
                    value={this.state.Actor}
                    onChange ={this.changeHandler}></input>
                    <br/>
                    
                    <button type='submit' className='addBtnDirector' >update</button>
                    
                </form>
                
            </div>
        );
    }
}

export default withRouter(UpdateSingleMovie);