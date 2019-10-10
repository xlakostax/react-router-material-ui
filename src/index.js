import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Members from './Members';
import Member from './Member';
import Notfound from './Notfound';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';

const membersData = require('./persons.json');
const routing = (
  <Router>
    <nav> {/*The link is used to navigate the different routes on the site. But NavLink is used to add the style attributes to the active routes.*/}
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
        <Route exact path="/" component={App} /> {/*As index path is '/' and about path is '/about' slash is same in both paths so that it renders both components. To stop this behavior we need to use the 'exact' prop*/}
        <Route path="/members" component={Members} />
        <Route path="/members/name" render={props => <Member data={membersData} {...props} />}/>
        <Route component={Notfound} />
      </Switch>
    </main>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
