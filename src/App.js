import React, { Component } from 'react';
import './App.css';

function Snake(props) {
  return (
    <div className="Snake"></div>
  )
}

function SnakeRow(props) {
  return (
    <div className="Snake-row"></div>
  )
}

function SnakeCol(props) {
  return (
    <div className="Snake-column"></div>
  )
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      rows:15
    }
  }

  render() {
    const rows = [];
    const columns = [];
    for (let i = 0; i < this.state.rows; i++) {
      rows.push(<SnakeRow></SnakeRow>)
      columns.push(<SnakeCol></SnakeCol>)
    }
    
    
    return (
      <div className="App">
        <div className="App-header">
          <h1>Snake</h1>
        </div>
        <div className="Snake-container">
           {rows}
           {columns}
           <Snake></Snake>
        </div>
      </div>
    );
  }
}

export default App;
