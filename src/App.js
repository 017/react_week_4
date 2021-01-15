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
              <Friends names={['User 1', 'User 2', 'User 3']} />
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
  return <h2>Home</h2>
}

function Friends(props) {
  const { names } = props;

  return(
    <div>
      <ul>
        {names.map((friend, index) => 
          <li key={index}>{friend}</li>
        )}
      </ul>
    </div>
  );
}

function Posts( { posts } ) {
  const match = useRouteMatch();

  const findPostById = (id) =>
    posts.filter((post) => post.id == id)[0];

  return(
    <React.Fragment>
      <h2>Posts</h2>

      {posts.map((post, index) => {
        return(
          <Alert key={index} variant='primary'>
            <Link to={`${match.url}/${post.id}`}>
              {post.title}
            </Link>
          </Alert>
        );
      })}

      <Switch>
        <Route
          path={`${match.path}/:postId`}
          render={(props) => (
            <Post 
              {...props}
              data={findPostById(props.match.params.postId)}
            />
          )}
        /> 
        <Route path={match.path}>
          <h3>Please Select a post.</h3>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

function Post(props) {
  const { data } = props;
  return (
    <Card>
      <Card.Header>{data.title}</Card.Header>
      <Card.Body>
        <Card.Subtitle>{data.date}</Card.Subtitle>
        <Card.Text>{data.content}</Card.Text>
      </Card.Body>
    </Card>
  )
}