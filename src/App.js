// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Nav
import Navigation from './Components/Macro/Navigation';

// Page Imports
import Home from './Pages/Home';
import Roster from './Pages/Roster';
import RosterShow from './Pages/RosterShow';
import RosterForm from './Pages/RosterForm';
import RosterEdit from './Pages/RosterEdit';
import About from './Pages/About';

import DB from './db';

// UUID Generation
// import { v4 as uuid } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);

    let db = new DB('dev_site');

    this.state = {
      db,
      users: [],
      articles: [],
      loading: true
    };
  }

  async componentDidMount() {
    const users = await this.state.db.getAllRosterEntries();

    this.setState({
      users,
      loading: false
    });
  }

  // articles,

  async handleSave(user, method) {
    let result = await this.state.db[method](user);

    let { users } = this.state;

    user._id = result.id;
    user._rev = result.rev;

    this.setState({
      users: { ...users, [result.id]: user }
    });

    return result;
  }

  async handleDelete(id) {
    let { users } = this.state;
    let user = users[id];

    if (users[id] && window.confirm(`Are you sure you want to delete this user?`)) {
      await this.state.db.deleteRosterEntry(user);

      delete users[id];

      this.setState({ users });
    }
  }

  renderContent() {
    if (this.state.loading) {
      return(
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    console.log(this.state.users);

    return(
      <React.Fragment>
        <Route exact path='/home' component={(props) => (
          <Home {...props} news={this.state.articles} />
        )} />
        <Route exact path='/roster' component={(props) => <Roster {...props} users={this.state.users} /> } />
        <Route exact path='/roster/:id' component={(props) => (
          <RosterShow {...props} user={this.state.users[props.match.params.id]} onDelete={id => this.handleDelete(id) } />
        )} />
        <Route exact path='/roster/:id/edit' component={(props) => (
          <RosterEdit {...props} user={this.state.users[props.match.params.id]} onSave={user => this.handleSave(user, 'updateRosterEntry') } />
        )} />
        <Route exact path='/rosterform' component={(props) =>(
          <RosterForm {...props} onSave={user => this.handleSave(user, `createRosterEntry`)} />
        )} /> 
        <Route path='/about' component={About} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <Container>
        <BrowserRouter>
          <div>
            <Navigation />
            { this.renderContent() }
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;


// state = {
//   users: {
//     1: {
//       _id: '1',
//       username: "Test",
//       role: "Tester",
//       desc: "Test User",
//       updatedAt: new Date()
//     }
//   },
//   articles: {
//     1: {
//       _id: '1',
//       title: 'Title Test',
//       text: 'Example Text!',
//       author: 'Nobody',
//       updatedAt: new Date()
//     }
//   }
// }