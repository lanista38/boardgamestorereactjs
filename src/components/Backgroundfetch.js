import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

})

const API = 'http://localhost:4567/';

class BackgroundFetchBGStock extends Component {
  constructor(props){
    super(props);
    this.state = {
      allbg: []
    }
  }
  componentDidMount(){
    console.log("Fetching")
    fetch(API + '/getBoardGames')
    .then(response =>  response.json())
    .then(resdata => {this.setState({ allbg: resdata });
     console.log(this.state.allbg)})

}
  render() {
    return(
      <div></div>
    )
  }
}

class BackgroundFetchPrivateLibrary extends Component {
  constructor(props){
    super(props);
    this.state = {
      bglibrary: []
    }
  }
  componentDidMount(){
    console.log("Fetching")
    fetch('https://bgg-json.azurewebsites.net/hot')
    .then(response =>  response.json())
    .then(bglibrary => this.setState({ bglibrary}));
          console.log(this.state.bglibrary)
}
  render() {
    return(
      <div></div>
    )
  }
}


class BackgroundFetchUserData extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: []
    }
  }
  componentDidMount(){
    console.log("Fetching")
    fetch('https://bgg-json.azurewebsites.net/hot')
    .then(response =>  response.json())
    .then(user => this.setState({ user}));
          console.log(this.state.user)
}
  render() {
    return(
      <div></div>
    )
  }
}

export default ( BackgroundFetchBGStock);


// let fetchedgame = data.results.map( (game) => {
//   return(
//     <div key={game.results}>
//       <Typography>{game.name}</Typography>
//     </div>
//   )
// })
//   console.log("Fetching")
// this.setState({boardgame: fetchedgame});
// console.log("state", this.state.boardgame);
// }})
