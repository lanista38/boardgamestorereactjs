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
import MenuIcon from '@material-ui/icons/Menu';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';
import BoardGameDetailView from './BoardGameDetailView';

const styles = theme => ({
  gridContainer: {
   paddingTop: 45,
  },
  gridItem:{
    padding: 40
  },
  purchaseButtonsize:{
    backgroundColor: '#ff8f00'
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
   maxHeight:300,
   BackgroundColor: '#ff6659'
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
})

const PostsData = [
  {
    "category": "Area Control",
    "title": "Inis",
    "publisher": "CMON Games",
    "playtime": "90",
    "playercount": "4",
    "image": "https://cf.geekdo-images.com/imagepage/img/c6vFqiWZr3ix-2rMkUA0idcaOfk=/fit-in/900x600/filters:no_upscale()/pic3112623.jpg"
  },
]
const API = 'http://localhost:4567/BGapi/apiV2';
const APIauth = 'http://localhost:4567/BGapi/auth';

class BoardGameCard extends Component {
  state = {
    showPurchasebutton: this.props.showbtn,
  };
  componentDidMount(){
    if(localStorage.getItem("username") == localStorage.getItem("sharedLibrary") && this.props.showPurchasebutton)
    {
      this.setState({showPurchasebutton: false});

    }
    else if (localStorage.getItem("username") != localStorage.getItem("sharedLibrary") && !this.props.showPurchasebutton)
      {this.setState({showPurchasebutton: true});}

  }
  ///buyBoardGames/byusername/:username/boardgameid/:bg_id/quantity/:quantity
  onPurchaseClick = () => {
    console.log("buying")
    if(this.props.details.quantity > 0)
    {fetch(API + '/buyBoardGames/byusername/' + localStorage.getItem('username') + '/boardgameid/' + this.props.details.bg_id + '/quantity/1', {method: 'POST'})
    this.setState({ showPurchasebutton: false  });
    alert( 'Game Successfully Purchased!');}
    else {alert( 'No stock left in the system!');}
    this.forceUpdate()
  }

  render() {
    const { classes } = this.props;
    return(
       <div>
              <Grid className={classes.gridItem}  item>
                <Card id="libraryBoardGameCardID" className={classes.card} details={this.props.details}>
                 <Link color="inherit"   to={{
                                        pathname: "/details/",}}>
                <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={this.props.details.photo_url}
                      title="Game Thumbnail"/>
                      <div className={classes.BoardGameCardDetailsDiv}>
                      <div className={classes.DetailsList}>
                        <div className={classes.DetailsListItem}><Chip className={classes.catChip} color="primary"  label= {this.props.details.category_name} variant="outlined"></Chip></div>
                        <div className={classes.LeftDiv}>
                          <div className={classes.DetailsListItem}><Typography variant="caption">{this.props.details.average_playtime} min</Typography></div>
                          <div className={classes.DetailsListItem}><Typography variant="caption">{this.props.details.max_player} players</Typography></div>
                        </div>
                      </div>
                      </div>
                    <div className={classes.BoardGameCardTextDiv}>
                      <Typography className={classes.BoardGameCardTitle} variant="h6">{this.props.details.title}</Typography>
                      <Typography className={classes.BoardGameCardDescription} variant="body2">{this.props.details.publisher}</Typography>
                    </div>
                    </CardActionArea>
                    </Link>
                    <CardActions>
                      {this.state.showPurchasebutton  && <Button variant="contained" className={classes.purchaseButtonsize} size="small" onClick={this.onPurchaseClick}>
                        Purchase
                        </Button>
                      }

                      <Typography align="right" variant="body2"> {this.props.details.quantity} in Stock</Typography>
                      </CardActions>
                </Card>
              </Grid>

              </div>
    )
  }
}

BoardGameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
//     <Route  to={{pathname: '/details',
//     state: { viewdetails: this.props.details }
// }} component = {BoardGameDetailView}/>

export default withStyles(styles)( BoardGameCard);
