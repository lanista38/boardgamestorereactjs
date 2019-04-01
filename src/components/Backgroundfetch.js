import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

})

class Backgroundfetch extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    console.log("Fetching")
    fetch('https://bgg-json.azurewebsites.net/hot')
    .then(response =>  response.json())
    .then(data => this.setState({ data}));
          console.log(this.state.data)
}
  render() {
    return(
      <div></div>
    )
  }
}

export default ( Backgroundfetch);


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
