import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Link, Route,Switch} from 'react-router-dom';
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
import Avatar from '@material-ui/core/Avatar';
import logo from '../dragon-head.svg';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ff8f00',
  },
  logo:{
    paddingLeft: 20,
    maxHeight: 50,
    maxWidth: 50
  },
  grow: {
  flexGrow: 1,
},
  PrimaryColor:{
    backgroundColor: '#f44336'
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
       showlogoutbtn: '',
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
    console.log(localStorage.getItem("username"));
      //var logout chip =
  };



 render() {
   const { classes } = this.props;
   return(

      <div>
       <AppBar className={classes.PrimaryColor} position="static">
         <Toolbar>
           <IconButton className={classes.menuButton} color="inherit"  aria-label="Menu">
             <img className={classes.logo} src={logo} />
           </IconButton>

           <Typography variant="h6"  className={classes.grow}>
           <Link id="siteTitleID" style={{ textDecoration: 'none',  color: 'white'  }} to="/home/">   The Gaming Pit</Link>
           </Typography>

           <Link style={{ textDecoration: 'none',  color: 'white'  }} to="/about/">
           <IconButton id="aboutButtonID" color="inherit"  aria-label="location_city">
           <LocationCity />
           </IconButton>
           </Link>

           {this.state.showlogoutbtn && <Avatar alt="Remy Sharp" src="https://www.w3schools.com/w3images/avatar2.png" className={classes.bigAvatar} />}
           {this.state.showlogoutbtn && <Link style={{ textDecoration: 'none', color: 'white' }}  to="/user/">
           <Button style={{  color: 'white' }}>   {localStorage.getItem("username")}</Button>
           </Link> }



           {this.state.showlogoutbtn && <Button id="logoutBtnID" color="inherit" onClick={this.handleLogOut}> Sign Out</Button>}

         </Toolbar>
       </AppBar>
       <Switch>
       <PrivateRoute  exact path="/home/" component = {LibraryView}/>
       <PrivateRoute path="/user/" component = {PrivateLibraryView}/>
       <PrivateRoute path="/details/" component = {BoardGameDetailView}/>
        <Route path="/sharedUser/" component = {sharedUserBoardGameLibrary}/>
        <Route  path="/about/" component = {AboutView}/>
        </Switch>
       </div>
   )
 }
}
BoardGameAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


function PrivateRoute({ component: Component, ...rest }) {
return (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("username") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/about/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
}

export default withStyles(styles)( BoardGameAppBar);
