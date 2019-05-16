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
import PrivateBoardGameCard from './privateBoardGameCard';
import BoardGameAppBar from './BoardGameAppBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const API = 'http://localhost:4567//BGapi/apiV2';

const styles = theme => ({
  userdetailsContainer:{
    padding: 15,
    margin: 40,
    maxWidth: 500,
    minWidth: 200,
    minHeight: 300,
    backgroundColor: '#e53935',
  },
  gridContainer:{

  },
  userdetailsText:{
    paddingTop: 10,
  },
  appBar:{
    backgroundColor: '#ab000e'
  }
})

class PrivateLibraryView extends Component {
  constructor() {
  super();

  this.state = {
    editopen: false,
    bglibrary: {},
    bgTransactions: {}
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
   //should check if user is logged
   fetch(API + '/getBoardGamesTransaction/byusername/' + unameglobal)
   .then(response =>  response.json())
   .then(resdata => {this.setState({ bgTransactions: resdata });
    console.log(this.state.bgTransactions)})
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
    console.log( localStorage.getItem("sharedLibrary"))
    alert( localStorage.getItem("username") + "'s Profile Successfully Copied!");
  }, function() {
    /* clipboard write failed */
  });

  }

  //
  // onShowTransactionsClick(){
  //   var unameglobal = localStorage.getItem("username");
  //   console.log("Fetching")
  //   //should check if user is logged
  //   fetch(API + '/getBoardGamesTransaction/byusername/' + unameglobal)
  //   .then(response =>  response.json())
  //   .then(resdata => {this.setState({ bgTransactions: resdata });
  //    console.log(this.state.bgTransactions)})
  // }

    onTransactionDialogs= () => {
      console.log("Transactions")
      this.setState({ editopen: true });
    }

    handleClose = () => {
      this.forceUpdate();
    this.setState({ editopen: false });
    };

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
                <Typography variant="h6"  style={{  color: 'white' }} className={classes.userdetailsText}> Welcome to your Library <span style={{  color: '#34515e' }}>{localStorage.getItem("username")}</span>! </Typography>
                <Typography id="stockTextID" variant="h6" style={{  color: 'white' }} className={classes.userdetailsText}>  {this.state.bglibrary.length} titles in your library </Typography>

                <Button variant="contained" id="sharebuttonID"  style={{  backgroundColor: '#ab000e' }}  className={classes.button} onClick={this.onShareClick}>Share Library! </Button>
                <Button variant="contained" id="transactionID"  style={{  backgroundColor: '#ab000e' }}  className={classes.button} onClick={this.onTransactionDialogs}> Show All Transactions </Button>
                <Dialog
                  fullScreen
                  open={this.state.editopen}
                  onClose={this.handleClose}
                  TransitionComponent={Transition}
                >
                <AppBar className={classes.appBar}>
                <Toolbar>
                <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">

                <CloseIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.flex}>
                  {localStorage.getItem("username")}'s Transactions
                </Typography>
                </Toolbar>
                </AppBar>
                <Paper className={classes.root}>
     <Table  className={classes.table}>
       <TableHead>
       <TableRow></TableRow>
         <TableRow>
           <TableCell align="left">Board Game Title</TableCell>
           <TableCell align="left">Categroy</TableCell>
           <TableCell align="left">Transaction Date</TableCell>
           <TableCell align="left">Quantity</TableCell>

         </TableRow>
       </TableHead>
       <TableBody>
         {Object
         .keys(this.state.bgTransactions)
         .map(row => (
           <TableRow key={row}>
             <TableCell component="th" scope="row">
              {this.state.bgTransactions[row].title}
             </TableCell>
           <TableCell align="left">{this.state.bgTransactions[row].category_name}</TableCell>
             <TableCell align="left">{this.state.bgTransactions[row].transaction_date}</TableCell>
             <TableCell align="left">{this.state.bgTransactions[row].quantity}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </Paper>
              </Dialog>
              </Paper>
            </Grid>
              <Grid item   xs ={8}  >
                <Grid  container direction="row" justify="center" >

                  {
                    Object
                    .keys(this.state.bglibrary)
                    .map(key => (
                      <PrivateBoardGameCard   id="libraryBoardGameCardID" key={key} index={key} showbtn={false} details={this.state.bglibrary[key]}/>
                    ))}

                </Grid>
              </Grid>
            </Grid>
          </div>
      );
    }
  }
  function Transition(props) {
  return <Slide direction="up" {...props} />;
  }

  PrivateLibraryView.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(PrivateLibraryView);
