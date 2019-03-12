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
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
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
   maxHeight:220,
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


class BoardGameCard extends Component {


  render() {
    const { classes } = this.props;
    return(
              <Grid className={classes.gridItem}  item>
                <Card className={classes.card} details={this.props.details}>
                <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={this.props.details.image}
                      title="Game Thumbnail"/>
                      <div className={classes.BoardGameCardDetailsDiv}>
                      <div className={classes.DetailsList}>
                        <div className={classes.DetailsListItem}><Chip className={classes.catChip} color="primary"  label= {this.props.details.category} variant="outlined"></Chip></div>
                        <div className={classes.LeftDiv}>
                          <div className={classes.DetailsListItem}><Typography variant="caption">{this.props.details.playtime} min</Typography></div>
                          <div className={classes.DetailsListItem}><Typography variant="caption">{this.props.details.playercount} players</Typography></div>
                        </div>
                      </div>
                      </div>
                    <div className={classes.BoardGameCardTextDiv}>
                      <Typography className={classes.BoardGameCardTitle} variant="h6">{this.props.details.title}</Typography>
                      <Typography className={classes.BoardGameCardDescription} variant="body2">{this.props.details.publisher}</Typography>
                    </div>
                    </CardActionArea>
                </Card>
              </Grid>
    )
  }
}

BoardGameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)( BoardGameCard);
