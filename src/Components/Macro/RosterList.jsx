import React from 'react';
import { Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import GitHub from '../ContactInfo/GitHub';
import LinkedIn from '../ContactInfo/LinkedIn';
import Steam from '../ContactInfo/Steam';
import YouTube from '../ContactInfo/YouTube';

import RenderSocial from './Util';

// import dayjs from 'dayjs';

// function renderDate(updatedAt) {
//     let d = dayjs(updatedAt);
//     return d.format("MMMM D YYYY, HH:mm");
// }

//, updatedAt


const User = ({ user: { _id, name, avatarURL, role, linkedinURL, githubURL, youtubeURL, steamURL } } ) => (
  <Container className="mt-2 mb-2">
    <Row>
      <Col md={2} className="float-left rounded">
        <ul className="list-group list-group-horizontal">
          <Col className="float-left list-group-item bg-dark font-weight-bold">
            <Image src={ avatarURL } rounded height="30em" width="30em" className="avatar" />
            <Link className="font-weight-bold ml-2 text-truncate" to={`/Roster/${_id}`}>{ name }</Link>
          </Col>
        </ul>
      </Col>
      <Col className="float-right rounded">
        <ul className="list-group list-group-horizontal h-100">
          { RenderSocial(linkedinURL, LinkedIn) }
          { RenderSocial(githubURL, GitHub) }
          { RenderSocial(youtubeURL, YouTube) }
          { RenderSocial(steamURL, Steam) }
        </ul>
      </Col>
      <Col md={2} className="float-right rounded">
        <ul className="list-group list-group-horizontal bg-secondary">
          <Col className="float-left list-group-item bg-dark font-weight-bold">
            <span class="h-100 font-weight-bold align-middle p-1 m-1">Role: { role }</span>
          </Col>
        </ul>
      </Col>
    </Row>
  </Container>
);

export default ({ users }) => (
  <React.Fragment>
    {users.map(el => <User user={el} key={`user-${el._id}`} /> )}
  </React.Fragment>
);

// Add function for RosterDelete(user._id)
// delete={() => RosterDelete(user._id)}

// Add ${user.role.color} for changing user rank/name colors/styling settings in roster list/elsewhere