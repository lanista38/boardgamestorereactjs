import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
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
import MenuIcon from '@material-ui/icons/Menu';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import BoardGameCard from './components/BoardGameCard';
import BoardGameAppBar from './components/BoardGameAppBar';
import Backgroundfetch from './components/Backgroundfetch';



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#29434e',
  },

  gridContainer: {
   paddingTop: 45,
  },
});




class App extends Component {

  constructor() {
  super();

  this.state = {
    posts: {}
  }
}
componentWillMount() {
  this.setState({
    posts: PostsData
  });
}
  state = {
    spacing: '16',
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
      <Router>
        <div className={classes.root} >
        < BoardGameAppBar classes = {this.props.classes}>
        </BoardGameAppBar>

          <Backgroundfetch> </Backgroundfetch>

        <Grid container className={classes.gridContainer} spacing={16}>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
            {
            Object
            .keys(this.state.posts)
            .map(key => (
              <BoardGameCard  key={key} index={key} details={this.state.posts[key]}/>
          ))}
            </Grid>
          </Grid>
        </Grid>
        </div>
      </Router>
    );
  }
}

const PostsData = [
  {
    "category": "Area Control",
    "title": "Inis",
    "publisher": "CMON Games",
    "playtime": "90",
    "playercount": "4",
    "image": "https://cf.geekdo-images.com/imagepage/img/c6vFqiWZr3ix-2rMkUA0idcaOfk=/fit-in/900x600/filters:no_upscale()/pic3112623.jpg"
  },
  {
    "category": "Area Control",
    "title": "Blood Rage",
    "publisher": "CMON Games",
    "playtime": "90",
    "playercount": "4",
    "image": "https://cf.geekdo-images.com/original/img/p4IovYzLVXqxY40lbGUu92VxaIQ=/0x0/pic2439223.jpg"
  },
  {
    "category": ["Co-op"],
    "title": "Betrayal At House On The Hill",
    "publisher": "CMON Games",
    "playtime": "75",
    "playercount": "6",
    "image": "https://cf.geekdo-images.com/imagepage/img/ATOLalbskGxv_ZKYPTqdJC9lh_o=/fit-in/900x600/filters:no_upscale()/pic828598.jpg"
  },
  {
    "category": "Area Control",
    "title": "Time Stories",
    "publisher": "CMON Games",
    "playtime": "90",
    "playercount": "4",
    "image": "https://cf.geekdo-images.com/imagepage/img/evul1vzteA5QdbvAVeqaauIdziM=/fit-in/900x600/filters:no_upscale()/pic2617634.png"
  },
  {
    "category": "Area Control",
    "title": "Raiders of the North Sea",
    "publisher": "CMON Games",
    "playtime": "90",
    "playercount": "4",
    "image": "https://cf.geekdo-images.com/imagepage/img/JDWpDN9YS38DL9VQnND6tgsWnHk=/fit-in/900x600/filters:no_upscale()/pic3578101.jpg"
  },
  {
    "category": ["Player Elimination"],
    "title": "Coup",
    "publisher": "Avalon Hill Games",
    "playtime": "15",
    "playercount": "6",
    "image": "https://cf.geekdo-images.com/imagepagezoom/img/ZXaTzIdX60t6rsW80DL44ih76E8=/fit-in/1200x900/filters:no_upscale()/pic2016054.jpg"
  },
]



App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
