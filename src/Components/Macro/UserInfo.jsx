import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import GitHub from '../ContactInfo/GitHub';
import LinkedIn from '../ContactInfo/LinkedIn';
import Steam from '../ContactInfo/Steam';
import YouTube from '../ContactInfo/YouTube';


//import '.../App.css';

function UserInfo({ username, avatar, linkedinURL, githubURL, youtubeURL, steamURL, role, desc }) {
  return(
    <React.Fragment>
      <Container className="mt-2 p-2 text-white rounded">
        <Row>
          <Col md={2} className="float-left">
            <Image src={avatar} rounded height="40em" width="40em" className="avatar m-2" />
            {username}
          </Col>
          <Col className="float-right">
            <ul className="list-group list-group-horizontal bg-dark">
              <Col className="float-left list-group-item bg-dark">
                <LinkedIn url={linkedinURL} />
              </Col>
              <Col className="float-left list-group-item bg-dark">
                <GitHub url={githubURL} />
              </Col>
              <Col className="float-left list-group-item bg-dark">
                <YouTube url={youtubeURL} />
              </Col>
              <Col className="float-left list-group-item bg-dark">
                <Steam url={steamURL} />
              </Col>
            </ul>
          </Col>
          <Col md={2}>
            Role: {role}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default UserInfo;

