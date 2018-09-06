import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


class Jumbotronn extends Component {
    render() {
      return (
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is Fidel Bernal , I´m working hard to become a nomad web developer.
  </p>
  <p>
    <Button bsStyle="primary">Learn more</Button>
  </p>
</Jumbotron>
      );
    }
  }
  
  export default Jumbotronn;