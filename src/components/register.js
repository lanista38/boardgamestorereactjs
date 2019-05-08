import React, { Component } from 'react';

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
import {BrowserRouter as Router, Redirect, Link, Route,Switch} from 'react-router-dom';
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

class register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      name: '',
    }
  }

handleUsernameChange(event) {
this.setState({username: event.target.value})
}
handleNameChange(event) {
this.setState({name: event.target.value})
}

  handleEmailChange(event) {
  this.setState({email: event.target.value})
}
handlePasswordChange(event) {
  this.setState({password: event.target.value})
}


  onRegisterClick = () => {
    console.log(this.state.email);
    console.log("posting")
    fetch(APIauth + '/logon/name/' + this.state.name + '/username/'+ this.state.username + '/email/' + this.state.email + '/password/' + this.state.password, {
      method: 'POST'
    })
    this.setState({name:'', username: '', email:'', password:''})
    alert('User Created')
  }
  render () {
    const { classes } = this.props;
    return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel >Name</InputLabel>
          <Input id="namereg" name="username"  value={this.state.name} onChange={this.handleNameChange.bind(this)} autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel >Username</InputLabel>
          <Input id="usernamereg" name="username"  value={this.state.username} onChange={this.handleUsernameChange.bind(this)} autoFocus />
        </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="emailreg" name="email" autoComplete="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="passwordreg" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} autoComplete="current-password" />
          </FormControl>
          <Button

            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.onRegisterClick}
          >
        
            Register
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}

register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(register);
