import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkedIn from './ContactInfo/LinkedIn';
import GitHub from './ContactInfo/GitHub';
import Steam from './ContactInfo/Steam';
import YouTube from './ContactInfo/YouTube';

function ContactItems({ linkedinURL, steamURL, youtubeURL, githubURL }) {
  return(
    <React.Fragment>

      <Row>
        <Col xs={6} md={4}>
          <LinkedIn url={linkedinURL} />
        </Col>
        <Col xs={6} md={4}>
          <Steam url={steamURL} />
        </Col>
        <Col xs={6} md={4}>
          <YouTube url={youtubeURL} />
        </Col>
        <Col xs={6} md={4}>
          <Github url={githubURL} />
        </Col>
      </Row>

    </React.Fragment>
  );
}

export default ContactItems;