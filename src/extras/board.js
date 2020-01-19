import React, { Component } from 'react'
import Square from "./square"

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     };
//   }


//     handleClick(i) {
//       // console.log(i);
//       const squares = this.state.squares.slice();
//       // console.log(squares[i]);
//       squares[i] = this.state.xIsNext ? 'X' : 'O';
//       // console.log(squares[i]);
//       this.setState({
//         squares: squares,
//         xIsNext: !this.state.xIsNext,
//       })
//       // console.log(squares)
//       calculateWinner(squares);
//     }

//     renderSquare(i) {
//       // console.log(i);
//       return (
//               <Square 
//                 value={this.state.squares[i]} 
//                 onClick={()=> this.handleClick(i)}
//               />);
//     }
//     render() {
//       const winner = calculateWinner(this.state.squares);
//       let status;
//       if (winner) {
//         status = 'Winner: ' + winner;
//       } else {
//         status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//       }

//         return (
//           <div>
//             <div className="status">{status}</div>
//             <div className="board-row">
//               {this.renderSquare(0)}
//               {this.renderSquare(1)}
//               {this.renderSquare(2)}
//             </div>
//             <div className="board-row">
//               {this.renderSquare(3)}
//               {this.renderSquare(4)}
//               {this.renderSquare(5)}
//             </div>
//             <div className="board-row">
//               {this.renderSquare(6)}
//               {this.renderSquare(7)}
//               {this.renderSquare(8)}
//             </div>
//           </div>
//         );
//       }
//     }


//     function calculateWinner(squares) {
//       const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//       ];
//       for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//           return squares[a];
//         }
//       }
//       return null;
//     }

// class Board extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares:Array(9).fill(null),
//             squaress: [5, 2, 8, 5, 8, 3, 2, 6, 3],
//             xIsNext: true,
//         };
//     }
//     handleClick(i) {
//         // console.log(i);
//         const squares = this.state.squares.slice();
//         // console.log(this.state.squaress[i]);
//         squares[i] =  this.state.squaress[i];
//         // console.log(squares[i]);
//         // squares[i]= this.state.squaress[i]
//         this.setState({
//             squares: squares,
//         })
//         console.log(calculateWinner(squares));
//     }
    

//     renderSquare(i) {
//         return (
//             <Square value={this.state.squares[i]} onClick={()=> this.handleClick(i)}/>
//         );
//     }
//     render() {
//         return (
//             <div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

// function calculateWinner(squares){
//     // console.log(squares);
//     for(let i=0;i<squares.length-1;i++){
//         console.log(squares[i])
//         for(let j=i+1;j<squares.length;j++){
//             console.log(squares[j])
//             if(squares[i] === squares[j]){
//                 return "winner";
//             }
            
//         }
//     }
// }

// export default Board;




