import logo from './logo.svg';
import './App.css';

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
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
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
  );
}

function Home() {

}

function Friends() {

}

function Posts() {
  
}