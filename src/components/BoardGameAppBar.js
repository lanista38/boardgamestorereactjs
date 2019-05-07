import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import LibraryIcon from '@material-ui/icons/LibraryBooks';
import LocationCity from '@material-ui/icons/LocationCity';
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
import BoardGameFilter from './BoardGameFilter';
import AboutView from './AboutView';
import sharedUserBoardGameLibrary from './sharedUserBoardGameLibrary';




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
   constructor(props) {
     super(props)
     this.state = {
       showlogoutbtn: true,
    }
   }

componentWillMount(){
  if(localStorage.getItem("username") != null)
    this.setState({showlogoutbtn: true})

}
  componentDidMount(){
    if(localStorage.getItem("username") != null)
      this.setState({showlogoutbtn: true})

  }
  handleLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("authtoken");
    this.setState({showlogoutbtn: false})
      //var logout chip =
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

           <Link color="inherit" to="/about">

           <IconButton id="aboutButtonID" color="inherit"  aria-label="location_city">
           <LocationCity />
           </IconButton>  </Link>

           {this.state.showlogoutbtn && <Button id="logoutBtnID" color="inherit" onClick={this.handleLogOut}>Sign Out</Button>}

         </Toolbar>
       </AppBar>
       <Route  exact path="/" component = {LibraryView}/>
       <Route path="/user/" component = {PrivateLibraryView}/>
       <Route path="/details/" component = {BoardGameDetailView}/>
        <Route path="/sharedUser/" component = {sharedUserBoardGameLibrary}/>
        <Route path="/about/" component = {AboutView}/>
       </div>
     </Router>
   )
 }
}
BoardGameAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)( BoardGameAppBar);
