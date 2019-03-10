import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import LibraryIcon from '@material-ui/icons/LocalLibrary';
import LibraryIcon from '@material-ui/icons/LibraryBooks';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  grow: {
  flexGrow: 1,
},
  PrimaryColor:{
    backgroundColor: '#ff6d60'
  },
  menuButton: {
  marginLeft: -12,
  marginRight: 20,
},
});


 class BoardGameAppBar extends Component {

 render() {
   const { classes } = this.props;
   return(
     <AppBar className={classes.PrimaryColor} position="static">
       <Toolbar>
         <IconButton className={classes.menuButton} color="inherit"  aria-label="Menu">
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" color="inherit"  className={classes.grow}>
         The Gaming Pit
         </Typography>
         <IconButton  color="inherit"  aria-label="Account">
          <LibraryIcon />
         </IconButton>
         <Button color="inherit" >Login</Button>
       </Toolbar>
     </AppBar>
   )
 }
}

BoardGameAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)( BoardGameAppBar);
