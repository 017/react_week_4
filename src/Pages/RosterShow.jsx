import React from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import GitHub from '../Components/ContactInfo/GitHub';
import LinkedIn from '../Components/ContactInfo/LinkedIn';
import Steam from '../Components/ContactInfo/Steam';
import YouTube from '../Components/ContactInfo/YouTube';

import RenderSocial from '../Components/Macro/Util';

class RosterShow extends React.PureComponent {

  componentWillMount() {
    if (!this.props.user) {
      this.props.history.replace(`/`);
      return;
    }
  }

  render() {
    const { user } = this.props;
    console.log(user);

    if (!user) {
      return null;
    }

    return(
      <Container className="m-2 p-2 rounded bg-secondary text-white">
        <Row>
          <Col md={2} className="float-left rounded">
            <ul className="list-group list-group-horizontal">
              <Col className="float-left list-group-item bg-dark font-weight-bold">
                <Image src={user.avatarURL} rounded height="30em" width="30em" className="avatar" />
                <Link className="font-weight-bold ml-2 text-truncate" to={`/Roster/${user._id}`}>{user.name}</Link>
              </Col>
            </ul>
          </Col>
          <Col className="float-right rounded">
            <ul className="list-group list-group-horizontal h-100 ">
              { RenderSocial(user.linkedinURL, LinkedIn) }
              { RenderSocial(user.githubURL, GitHub) }
              { RenderSocial(user.youtubeURL, YouTube) }
              { RenderSocial(user.steamURL, Steam) }
            </ul>
          </Col>
          <Col md={2} className="float-right rounded">
            <ul className="list-group list-group-horizontal bg-secondary">
              <Col className="float-left list-group-item bg-dark font-weight-bold">
                <span className="h-100 font-weight-bold align-middle p-1 m-1">Role: {user.role}</span>
              </Col>
            </ul>
          </Col>
        </Row>
        <Row>
          <Container className="m-4 p-2 rounded bg-dark text-white">
            <Col>{user.desc}</Col>
            <Button className="btn-warning m-2"><Link to={`/notes/${user._id}/edit`}>Edit</Link></Button>
            <Button className="btn-danger m-2" onClick={ (e) => this.props.onDelete(user._id) }>Delete</Button>
          </Container>
        </Row>
      </Container>
    )
  }
}

export default RosterShow;