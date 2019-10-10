import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './About'
import App from './App';
import Contacts from './Contacts'
import Member from './Member';
import Members from './Members';
import NavBar from './NavBar'
import Notfound from './Notfound';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import { AppBar, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <AppBar color="primary" position="static">
      <NavBar />
    </AppBar>
    <main>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/members" component={Members} />
        <Route path="/members/:fullname" component = {Member}/>}/>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route component={Notfound} />
      </Switch>
    </main>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
