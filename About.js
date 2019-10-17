import React from 'react';
import { Box, createMuiTheme, makeStyles, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import './index.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 400
  }
});

const useStyles = makeStyles(theme =>({
 about_link: {
   textDecoration: "none",
   color: "#FF0000",
   "&:hover": {
     color: "#ff6347"
   }
 },
 about_img: {
   width: "60%",
   height: "auto",
   maxWidth: "100%",
   maxHeight: "100%",
   marginRight: "1em"
 }
}));

const About = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box component="article" display = "flex" flexDirection = "column" alignItems = "center">
        <img src='https://bit.ly/31lb8Lx' alt='' className = {classes.about_img}/>
        <br/>
        <Typography gutterBottom variant = "h6" component = "section">
          The 27 Club is a list consisting mostly of popular musicians, artists, or actors who died at age 27. Although the claim of a "statistical spike" for the death of musicians at that age has been repeatedly disproved by research, it remains a cultural phenomenon, documenting the deaths of celebrities, some noted for their high-risk lifestyles. Names are often put forward for inclusion, but because the club is entirely notional, there is no official membership.<br/><br/>

          The 27 Club includes popular musicians, artists, actors and athletes who have died at age 27, often as a result of drug and alcohol abuse, or violent means such as homicide, suicide, or transportation-related accidents. The deaths of several 27 year-old popular musicians between 1969 and 1971 led to the belief that deaths are more common at this age. Statistical studies have failed to find any unusual pattern of musician deaths at this age, comparing it to equally small increases at ages 25 and 32, with a 2011 BMJ study noting instead that young adult musicians have a higher death rate than the rest of the young adult population, concluding: "Fame may increase the risk of death among musicians, but this risk is not limited to age 27".<br/><br/>

          The "club" has been repeatedly cited in music magazines, journals and the daily press. Several exhibitions have been devoted to the idea, as well as novels, films and stage plays. There have been many different theories and speculations about  the causes of such early deaths and their possible connections. Cobain and Hendrix biographer Charles R. Cross wrote, four years before the BMJ study was published, "The number of musicians who died at 27 is truly remarkable by any standard. [Although] humans die regularly at all ages, there is a statistical spike for musicians who die at 27."<br/><br/>
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default About;