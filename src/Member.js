import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, createMuiTheme, makeStyles, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import './index.css';

const membersData = require('./persons.json');

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 400
  }
});

const useStyles = makeStyles(theme =>({
 member_link: {
   textDecoration: "none",
   color: "#FF0000",
   "&:hover": {
     color: "#ff6347"
   }
 }
}));

const Member = (props) => {
  const classes = useStyles();
  var bio = '';
  var photo = '';
  var fullname = props.match.params.fullname;
  console.log(fullname);
  for (var i = 0; i < membersData.length; i++) {
    console.log(membersData[i].firstname + '_' + membersData[i].lastname);
    if (membersData[i].firstname + '_' + membersData[i].lastname === fullname) {
      bio = membersData[i].biography;
      photo = membersData[i].photo;
      break;
    } else {
      bio = <h1>Member not found</h1>;
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Box component="div" display = "flex" flexDirection = "column" alignItems = "center">
        <Box component="div">
          <img src = {photo} alt = {fullname} className = {classes.memberImage}/>
        </Box>
        <Typography gutterBottom variant = "h6" component = "div">
          <br/>
          {bio}<br/>
          <Button size="small" color="primary">
            <Link to="/members" className = {classes.member_link}>Back</Link>
          </Button>
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default Member;
