import React from 'react';
import { Button, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  navLink: {
    textDecoration: "none",
    marginRight: "1em",
  },
  navButton: {
    fontFamily: "'Rock Salt', cursive",
    fontWeight: 600
  }
}));

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <List  component="nav" style = {{position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-end", padding: 0 }}>
      <NavLink exact activeClassName = 'active' className = {classes.navLink} to="/">
        <ListItem>
          <Button color = "secondary">
            <ListItemText
              disableTypography
              primary = {<Typography type="body2" className = {classes.navButton}>Home</Typography>}
            />
          </Button>
        </ListItem>
      </NavLink>
      <NavLink activeClassName = 'active' className = {classes.navLink} to="/members">
        <ListItem>
          <Button color = "secondary">
            <ListItemText
              disableTypography
              primary = {<Typography type="body2" className = {classes.navButton}>Members</Typography>}
            />
          </Button>
        </ListItem>
      </NavLink>
      <NavLink activeClassName = 'active' className = {classes.navLink} to="/about">
        <ListItem>
          <Button color = "secondary">
            <ListItemText
              disableTypography
              primary = {<Typography type="body2" className = {classes.navButton}>About</Typography>}
            />
          </Button>
        </ListItem>
      </NavLink>
      <NavLink activeClassName = 'active' className = {classes.navLink} to="/contacts">
        <ListItem>
          <Button color = "secondary">
            <ListItemText
              disableTypography
              primary = {<Typography type="body2" className = {classes.navButton}>Join us</Typography>}
            />
          </Button>
        </ListItem>
      </NavLink>
    </List >
  )
}

export default NavBar;
