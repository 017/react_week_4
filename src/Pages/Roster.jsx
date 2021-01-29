import React from 'react';
import { Link } from "react-router-dom";
import RosterList from '../Components/Macro/RosterList';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import history from '../history';


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
            <Button className="text-white btn-primary m-2 mx-auto"><Link to='/rosterform'>New Entry</Link></Button>
          </Container>
        </Jumbotron>
      );
    }
    
    return(
      <React.Fragment>
        <Container classname="d-flex justify-content-end">
          <Button className="text-white btn-primary m-2 mx-auto"><Link to='/rosterform'>New Entry</Link></Button>
        </Container>
        <ListGroup className="m-2 p-2 rounded bg-dark text-white">
          <RosterList users={this.state.users} />
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default Roster;

{/* <ListGroup className="m-2 p-2 float-right rounded bg-dark text-white">
</ListGroup> */}