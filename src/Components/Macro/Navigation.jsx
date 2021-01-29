import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import About from '../../Pages/About';
import Home from '../../Pages/Home';
import Roster from '../../Pages/Roster';
import Container from 'react-bootstrap/Container';

function UserInfo() {
  return(
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="rounded-bottom" fluid>
        <Navbar.Brand>
          <Link to='/home'>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to='/roster'>Roster</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <Link to='/about'>About</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default UserInfo;