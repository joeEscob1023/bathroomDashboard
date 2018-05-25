import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Nav} from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">ABCD Corp</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/ToiletInfo">
      Toilet Information
    </NavItem>
    <NavItem eventKey={2} href="/Location">
      Location
    </NavItem>
  </Nav>
</Navbar>
      </div>
    );
  }
}

export default Navigation;