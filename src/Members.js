import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, createMuiTheme, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import './index.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 400
  }
});

const useStyles = makeStyles(theme =>({
 grid: {
   justifyContent: "auto"
 },
 members_link: {
   textDecoration: "none",
   color: "#FF0000",
   "&:hover": {
     color: "#ff6347"
   }
 },
 memberImage: {
   margin: '1em',
   width: "18em",
   height: "auto",
 }
}));

const Members = () => {
  const classes = useStyles();
  const membersData = require('./persons.json');
  var memberList = membersData.map ( (member) => {
    return (
      <Grid item key={member.id} >
        <Card>
          <CardMedia
            component="img"
            image = {member.photo}
            alt = {member.firstname}
            className = {classes.memberImage}
          />
          <Typography gutterBottom variant = "h5" component = "h2">
            <CardContent>
              {member.firstname} {member.lastname}
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <Link to={`/members/${member.firstname}_${member.lastname}`} className = {classes.members_link}>Learn more</Link>
              </Button>
            </CardActions>
          </Typography>
        </Card>
      </Grid>
    );
  })
  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginTop: 20, padding: 30 }}>
        <Typography gutterBottom variant = "h4" component = "h2">
          "The 27 Club" members
        </Typography>
        <Grid container className={classes.grid} spacing={2}>
          {memberList}
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default Members;
