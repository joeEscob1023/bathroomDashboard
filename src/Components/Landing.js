import React, { Component } from 'react';
import {Grid, Jumbotron, Row, Col} from 'react-bootstrap';

class Test extends Component {
  render(props) {
    console.log(this.props.data)
    return (
      <div>
        <Grid>
          <Jumbotron>
            <h1>ABCD Corp Portable Restroom {this.props.data.id}</h1>
          </Jumbotron>
        </Grid>
        <Grid>
          <Row className="show-grid">
          <Col className="&lt;Col xs={12} md={8} /&gt;">
          <p>You can find information for portable restroom #{this.props.data.id} above in the tabs of the notification bar.</p>
          </Col>
          </Row>
        </Grid>
        
      </div>
    );
  }
}

export default Test;