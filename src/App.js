import React from 'react';
import Main from './Main'
import NavBar from './NavBar'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppBar, Box, createMuiTheme, makeStyles, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff', text: '#FF0000'
    },
    secondary: {
      main: '#000'
    }
  },
});

const useStyles = makeStyles(theme => ({
  footer_year: {
    display: "block",
    position: "relative",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 400,
    padding: "0 5px"
  }
}));

const Year = () => {
  return new Date().getFullYear();
}

const App = () => {
  const classes = useStyles();
  return(
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar color="primary" position="static" style = {{ boxShadow:"none", position: "relative", width: "100%", height: "10%"}}>
          <NavBar />
        </AppBar>
        <Main />
        <AppBar id="year" color="secondary" position="static" component = "footer" style = {{ display: "flex", position: "relative", width: "100%", height: "10%", justifyContent: "center", alignItems: "center", marginTop: "1em"}}>
          <Box component = "div" style = {{position: "relative", display: "flex", justifyContent: "center"}}>
            <Typography gutterBottom variant = "subtitle2" component = "p" className = {classes.footer_year}>
              &copy; Made with
            </Typography>
            <FavoriteIcon style = {{color: "#FF0000"}} fontSize="small"/>
            <Typography gutterBottom variant = "subtitle2" component = "p" className = {classes.footer_year}>
               by "The 27 Club" | <Year />
            </Typography>
          </Box>
        </AppBar>
      </ThemeProvider>
    </Router>
  )
}

export default App;
