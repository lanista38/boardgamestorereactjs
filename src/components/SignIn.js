import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Link, Route,Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';



const API = 'http://localhost:4567//BGapi/apiV2';
const APIauth = 'http://localhost:4567//BGapi/auth';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginres: '',
    }
  }

handleUsernameChange(event) {
this.setState({username: event.target.value})
}
handlePasswordChange(event) {
this.setState({password: event.target.value})
}

////login/username/:username/password/:password
onLoginClick = () => {
  console.log(this.state.username);
  console.log("posting")
  fetch(APIauth + '/login/username/' + this.state.username + '/password/' + this.state.password)
  .then(response =>  response.json())
  .then(resdata => {this.setState({ loginres: resdata });
  console.log(this.state.loginres);
  localStorage.removeItem("username");
    localStorage.removeItem("authtoken");
   localStorage.setItem("username", this.state.username);
   localStorage.setItem("authtoken", this.state.loginres.token)
   //location.reload();

})
}

  render () {
    const { classes } = this.props;
    return (
      <Router>
    <div className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel >Username</InputLabel>
            <Input id="username" name="username"  value={this.state.username} onChange={this.handleUsernameChange.bind(this)} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
          type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.onLoginClick}
          >
          <Redirect to="/home/"/>
            Sign in
          </Button>
        </form>
      </Paper>
    </div>
    </Router>
  );
}
}


SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
