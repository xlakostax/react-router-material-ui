import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Members from './Members';
import Member from './Member';
import Notfound from './Notfound';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';

const routing = (
  <Router>
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName = 'active' to="/">Index</NavLink>
        </li>
        <li>
          <NavLink activeClassName = 'active' to="/members">Club members</NavLink>
        </li>
      </ul>
    </nav>
    <hr />
    <main>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/members" component={Members} />
        <Route path="/members/:fullname" component = {Member}/>}/>
        <Route component={Notfound} />
      </Switch>
    </main>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
