import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewsForm() {
  return(
    <React.Fragment>
      <Form className="m-2 p-2 rounded bg-dark text-white">
        <Form.Group controlId="NewsForm.ControlSel01" className="m-2 p-2 rounded bg-secondary text-white">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder='Placeholder' />
        </Form.Group>
        <Form.Group controlId="NewsForm.formGridCategory" className="m-2 p-2 rounded bg-secondary text-white">
          <Form.Label>Category</Form.Label>
          <Form.Control as='select' defaultValue="Choose...">
            <option>Choose...</option>
            <option>DevBlog</option>
            <option>Monthly Update</option>
            <option>Game 1</option>
            <option>Game 2</option>
            <option>Announcement</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="NewsForm.ControlSel03" className="m-2 p-2 rounded bg-secondary text-white">
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" className="float-right m-2 p-2 mt-4">
          Submit
        </Button>
      </Form>

    </React.Fragment>
  );
}

export default NewsForm;