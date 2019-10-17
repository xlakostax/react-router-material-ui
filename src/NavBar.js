import React from 'react';
import { Button, Toolbar, makeStyles } from '@material-ui/core';
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
    <Toolbar component="nav" style = {{position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-end", padding: 0 }}>
      <NavLink exact activeClassName = 'active' className = {classes.navLink} to="/">
        <Button color = "secondary" className = {classes.navButton}>
          Home
        </Button>
      </NavLink>
      <NavLink activeClassName = 'active' className = {classes.navLink} to="/members">
        <Button color = "secondary" className = {classes.navButton}>
            Members
        </Button>
      </NavLink>
      <NavLink activeClassName = 'active' className = {classes.navLink} to="/about">
        <Button color = "secondary" className = {classes.navButton}>
            About
        </Button>
      </NavLink>
      <NavLink activeClassName = 'active' className = {classes.navLink} to="/contacts">
        <Button color = "secondary" className = {classes.navButton}>
            Join us
        </Button>
      </NavLink>
    </Toolbar>
  )
}

export default NavBar;
