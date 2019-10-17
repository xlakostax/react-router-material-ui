import React from 'react';
import About from './About';
import Common from './Common'
import Contacts from './Contacts'
import Member from './Member';
import Members from './Members';
import Notfound from './Notfound';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  main: {
    position: "relative",
    width: "80%",
    height: "auto",
    minHeight: "80%",
    margin: "0 auto"
  }
}));

const Main = () => {
  const classes = useStyles();
  return(
    <main className = {classes.main}>
      <Switch>
        <Route exact path="/" component={Common} />
        <Route exact path="/members" component={Members} />
        <Route path="/members/:fullname" component = {Member}/>}/>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route component={Notfound} />
      </Switch>
    </main>
  )
}

export default Main;
