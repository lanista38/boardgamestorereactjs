import React, { Component } from 'react';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LibraryIcon from '@material-ui/icons/LibraryBooks';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import SignIn from './SignIn';
import Register from './register';
const styles = theme => ({
  about: {
    padding: 50
  },
  submitForms: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

class AboutView extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className='about'>
        <Typography variant='h4'>About Us</Typography>
        <Typography variant='h5'>
        The main idea behind the solution is to develop a website where customers can easily view available board games sold in-store, online and for rent. In addition, extra info on the board games may be provided and the system will have some user interaction/engagement where users may build their own private library of owned board games and share it with others. The system will serve as a platform to attract more customers to the physical store, and increase sales (both online and in-store).
        </Typography>
        </Paper>
        <Grid container justify="center"
        alignItems="center" spacing={16}>
        <Grid item >
        {!localStorage.getItem('username') && <SignIn/>}
        </Grid>
        <Grid item>
        {!localStorage.getItem('username') && <Register/>}
        </Grid>
        </Grid>
      </div>
    )
  }
}

export default AboutView
