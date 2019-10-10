import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, makeStyles } from '@material-ui/core';
import './index.css';

const useStyles = makeStyles(theme =>({

 grid: {
   justifyContent: "center"
 },
 memberImage: {
   margin: '1em',
   width: "18em",
   height: "auto"
 }
}));

const Members = () => {
  const classes = useStyles();
  const membersData = require('./persons.json');
  var memberList = membersData.map ( (member) => {
    return (
      <Grid item key={member.id} >
        <Card className = {classes.card}>
          <CardMedia
            component="img"
            image = {member.photo}
            alt = {member.firstname}
            className = {classes.memberImage}
          />
          <CardContent>
            <Typography gutterBottom variant = "h5" component = "h2">
              {member.firstname} {member.lastname}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <Link to={`/members/${member.firstname}_${member.lastname}`}>Learn more</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  })
  return (
      <div style={{ marginTop: 20, padding: 30 }}>
        <Typography gutterBottom variant = "h2" component = "h2">
          Members
        </Typography>
        <Grid container className={classes.grid} spacing={2}>
          {memberList}
        </Grid>
      </div>
  )
}

export default Members;
