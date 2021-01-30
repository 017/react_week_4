import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import LinkedIn from './ContactInfo/LinkedIn';
import GitHub from './ContactInfo/GitHub';
import Steam from './ContactInfo/Steam';
import YouTube from './ContactInfo/YouTube';


const linkedinURL="https://www.linkedin.com/in/robeochi/";
const steamURL="https://steamcommunity.com/id/117_";
const youtubeURL="https://www.youtube.com/channel/UChzxfr2sfTFr1madezC8yMA";
const githubURL="https://github.com/017";

function ContactList() {
  return(
    <React.Fragment>
      <ListGroup className="m-2 p-2 rounded bg-secondary text-white">
        <ListGroup.Item className="m-2 p-2 rounded bg-dark text-white">
          {LinkedIn(linkedinURL) }
        </ListGroup.Item>
        <ListGroup.Item className="m-2 p-2 rounded bg-dark text-white">
          {Steam(steamURL)}
        </ListGroup.Item>
        <ListGroup.Item className="m-2 p-2 rounded bg-dark text-white">
          {YouTube(youtubeURL)}
        </ListGroup.Item>
        <ListGroup.Item className="m-2 p-2 rounded bg-dark text-white">
          {GitHub(githubURL)}
        </ListGroup.Item>
      </ListGroup>
    </React.Fragment>
  );
}

export default ContactList;