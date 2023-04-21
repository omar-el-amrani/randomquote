import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:"Edit <code>src/App.js</code> and save to reload."
    };
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <div  id="quote-box">
         <div id="text">
          <p >
            {this.state.value}
          </p>
          </div>
         <div id="author"></div>
         <button id="new-quote"></button>
         <a id="tweet-quote" href='#' ></a>
          
         
        </div>
      </header>
    </div>
    )
  }
}
