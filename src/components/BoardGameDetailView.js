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
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import BoardGameCard from './BoardGameCard';
const styles = theme => ({

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


class BoardGameDetailView extends Component {

  render() {
    const { classes } = this.props;

    return(
      <div>
      <Grid className={classes.gridItem}  item>
        <Card id="libraryBoardGameCardID" className={classes.card} details={this.props.location.state.viewdetails}>

        <CardActionArea>
            <CardMedia
              className={classes.media}
              image={this.details.photo_url}
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
              <Typography className={classes.BoardGameCardTitle} variant="h6">{ this.props.details.title}</Typography>
              <Typography className={classes.BoardGameCardDescription} variant="body2">{this.props.details.publisher}</Typography>
            </div>
            </CardActionArea>

            <CardActions>
              <Button variant="contained" className={classes.purchaseButtonsize} size="small" onClick={this.onPurchaseClick}>
                Purchase
              </Button>
              <Typography align="right" variant="body2"> X in Stock</Typography>
              </CardActions>
        </Card>
      </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(BoardGameDetailView);
