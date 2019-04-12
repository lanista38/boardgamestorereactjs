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

const API = 'http://localhost:4567/';

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
  console.log("Fetching")
  fetch(API + '/getBoardGames/byusername/Lanista')
  .then(response =>  response.json())
  .then(resdata => {this.setState({ bglibrary: resdata });
   console.log(this.state.bglibrary)})

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
        <div >
          <Grid  container direction="row" justify="flex-start" spacing={24}>
            <Grid item  xs ={4} >
              <Paper className={classes.userdetailsContainer} >
                <Avatar alt="Remy Sharp" src="https://www.w3schools.com/w3images/avatar2.png" className={classes.bigAvatar} />
                <Typography variant="h6" className={classes.userdetailsText}> Welcome to your Library Lanista! </Typography>
                <Typography id="stockTextID" variant="h6" className={classes.userdetailsText}>  {this.state.bglibrary.length} titles in your library </Typography>
                <Typography variant="h6" className={classes.userdetailsText}> X friends {UserData.name}! </Typography>
              </Paper>
            </Grid>
              <Grid item   xs ={8}  >
                <Grid  container direction="row" justify="center" >

                  {
                    Object
                    .keys(this.state.bglibrary)
                    .map(key => (
                      <BoardGameCard  key={key} index={key} details={this.state.bglibrary[key]}/>
                    ))}

                </Grid>
              </Grid>
            </Grid>
          </div>
      );
    }
  }


  const UserData = [
    {
      "name": "Jorge",
      "username": "Lanista",
      "email": "someemail@gmail.com"
    },
  ]
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

  PrivateLibraryView.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(PrivateLibraryView);
