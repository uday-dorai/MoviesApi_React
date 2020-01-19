// import React from 'react';

// class nav1 extends React.Component {
//     constructor(props){
//         super(props)
//         this.state={
//             director:[],
//             status:false,
//         }
//         fetch('http://localhost:3001/users')
//             .then(res => res.json)
//             .then(json =>(this.setState({
//                 status:true,
//                 director:json,
                
//             }))
//             )
//     }
//     render(){
//         // console.log(this.state.director)
//         console.log(this.state.status)
//         if(this.state.status){
//             return (
//                 <div>
                    
//                 </div>
//             );
//         }else{
//             return(
//                 <div>
//                     loading
//                 </div>
//             );
//         }
        

//     }
// }
// export default nav1; 