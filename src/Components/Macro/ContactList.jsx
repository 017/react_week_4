import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import LinkedIn from '../ContactInfo/LinkedIn';
import GitHub from '../ContactInfo/GitHub';
import Steam from '../ContactInfo/Steam';
import YouTube from '../ContactInfo/YouTube';

function ContactList({ steamURL, linkedinURL, youtubeURL, githubURL}) {
  return(
    <React.Fragment>
      <ListGroup className="m-2 p-2 rounded bg-secondary text-white">
        <ListGroup.Item className="m-2 p-2 rounded bg-dark text-white">
          <LinkedIn url={linkedinURL} />
        </ListGroup.Item>
        <ListGroup.Item className="m-2 p-2 rounded bg-dark text-white">
          <Steam url={steamURL} />
        </ListGroup.Item>
        <ListGroup.Item className="m-2 p-2 rounded bg-dark text-white">
          <YouTube url={youtubeURL} />
        </ListGroup.Item>
        <ListGroup.Item className="m-2 p-2 rounded bg-dark text-white">
          <GitHub url={githubURL} />
        </ListGroup.Item>
      </ListGroup>
    </React.Fragment>
  );
}

export default ContactList;