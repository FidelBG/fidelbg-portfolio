import React, { Component } from 'react';
import { Navbar, Nav,NavItem } from 'react-bootstrap';


 
class Navbarr extends Component {
    render() {
      return (
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Fidel Bernal</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="/stack">
        Stack
      </NavItem>
      <NavItem eventKey={2} href="/">
        Projects
      </NavItem>
     
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="https://github.com/FidelBG">
        GitHub
      </NavItem>
   
    </Nav>
  </Navbar.Collapse>
</Navbar>
      );
    }
  }
  
  export default Navbarr;

