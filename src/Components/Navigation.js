import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

function UserInfo() {
  return(
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="rounded-bottom" fluid>
        <Navbar.Brand>
          <Link to='/roster'>
            <FontAwesomeIcon className="fas fa-2x" icon={faAddressBook} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to='/about' className="nav-item">About</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <Link to='/rosterform' className="btn-primary text-white rounded p-2 m-2 mx-auto">New Entry</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default UserInfo;