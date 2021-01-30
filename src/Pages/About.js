import React from 'react';

import ContactList from '../Components/ContactList';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return(
  <React.Fragment>
    <Container>
      <Row>
        <Col
          className="mt-2 p-2"
        >
          <Card className="mt-2 p-2 bg-dark text-white rounded">
            <Card.Img variant='top' src="http://http.cat/404/" />
            <Card.Body>
              <Card.Title>Studio Name</Card.Title>
              <Card.Text>
                Some studio text blurb about who we are and how cool we are
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2 p-2">
          <ContactList />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
  );
  
}

export default About;