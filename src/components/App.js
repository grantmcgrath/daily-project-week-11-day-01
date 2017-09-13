import React, { Component } from 'react';
import '../styles/App.css';
import img from "../images/tadpole.png";

class App extends Component {
  render() {
    return (
      <div id="App" className="center container">
        <img src={img} alt="tadpole" />
        <div className="centered">
          <h1 className="title">Welcome to PollyBlog</h1>
          <h2 className="subtitle">Where it's just a PollyBlog on a console.log()</h2>
        </div>
      </div>
    );
  }
}

export default App;
