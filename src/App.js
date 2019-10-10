import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
    <article>
      <section>
      This is "The 27 Club".
      The members of club have invented genres, pioneered performances and musical techniques and influenced millions of people.
      Find out <Link to = "/about">about</Link> club and club <Link to = "/members">members</Link>, see how to <Link to="/contacts">join us</Link>.
      </section>
    </article>
    )
  }
}

export default App;
