import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import BoardGameCard from './BoardGameCard';
import BoardGameAppBar from './BoardGameAppBar';

const API = 'http://localhost:4567//BGapi/apiV2';

const styles = theme => ({
  userdetailsContainer:{
    padding: 15,
    margin: 40,
    maxWidth: 500,
    minWidth: 200,
    minHeight: 300,
    backgroundColor: '#ff8f00',
  },
  gridContainer:{

  },
  userdetailsText:{
    paddingTop: 10,
  },
})

class PrivateLibraryView extends Component {
  constructor() {
  super();

  this.state = {
    bglibrary: {}
  }
}
componentDidMount(){
  var unameglobal = localStorage.getItem("username");
  console.log("Fetching")
  //should check if user is logged
  fetch(API + '/getBoardGames/byusername/' + unameglobal)
  .then(response =>  response.json())
  .then(resdata => {this.setState({ bglibrary: resdata });
   console.log(this.state.bglibrary)})

   console.log(unameglobal);
}
  state = {
    spacing: '16',
  };

  onShareClick(){
  var copyText = 'http://localhost:3000/sharedUser/';
  localStorage.removeItem("sharedLibrary")
  localStorage.setItem("sharedLibrary", localStorage.getItem("username"))
  navigator.clipboard.writeText(copyText).then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
  alert( localStorage.getItem("username") + "'s Profile Successfully Copied!");
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;

    const { spacing } = this.state;
      return (
        <div >
          <Grid  container direction="row" justify="flex-start" spacing={24}>
            <Grid item  xs ={4} >
              <Paper className={classes.userdetailsContainer} >
                <Avatar alt="Remy Sharp" src="https://www.w3schools.com/w3images/avatar2.png" className={classes.bigAvatar} />
                <Typography variant="h6" className={classes.userdetailsText}> Welcome to your Library {localStorage.getItem("username")}! </Typography>
                <Typography id="stockTextID" variant="h6" className={classes.userdetailsText}>  {this.state.bglibrary.length} titles in your library </Typography>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.onShareClick}>Share Library! </Button>
              </Paper>
            </Grid>
              <Grid item   xs ={8}  >
                <Grid  container direction="row" justify="center" >

                  {
                    Object
                    .keys(this.state.bglibrary)
                    .map(key => (
                      <BoardGameCard   id="libraryBoardGameCardID" key={key} index={key} showbtn={false} details={this.state.bglibrary[key]}/>
                    ))}

                </Grid>
              </Grid>
            </Grid>
          </div>
      );
    }
  }


  PrivateLibraryView.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(PrivateLibraryView);
