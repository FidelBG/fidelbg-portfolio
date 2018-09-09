import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Jumbotron,Col, Button,Thumbnail,Grid,Row,Panel } from 'react-bootstrap';



function Stack(props) {
  
  return (
<div>   
<Grid>  
    <Panel >
    <Panel.Heading>
      <Panel.Title componentClass="h3">MERN STACK CRUD</Panel.Title>
    </Panel.Heading>
    <Panel.Body> Mern Stack CRUD is a simple CRUD app built with MongoDB,Express,React,Nodejs and deployed in Heroku</Panel.Body>
    <Panel.Body><Button bsStyle="link"href="https://github.com/FidelBG/Mern-CRUD">View code in Github</Button>        <Button bsStyle="primary" href= "https://fierce-garden-50372.herokuapp.com/">Live App</Button> </Panel.Body>
  </Panel>
  </Grid>  
<Grid>
  <Row>
  <Col sm={6} md={3}>
      <Thumbnail src="https://redash.io/assets/images/integrations/mongodb.png" alt="242x200">
        <h3>Mongo DB</h3>
        <p>NoSQL database</p>

      </Thumbnail>
    </Col>
    <Col sm={6} md={3}>
      <Thumbnail src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1489710851/express-js.png" alt="242x200">
        <h3>Express</h3>
        <p>Nodejs framework</p>

      </Thumbnail>
    </Col>
    <Col sm={6} md={3}>
      <Thumbnail src="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png" alt="242x200">
        <h3>Reactjs</h3>
        <p>Javascript framework</p>
      
      </Thumbnail>
    </Col>
    <Col sm={6} md={3}>
      <Thumbnail src="https://nodejs.org/static/images/logo.svg" alt="242x200">
        <h3>Nodejs</h3>
        <p>Node.js es un entorno de ejecución para JavaScript</p>
      
      </Thumbnail>
    </Col>
  </Row>
</Grid>
</div>  
  );
}

Stack.propTypes = {
  
};

export default Stack;