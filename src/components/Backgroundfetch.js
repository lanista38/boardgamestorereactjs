import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

})

const API = 'http://localhost:4567/';

class BackgroundFetchBGStock extends Component {
  constructor(props){
    super(props);
    this.state = {
      allbg: []
    }
  }
  componentDidMount(){
    console.log("Fetching")
    fetch(API + '/getBoardGames')
    .then(response =>  response.json())
    .then(resdata => {this.setState({ allbg: resdata });
     console.log(this.state.allbg)})

}
  render() {
    return(
      <div></div>
    )
  }
}

class BackgroundFetchPrivateLibrary extends Component {
  constructor(props){
    super(props);
    this.state = {
      bglibrary: []
    }
  }
  componentDidMount(){
    console.log("Fetching")
    fetch('https://bgg-json.azurewebsites.net/hot')
    .then(response =>  response.json())
    .then(bglibrary => this.setState({ bglibrary}));
          console.log(this.state.bglibrary)
}
  render() {
    return(
      <div></div>
    )
  }
}


class BackgroundFetchUserData extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: []
    }
  }
  componentDidMount(){
    console.log("Fetching")
    fetch('https://bgg-json.azurewebsites.net/hot')
    .then(response =>  response.json())
    .then(user => this.setState({ user}));
          console.log(this.state.user)
}
  render() {
    return(
      <div></div>
    )
  }
}

export default ( BackgroundFetchBGStock);


// <Dialog
// open={this.state.open}
// onClose={this.handleClose}
// aria-labelledby="form-dialog-title">
// <DialogTitle id="form-dialog-title">Log In</DialogTitle>
// <DialogContent>
//  <DialogContentText>
//  Sign in with your account to have access to your game library.
//  </DialogContentText>
//  <TextField
//    autoFocus
//    margin="dense"
//    id="loginNameField"
//    label="User Name"
//    type="username"
//    fullWidth
//  />
//  <TextField
//    autoFocus
//    margin="dense"
//    id="loginPasswordField"
//    label="Password"
//    type="password"
//    fullWidth
//  />
// </DialogContent>
// <DialogActions>
//  <Button onClick={this.handleClose} color="primary">
//    Cancel
//  </Button>
//  <Button id="submitLoginButtonID" onClick={this.handleClose} color="primary">
//    Login
//  </Button>
// </DialogActions>
// </Dialog>
