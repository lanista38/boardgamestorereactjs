import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
// import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
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



const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  PrimaryColor:{
    backgroundColor: '#ff6d60'
  },
  gridContainer: {
   paddingTop: 45,
  },
  gridItem:{
    padding: 40
  },

  control: {
    padding: theme.spacing.unit * 2,
  },
  grow: {
    flexGrow: 0,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
   minWidth: 250,
   maxWidth: 220,
   minHeight: 220,
   maxHeight:220

 },
BoardGameCardTextDiv:{
    paddingTop:5,
    padding: 10,
},

 pos: {
   marginBottom: 12,
 },
 media: {
  height: 100,
},
catChip:{
  height: 14,
  fontSize:10,
},
DetailsList:{
 display: 'flex',

},
DetailsListItem:{
  paddingLeft: 5,
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
      <div className={classes.root} >
      <AppBar className={classes.PrimaryColor} position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.grow}>
          The Gaming Pit
          </Typography>
          <Button >Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.gridContainer} spacing={16}>

        <Grid item xs={12}>
          <Grid container justify="center" spacing={Number(spacing)}>
          {
          Object
          .keys(this.state.posts)
          .map(key => (
              <Grid className={classes.gridItem} key={key} index={key}  item>
                <Card className={classes.card} details={this.state.posts[key]}>

                    <CardMedia
                      className={classes.media}
                      image={this.state.posts[key].image}
                      title="Game Thumbnail"/>
                      <div className={classes.BoardGameCardDetailsDiv}>
                      <div className={classes.DetailsList}>
                        <div className={classes.DetailsListItem}><Chip className={classes.catChip} color="primary"  label= {this.state.posts[key].category} variant="outlined"></Chip></div>
                        <div className={classes.DetailsListItem}><Typography variant="caption">{this.state.posts[key].playtime} min</Typography></div>
                        <div className={classes.DetailsListItem}><Typography variant="caption">{this.state.posts[key].playercount} players</Typography></div>
                      </div>

                      </div>
                    <div className={classes.BoardGameCardTextDiv}>
                      <Typography className={classes.BoardGameCardTitle} variant="h6">{this.state.posts[key].title}</Typography>
                      <Typography className={classes.BoardGameCardDescription} variant="body2">{this.state.posts[key].publisher}</Typography>
                    </div>

                </Card>
              </Grid>
        ))}
          </Grid>

        </Grid>

      </Grid>
      </div>
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
