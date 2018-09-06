import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Jumbotron,Col, Button,Thumbnail,Grid,Row,Panel } from 'react-bootstrap';



function Stack(props) {
  
  return (
<div>   
<Grid>  
    <Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Stack</Panel.Title>
    </Panel.Heading>
    <Panel.Body>This is the stack I work </Panel.Body>
  </Panel>
  </Grid>  
<Grid>
  <Row>
  <Col sm={6} md={3}>
      <Thumbnail src="https://redash.io/assets/images/integrations/mongodb.png" alt="242x200">
        <h3>Mongo DB</h3>
        <p>NoSQL database</p>
        <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col sm={6} md={3}>
      <Thumbnail src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1489710851/express-js.png" alt="242x200">
        <h3>Express</h3>
        <p>Nodejs framework</p>
        <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col sm={6} md={3}>
      <Thumbnail src="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png" alt="242x200">
        <h3>Reactjs</h3>
        <p>Javascript framework</p>
        <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col sm={6} md={3}>
      <Thumbnail src="https://nodejs.org/static/images/logo.svg" alt="242x200">
        <h3>Nodejs</h3>
        <p>Node.js es un entorno de ejecución para JavaScript</p>
        <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
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