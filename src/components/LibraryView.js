import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Link, Route,Switch} from 'react-router-dom';
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
import  _ from "lodash";
import ReactFilterBox, {SimpleResultProcessing,Expression} from "react-filter-box";
import "react-filter-box/lib/react-filter-box.css"
import BoardGameCard from './BoardGameCard';
import BoardGameAppBar from './BoardGameAppBar';

const styles = theme => ({
  searchdiv: {

},
})
const API = 'http://localhost:4567/BGapi/apiV2';
const APIauth = 'http://localhost:4567/BGapi/auth';
class LibraryView extends Component {
  constructor() {
  super();

  this.state = {
    allbg: {}
  }

  this.options = [
   {
       columnField: "title",
       type:"text"
   },
   {
       columnField: "category_name",
       type:"text",
       columnText: "Category"
   },
];
}
  state = {
    spacing: '16',
  };

  onParseOk(expressions){

        var bgfilter = new SimpleResultProcessing(this.options).process(this.state.allbg,expressions);
        this.setState({allbg:bgfilter});
        console.log(bgfilter);
    }

  componentDidMount(){
    console.log("Fetching")
    fetch(API + '/getBoardGames/InSale')
    .then(response =>  response.json())
    .then(resdata => {this.setState({ allbg: resdata });
     console.log(this.state.allbg)})

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
        <div  >
        <Paper className ={classes.searchdiv}>
        <ReactFilterBox
                   query={this.state.query}
                   data={this.state.allbg}
                   options={this.options}
                   onParseOk={this.onParseOk.bind(this)}
                   id="boardgameFilterID"
                    />
          </Paper>
        <Grid container className={classes.gridContainer} spacing={16}>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={Number(spacing)}>
            {
            Object
            .keys(this.state.allbg)
            .map(key => (
              <BoardGameCard  key={key} index={key} showbtn={true} details={this.state.allbg[key]}/>
          ))}
            </Grid>

          </Grid>

        </Grid>
        </div>

      );
    }
  }


  LibraryView.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(LibraryView);
