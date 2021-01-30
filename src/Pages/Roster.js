import React from 'react';
import { Link } from "react-router-dom";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import RosterList from '../Components/RosterList';

class Roster extends React.PureComponent {
  constructor(props) {
      super(props);

      let users = Object.values(props.users);
      users.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

      this.state = { users };
  }

  render() {
    let { users } = this.state;

    if (!users.length) {
      return(
        <Jumbotron fluid className='bg-dark text-white rounded m-2 p-2'> 
          <Container>
            <h1>Roster List</h1>
            <p>
              There are currently no entries in the roster list. Please add some.
            </p>
            <hr />
            <p><Link to='/rosterform' className="btn m-2 mx-auto">New Entry</Link></p>
          </Container>
        </Jumbotron>
      );
    }
    
    return(
      <React.Fragment>
        <Container className="d-flex justify-content-end">
            <Link to='/rosterform' className="btn-primary rounded text-white m-2 p-2 mx-auto">New Entry</Link>
        </Container>
        <ListGroup className="m-2 p-2 rounded text-white">
          <RosterList users={this.state.users} />
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default Roster;