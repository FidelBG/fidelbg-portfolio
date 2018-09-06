import React, { Component } from 'react';
import './App.css';
import  Navbarr from'./navbar.js';
import  Jumbotronn from'./jumbo.js';
import  Stack from'./stack.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap';


class App extends Component {
 
  render() {
    return (
      
      <div className="App">
      <Navbarr/>

   
        <main className="App-intro">
  <Router>
  <Switch>
    <Route exact path="/" component={Jumbotronn} />
    
  
  
 
    <Route exact path="/stack" component={Stack} />
  
  </Switch>
  </Router>
    </main>
      </div>
    );
  }
}

export default App;
