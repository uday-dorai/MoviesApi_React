import React,{Component} from 'react';
import { Link } from 'react-router-dom';



class GetSingleMovie extends Component{
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
                // console.log(this.state)
            })
    }
   
    

    render(){
        return (
            <div className='addDirectorContainer'>
                <h3><u>Movie Details at ID : {this.props.match.params.id}</u></h3>

                <div className='singleMovie'>
                    <br/>
                    <p name="Title"
                    >Title : {this.state.Title}</p>

                    <p name="Description"
                    >Description : {this.state.Description}</p>

                    <p name="Director"
                    >Director : {this.state.Director}</p>

                    <p name="Genre"
                    >Genre:{this.state.Genre}</p>

                    <p name="Year"
                    >Year :{this.state.Genre}</p>
                    

                    <p name="Gross_Earning_in_Mil"
                    >Gross Earning in Mil : {this.state.Gross_Earning_in_Mil}</p>

                    <p name="Metascore">Metascore :  {this.state.Metascore}</p>

                    <p name="Rating">Rating : {this.state.Rating}</p>

                    <p name="Runtime">Runtime : {this.state.Runtime}</p>

                    <p name="Votes">Votes : {this.state.Votes}</p>

                    <p name="Actor">Actor : {this.state.Actor}</p>
                    <br/>
                    <Link to='/movies'>
                        <button className='addBtnDirector' >back</button>
                    </Link>
                    
                    
                </div>
                
            </div>
        );
    }
}

export default GetSingleMovie;


