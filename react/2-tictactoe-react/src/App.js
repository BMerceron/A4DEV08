import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // MODEL
    this.state = {
      turn : "X",
      plays : ["","","","","","","","",""]
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  // VIEW
  render() {
    return (
      <span id="board" onClick={this.handleClick} >
        <div>{this.state.plays[0]}</div>
        <div>{this.state.plays[1]}</div>
        <div>{this.state.plays[2]}</div>
        <div>{this.state.plays[3]}</div>
        <div>{this.state.plays[4]}</div>
        <div>{this.state.plays[5]}</div>
        <div>{this.state.plays[6]}</div>
        <div>{this.state.plays[7]}</div>
        <div>{this.state.plays[8]}</div>
      </span>
    );
  }
  // CTRL
  handleClick = (event) => {
    console.log(this);
    var board = event.target.parentNode;
    var ii = Array.from(board.children).indexOf(event.target);
    this.state.plays[ii] = this.state.turn = (this.state.turn === "X" ? "O" : "X");
    this.setState(this.state);
    let wincombos = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
    for ( let combo of wincombos ) {
      if (
        board.children[combo[0]].textContent === 
        board.children[combo[1]].textContent &&
        board.children[combo[1]].textContent ===
        board.children[combo[2]].textContent &&
        board.children[combo[2]].textContent !== "" ) {
        alert("win");
        break;
      }
    }
  }
}

export default App;
