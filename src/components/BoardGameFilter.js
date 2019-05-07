import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import LibraryIcon from '@material-ui/icons/LibraryBooks';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class BoardGameFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poetFilter: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      poetFilter: e.target.value
    })
    //this.props.onChange(event.target.value)
  }

  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Poet: </label>
        <input type="text" id="filter"
          value={this.state.poetFilter}
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default BoardGameFilter
