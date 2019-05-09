import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import {BrowserRouter as Router, Redirect, Link, Route,Switch} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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


const API = 'http://localhost:4567/BGapi/apiV2';
const APIauth = 'http://localhost:4567/BGapi/auth';

class BoardGameCard extends Component {
  state = {
    showPurchasebutton: this.props.showbtn,
    freshdetails: this.props.details,
    editopen: false,
    publisheredit:'',
    maxplayeredit: '',
    playtimeedit:'',
    descriptionedit:'',
    playtime:'',
  };
  componentDidMount(){
    this.setState({publisheredit: this.props.details.publisher})
    this.setState({descriptionedit: this.props.details.description})
    this.setState({playtimeedit: this.props.details.average_playtime})
    this.setState({maxplayeredit: this.props.details.max_player})
    this.setState({playtime:this.props.details.play_time})
    if(localStorage.getItem("username") == localStorage.getItem("sharedLibrary") && this.props.showPurchasebutton)
    {
      this.setState({showPurchasebutton: false});

    }
    else if (localStorage.getItem("username") != localStorage.getItem("sharedLibrary") && !this.props.showPurchasebutton)
      {this.setState({showPurchasebutton: true});}

  }
  handledescriptionChange(event) {
  this.setState({descriptionedit: event.target.value})
  }
  handlepublisherChange(event) {
  this.setState({publisheredit: event.target.value})
  }
  handleplaytimeChange(event) {
  this.setState({playtimeedit: event.target.value})
  }
  handlemaxplayerschange(event) {
  this.setState({maxplayeredit: event.target.value})
  }


  ///buyBoardGames/byusername/:username/boardgameid/:bg_id/quantity/:quantity
  onPurchaseClick = () => {
    console.log("buying")
    if(this.props.details.quantity > 0)
    {fetch(API + '/buyBoardGames/byusername/' + localStorage.getItem('username') + '/boardgameid/' + this.props.details.bg_id + '/quantity/1', {method: 'POST'})
    this.setState({ showPurchasebutton: false  });
    alert( 'Game Successfully Purchased!');}
    else {alert( 'No stock left in the system!');}
    document.location.reload()
  }
  handleEditSave= () => {
    console.log(this.props.details.bg_id)
    //"/editBoardGames/boardgameid/:bg_id/desc/:desc/publisher/:publisher/avg_time/:avg_time/max_player/:max_player"
      fetch(API + '/editBoardGames/boardgameid/' +  this.props.details.bg_id  + '/desc/' + this.state.descriptionedit +'/publisher/ '+ this.state.publisheredit
      +'/avg_time/' + this.state.playtimeedit + '/max_player/' + this.state.maxplayeredit  , {method: 'POST'})

      alert("Board Game Updated!")
        this.setState({ editopen: false });
        document.location.reload()
  }

  onEditClick= () => {
    console.log("edit")
    this.setState({ editopen: true });
  }

  handleClose = () => {
    this.forceUpdate();
  this.setState({ editopen: false });
  };

  render() {
    const { classes } = this.props;
    return(
       <div>
              <Grid className={classes.gridItem}  item>
                <Card id="libraryBoardGameCardID" className={classes.card} details={this.props.details}>
                <CardActionArea onClick={this.onEditClick}>
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
                    <CardActions>
                      {this.state.showPurchasebutton  && <Button variant="contained" className={classes.purchaseButtonsize} size="small" onClick={this.onPurchaseClick}>
                        Purchase
                        </Button>
                      }

                      <Typography align="right" variant="body2"> {this.props.details.quantity} in Stock</Typography>
                      </CardActions>
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
                  Edit for {this.props.details.title} Game
              </Typography>
              <Button color="inherit" onClick={this.handleEditSave}>
        
                save
              </Button>
            </Toolbar>
          </AppBar>
          <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel >Description</InputLabel>
            <Input name="description"  id="descriptionID"  />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel >Description</InputLabel>
            <Input name="description"  id="descriptionID" value={this.state.descriptionedit} onChange={this.handledescriptionChange.bind(this)} />
          </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel >Publisher</InputLabel>
              <Input id="publishereditID" name="publisher"  value={this.state.publisheredit} onChange={this.handlepublisherChange.bind(this)}  />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel >Max Players</InputLabel>
              <Input name="maxplayer"  id="maxplayerID" value={this.state.maxplayeredit} onChange={this.handlemaxplayerschange.bind(this)}  />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel >Play Time</InputLabel>
              <Input name="playtime" id="playtimeID" value={this.state.playtimeedit} onChange={this.handleplaytimeChange.bind(this)}  />
            </FormControl>
            </form>
        </Dialog>
                </Card>
              </Grid>

              </div>
    )
  }
}

function redTouser() {
  return <Redirect to="/user/"/>
}
function Transition(props) {
return <Slide direction="up" {...props} />;
}
BoardGameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
//     <Route  to={{pathname: '/details',
//     state: { viewdetails: this.props.details }
// }} component = {BoardGameDetailView}/>

export default withStyles(styles)( BoardGameCard);
