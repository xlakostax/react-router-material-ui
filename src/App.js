import React from 'react';
import About from './About';
import Common from './Common'
import Contacts from './Contacts'
import Member from './Member';
import Members from './Members';
import NavBar from './NavBar'
import Notfound from './Notfound';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import { AppBar, BottomNavigation, Button, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';


import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: { main: purple[900] },
    secondary: { main: '#11cb5f' }
  },
});

const Year = () => {
  return new Date().getFullYear();
}

const App = () => {
  return(
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar color="primary" position="static" style = {{ boxShadow:"none", position: "relative", width: "100%", height: "10%"}}>
          <NavBar />
        </AppBar>
        <main style = {{width: "80%", height: "80%"}}>
          <Switch>
            <Route exact path="/" component={Common} />
            <Route exact path="/members" component={Members} />
            <Route path="/members/:fullname" component = {Member}/>}/>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route component={Notfound} />
          </Switch>
        </main>
        <AppBar id="year" color="primary" position="static" component = "footer" style = {{ display: "flex", position: "relative", width: "100%", height: "10%", justifyContent: "center", alignItems: "center"}}>
          <div style={{position: "relative"}}>
            &copy; The 27 Club | <Year />
          </div>
        </AppBar>
      </ThemeProvider>
    </Router>
  )
}

export default App;
