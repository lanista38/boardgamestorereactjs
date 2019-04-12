import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
import LibraryView from './LibraryView';
import BoardGameDetailView from './BoardGameDetailView';
import PrivateLibraryView from './PrivateLibraryView';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ff8f00',
  },

  grow: {
  flexGrow: 1,
},
  PrimaryColor:{
    backgroundColor: '#c56000'
  },
  menuButton: {
  marginLeft: -12,
  marginRight: 20,
},
});

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

 class BoardGameAppBar extends Component {
   state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

 render() {
   const { classes } = this.props;
   return(
     <Router>
      <div>
       <AppBar className={classes.PrimaryColor} position="static">
         <Toolbar>
           <IconButton className={classes.menuButton} color="inherit"  aria-label="Menu">
             <MenuIcon />
           </IconButton>

           <Typography variant="h6"  className={classes.grow}>
           <Link id="siteTitleID" to="/">   The Gaming Pit</Link>
           </Typography>

           <Link color="inherit" to="/user">

           <IconButton id="privateLibraryButtonID" color="inherit"  aria-label="Account">
           <LibraryIcon />

           </IconButton>  </Link>
           <Button id="loginButtonID" color="inherit" onClick={this.handleClickOpen}>Login</Button>
           <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Log In</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Sign in with your account to have access to your game library.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="loginNameField"
              label="User Name"
              type="username"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="loginPasswordField"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button id="submitLoginButtonID" onClick={this.handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
         </Toolbar>
       </AppBar>
       <Route  exact path="/" component = {LibraryView}/>
       <Route path="/user/" component = {PrivateLibraryView}/>
       </div>
     </Router>
   )
 }
}
BoardGameAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)( BoardGameAppBar);
