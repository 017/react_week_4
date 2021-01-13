// import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'

export default function App() {
  const posts = [
    {
      id: 1,
      title: 'Post Title',
      date: '1-3-2021',
      content: 'First Post!'
    },
    {
      id: 2,
      title: 'Next Post',
      date: '1-3-2021',
      content: 'Next Post!'
    },
    {
      id: 3,
      title: 'Third Title',
      date: '1-3-2021',
      content: 'Third Post!'
    },
  ];

  return (
    <Container>
      <Router>
        <div>
          <ButtonGroup>
            <Button variant="outline-secondary">
              <Link to='/'>Home</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to='/friends'>Friends</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to='/posts'>Posts</Link>
            </Button>
          </ButtonGroup>

          <Switch>
            <Route path='/posts'>
              <Posts posts={posts} />
            </Route>
            <Route path='/friends'>
              <Friends names={['Person 1', 'Person 2', 'Person 3']} />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

function Home() {

}

function Friends(props) {
  const {names} =  props;

  return(
    <div>
      <ul>
        {names.map((friend, index) => {
          <li key={index}>{friend}</li>
        })}
      </ul>
    </div>
  );
}

function Posts( { posts } ) {
  const match = useRouteMatch();

  const findPostByID = (id) => {
    posts.filter((post) => {
      return post.id == id;
    });
  }

  return(
    <div>
      <h2>Posts</h2>

        {posts.map((post, index) => {
          return(
            <Alert key={index} variant='primary'>
              <Link to={`${match.url}/${post.id}`}>
                {post.title}
              </Link>
            </Alert>
          )

      <Switch>
      {/* path parameter /:postID */}
        <Route
        path={`${match.path}/:postID`}
        render={(props) => (
          <Post 
            {...props}
            data={findPostByID(props.match.params.postID)}
          />
        )} /> 
        <Route path={match.path}>
          <h3>Please Select a post.</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Post(props) {
  const { data } = props;
  return data == undefined ? <h1>404 post not found!</h1> : (
    <Card>
      <Card.Header>{data.title}</Card.Header>
      <Card.Body>
        <Card.Subtitle>{data.date}</Card.Subtitle>
        <Card.Text>{data.content}</Card.Text>
      </Card.Body>
    </Card>
  )
}