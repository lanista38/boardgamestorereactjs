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
import LibraryView from './LibraryView';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#29434e',
  },

  grow: {
  flexGrow: 1,
},
  PrimaryColor:{
    backgroundColor: '#e53635'
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

 render() {
   const { classes } = this.props;
   return(
     <Router>
      <Switch>
       <AppBar className={classes.PrimaryColor} position="static">
         <Toolbar>
           <IconButton className={classes.menuButton} color="inherit"  aria-label="Menu">
             <MenuIcon />
           </IconButton>

           <Typography variant="h6" color="inherit"  className={classes.grow}>
           The Gaming Pit
           </Typography>

           <Link color="inherit" to="/user/">

           <IconButton   aria-label="Account">
           <LibraryIcon />

           </IconButton>  </Link>
           <Button color="inherit" >Login</Button>
         </Toolbar>
       </AppBar>
       <Route exact path="/" component = {Home}/>
       <Route path="/user/" component = {LibraryView}/>
       </Switch>
     </Router>
   )
 }
}

BoardGameAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)( BoardGameAppBar);
