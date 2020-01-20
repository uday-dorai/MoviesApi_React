import React,{Component} from 'react';



class AddNewDirector extends Component{
    constructor(props){
        super(props);
        this.state={
            director:'',
        }
    }
    changeHandler=(e) => {
        // console.log(e.target.name)
        this.setState({[e.target.name]:e.target.value})
    }
    
    onSubmit = async (e) =>{
        e.preventDefault();
        console.log(this.state.director);
        const directorName=this.state;
        console.log(directorName);
        const url = `http://localhost:8000/api/directors`;
        await fetch(url, {
            method: 'POST',
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
        .then(backToMovies => {
            this.props.history.push("/directors/");
        })
            
    }
    

    render(){
        // const {director} = this.state
        return (
            <div className='addDirectorContainer'>
                <h1>Director Name</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='text' 
                    className='addNewDirector' 
                    placeholder ='Add director' 
                    name="director"
                    value={this.state.director}
                    onChange ={this.changeHandler}
                    />
                        
                    <button type='submit' className='addBtnDirector' >+add</button>
                    
                </form>
                
            </div>
        );
    }
}

export default AddNewDirector;