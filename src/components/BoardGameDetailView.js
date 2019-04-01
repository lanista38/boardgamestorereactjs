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
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

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
    return(
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

export default withStyles(styles)(BoardGameDetailView);
