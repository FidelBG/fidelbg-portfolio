import React, { Component } from 'react';

import './App.css';
import  Navbarr from'./navbar.js';
import  Jumbotronn from'./jumbo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
    
   <Navbarr/>
        <main className="App-intro">
      
     <Jumbotronn/> 
      
    </main>
      </div>
    );
  }
}

export default App;
