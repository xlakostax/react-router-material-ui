import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, makeStyles, TextField, Typography  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
  contacts_box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto 0",
    width: "100%",
    height: "100%",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 400
  }
}));

const RedCheckbox = withStyles({
  root: {
    color: "#000",
    '&$checked': {
      color: "#FF0000",
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


const Contacts = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked: false,
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <Box component = "div" className = {classes.contacts_box}>
      <Typography gutterBottom variant = "h5" component = "p" style = {{fontFamily: "'Raleway', sans-serif", fontWeight: 400}}>
        Feel free to contact us for more information about membership!
      </Typography>
      <form>
        <TextField
          required
          label="Name:"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="Email:"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          label="Message:"
          InputLabelProps={{
            shrink: true,
          }}
          multiline
          rows="5"
          fullWidth
          className={classes.textField}
          margin="normal"
        />
        <FormControlLabel
          control={
            <RedCheckbox
              required
              checked={state.checked}
              onChange={handleChange('checked')}
              value="checked"
              />
            }
            label="I agree that my personal data will be stored and processed."
          />
        <br />
        <br />
        <Button type="submit">Send</Button>
      </form>
    </Box>
  )
}

export default Contacts;
