import React from 'react';
import { Link } from "react-router-dom";

// React-Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class RosterForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        role: '',
        desc: '',
        avatarURL: '',
        linkedinURL: '',
        githubURL: '',
        youtubeURL: '',
        steamURL: '',
        createdAt: null,
        updatedAt: null
      },
      saving: false
    }
  }

  async handleSave() {
    this.setState({ saving: true });

    const result = await this.props.onSave({ ...this.state.user });

    this.props.history.replace(`/roster/${ result.id }`)
  }

  updateValue(e) {
    const { ...user } = this.state;

    this.setState({ user: { ...user, [e.target.name]: e.target.value }});
  }

  render() {
    const { ...user } = this.state;

    return(
      <React.Fragment>
        <h3 className="m-2 p-2 text-white">New Roster Entry</h3>
        <Form className="m-2 p-2 rounded bg-dark text-white" onSubmit={(e) => { e.preventDefault(); this.handleSave(); }}>
          <Form.Group className="m-2 p-2 rounded bg-secondary text-white">
            <Form.Label>Username</Form.Label>
            <Form.Control value={user.name} type="text" placeholder='Placeholder' onChange={e => this.updateValue(e)} required />
          </Form.Group>
          <Form.Group className="m-2 p-2 rounded bg-secondary text-white">
            <Form.Label>Avatar URL</Form.Label>
            <Form.Control value={user.avatarURL} type="text" placeholder='Enter a URL to an image' onChange={e => this.updateValue(e)} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid URL for the avatar.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2 p-2 rounded bg-secondary text-white">
            <Form.Label>LinkedIn URL</Form.Label>
            <Form.Control value={user.linkedinURL} type="text" placeholder='linkedin profile URL' onChange={e => this.updateValue(e)} />
          </Form.Group>
          <Form.Group className="m-2 p-2 rounded bg-secondary text-white">
            <Form.Label>Github URL</Form.Label>
            <Form.Control value={user.githubURL} type="text" placeholder='github profile URL' onChange={e => this.updateValue(e)} />
          </Form.Group>
          <Form.Group className="m-2 p-2 rounded bg-secondary text-white">
            <Form.Label>Youtube URL</Form.Label>
            <Form.Control value={user.youtubeURL} type="text" placeholder='youtube profile URL' onChange={e => this.updateValue(e)} />
          </Form.Group>
          <Form.Group className="m-2 p-2 rounded bg-secondary text-white">
            <Form.Label>Steam URL</Form.Label>
            <Form.Control value={user.steamURL} type="text" placeholder='steam community profile URL' onChange={e => this.updateValue(e)} />
          </Form.Group>
          <Form.Group className="m-2 p-2 rounded bg-secondary text-white">
            <Form.Label>Role</Form.Label>
            <Form.Control value={user.role} as='select' defaultValue="Choose..." onChange={e => this.updateValue(e)} required>
              <option>Choose...</option>
              <option>Tester</option>
              <option>Voice Actor</option>
              <option>Designer</option>
              <option>Artist</option>
              <option>Programmer</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="m-2 p-2 rounded bg-secondary text-white">
            <Form.Label>Description</Form.Label>
            <Form.Control value={user.desc} as='textarea' defaultValue="Describe the user." rows={3} onChange={e => this.updateValue(e)} />
          </Form.Group>
          <Button type="submit">Submit form</Button>
          <Link to="/roster" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
      </React.Fragment>
    );
  }
}

export default RosterForm;