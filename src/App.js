import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Redirect, Link, Route,Switch} from 'react-router-dom';
import BoardGameCard from './components/BoardGameCard';
import BoardGameAppBar from './components/BoardGameAppBar';
import SimpleStorage from "react-simple-storage";



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#34515e"
  },

  gridContainer: {
   paddingTop: 45,
  },
});




class App extends Component {

  constructor() {
  super();

  this.state = {
  }
}
  state = {
    spacing: '16',
  };


  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
<Router>
        <div className={classes.root} >
        < BoardGameAppBar classes = {this.props.classes}>
        </BoardGameAppBar>


        </div>
</Router>
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);





// <Backgroundfetch> </Backgroundfetch>
//
// <Grid container className={classes.gridContainer} spacing={16}>
//
// <Grid item xs={12}>
//   <Grid container justify="center" spacing={16}>
//   {
//   Object
//   .keys(this.state.posts)
//   .map(key => (
//     <BoardGameCard  key={key} index={key} details={this.state.posts[key]}/>
// ))}
//   </Grid>
// </Grid>
// </Grid>
