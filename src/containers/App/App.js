import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Helmet from 'react-helmet';
import connectData from 'helpers/connectData';
import config from '../../config';

function fetchData(getState, dispatch) {
  return Promise.resolve()
}

@connectData(fetchData)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');

    return <div>Hello!</div>;
  }
}
